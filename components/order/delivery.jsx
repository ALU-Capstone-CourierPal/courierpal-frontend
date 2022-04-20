import {
  Error,
  Form,
  FormInput,
  InputGroup,
  Submit,
} from "@components/home/modals/index.styles";
import React, { useState } from "react";

import messageBanner from "@components/global/messageBanner";

export default function OrderDelivery(props) {
  // submit
  const onSubmit = (e) => {
    e.preventDefault();

    const deliveryObj = {
      from: props.trip.from,
      to: props.trip.to,
    };
    messageBanner({
      message: `Delivery details saved successfully`,
      status: "success",
    });

    props.sendData(deliveryObj);
    props.goNext();
  };
  return (
    <Form>
      <InputGroup>
        <FormInput
          type="text"
          name="ordername"
          value={props.trip.from}
          readOnly
        />
      </InputGroup>

      <InputGroup>
        <FormInput
          type="text"
          name="orderlink"
          value={props.trip.to}
          readOnly
        />
      </InputGroup>

      <Submit onClick={onSubmit} type="submit">
        Next
      </Submit>
    </Form>
  );
}
