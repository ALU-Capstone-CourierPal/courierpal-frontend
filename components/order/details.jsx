import {
  Error,
  Form,
  FormArea,
  FormInput,
  InputGroup,
} from "@components/home/modals/index.styles";

import {
  Submit,
  DragZoneContainer,
  UploadContainer,
  UploadText,
  Preview,
  PreviewWrapper,
} from "./index.styles";

import messageBanner from "@components/global/messageBanner";

import React, { useState } from "react";

import Image from "next/image";
import { useDropzone } from "react-dropzone";

export default function OrderDetails(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png, image/jpg",
    onDrop: (acceptedFiles) => {
      const renamedAcceptedFiles = acceptedFiles.slice(0, 1).map(
        (file) =>
          new File([file], `${file.name}_${+new Date()}`, {
            type: file.type,
          })
      );
      const newFile = renamedAcceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setFiles([...files, ...newFile]);
    },
  });
  const filter = (id) => files.filter((file) => file.name !== id);
  const remove = (id, e) => {
    let newFiles = filter(id);
    setFiles(newFiles);
    e.stopPropagation();
  };
  // order name
  const [orderName, setOrderName] = useState("");
  const [orderNameError, setOrderNameError] = useState(false);
  const onChangeOrderName = (e) => {
    if (e.target.value === "") {
      setOrderNameError(true);
      setOrderName(e.target.value);
    } else {
      setOrderNameError(false);
      setOrderName(e.target.value);
    }
  };
  // order link
  const [orderLink, setOrderLink] = useState("");
  const onChangeOrderLink = (e) => {
    setOrderLink(e.target.value);
  };
  // order price
  const [orderPrice, setOrderPrice] = useState("");
  const [orderPriceError, setOrderPriceError] = useState(false);
  const onChangeOrderPrice = (e) => {
    if (e.target.value === "" || parseInt(e.target.value) < 1) {
      setOrderPriceError(true);
      setOrderPrice(e.target.value);
    } else {
      setOrderPriceError(false);
      setOrderPrice(e.target.value);
    }
  };
  // order quantity
  const [orderQuantity, setOrderQuantity] = useState("");
  const [orderQuantityError, setOrderQuantityError] = useState(false);
  const onChangeOrderQuantity = (e) => {
    if (e.target.value === "" || parseInt(e.target.value) < 1) {
      setOrderQuantityError(true);
      setOrderQuantity(e.target.value);
    } else {
      setOrderQuantityError(false);
      setOrderQuantity(e.target.value);
    }
  };
  // order weight
  const [orderWeight, setOrderWeight] = useState("");
  const [orderWeightError, setOrderWeightError] = useState(false);
  const onChangeOrderWeight = (e) => {
    if (
      e.target.value === "" ||
      parseInt(e.target.value) < 0 ||
      parseInt(e.target.value) >
        props?.trip?.availableLuggageSpace / orderQuantity
    ) {
      setOrderWeightError(true);
      setOrderWeight(e.target.value);
    } else {
      setOrderWeightError(false);
      setOrderWeight(e.target.value);
    }
  };
  // order description
  const [orderDescription, setOrderDescription] = useState("");
  const [orderDescriptionError, setOrderDescriptionError] = useState(false);
  const onChangeOrderDescription = (e) => {
    if (e.target.value === "") {
      setOrderDescriptionError(true);
      setOrderDescription(e.target.value);
    } else {
      setOrderDescriptionError(false);
      setOrderDescription(e.target.value);
    }
  };
  // submit
  const onSubmit = (e) => {
    e.preventDefault();

    const OrderDetailsObj = {
      name: orderName,
      link: orderLink,
      price: orderPrice,
      quantity: orderQuantity,
      weight: orderWeight,
      description: orderDescription,
      images: files,
    };

    setOrderName("");
    setOrderLink("");
    setOrderPrice("");
    setOrderQuantity("");
    setOrderWeight("");
    setOrderDescription("");

    messageBanner({
      message: `Order details saved successfully`,
      status: "success",
    });

    props.sendData(OrderDetailsObj);
    props.goNext();
  };
  return (
    <Form>
      <InputGroup>
        <FormInput
          type="text"
          name="ordername"
          value={orderName}
          onChange={onChangeOrderName}
          placeholder="Order name"
          maxLength="25"
          required
        />
        {orderNameError && <Error>Order name required</Error>}
      </InputGroup>

      <InputGroup>
        <FormInput
          type="text"
          name="orderlink"
          value={orderLink}
          onChange={onChangeOrderLink}
          placeholder="Where to buy"
          maxLength="25"
          required
        />
      </InputGroup>

      <InputGroup>
        <FormInput
          type="number"
          name="price"
          value={orderPrice}
          onChange={onChangeOrderPrice}
          placeholder="Order price ($)"
          required
        />

        {orderPriceError && <Error>Order price required</Error>}
      </InputGroup>
      <DragZoneContainer>
        {files.length === 0 && (
          <UploadContainer {...getRootProps()}>
            <input {...getInputProps()} />
            <Image
              src={"/images/camera.png"}
              height="40"
              width="40"
              alt="upload image"
            />
            <UploadText>Upload order image</UploadText>
          </UploadContainer>
        )}

        {files.length > 0 &&
          files.map((item, id) => (
            <PreviewWrapper key={id}>
              <div className="close" onClick={(e) => remove(item.name, e)}>
                <Image
                  src={"/images/close.svg"}
                  height="30"
                  width="30"
                  alt="close"
                />
              </div>

              <Preview src={item.preview} />
            </PreviewWrapper>
          ))}
      </DragZoneContainer>

      <InputGroup>
        <FormInput
          type="number"
          name="quantity"
          value={orderQuantity}
          onChange={onChangeOrderQuantity}
          placeholder="Quantity"
          required
        />

        {orderQuantityError && <Error>Quantity required</Error>}
      </InputGroup>

      <InputGroup>
        <FormInput
          type="number"
          name="weight"
          value={orderWeight}
          onChange={onChangeOrderWeight}
          placeholder={`Weight of one order (in kg)`}
          max={props?.trip?.availableLuggageSpace / orderQuantity}
          required
        />

        {orderWeightError && (
          <Error>
            Error. Enter numbers only. Maximum weight is{" "}
            {props?.trip?.availableLuggageSpace / orderQuantity} kg
          </Error>
        )}
      </InputGroup>

      <InputGroup>
        <FormArea
          name="description"
          value={orderDescription}
          onChange={onChangeOrderDescription}
          placeholder="Description"
          required
        />

        {orderDescriptionError && <Error>Order description required</Error>}
      </InputGroup>

      <Submit
        disabled={
          orderName.length < 1 ||
          orderPrice < 1 ||
          orderQuantity < 1 ||
          orderDescription < 1 ||
          orderWeight < 0 ||
          files.length < 1
        }
        onClick={onSubmit}
        type="submit"
      >
        Next
      </Submit>
    </Form>
  );
}
