import Modal from "@components/global/modalLayout/main";
import Link from "next/link";
import React, { useState } from "react";
import {
  Form,
  FormInput,
  Submit,
  Error,
  InputGroup,
  HorizontalRule,
  ModalFooter,
  Para,
} from "./index.styles";

import axios from "util/axios";

import messageBanner from "@components/global/messageBanner";
import { SpinnerSmall } from "@components/global/spinner";

export default function RegisterModal(props) {
  const [fnameError, setFnameError] = useState(false);
  const [fname, setFname] = useState("");
  const OnchangeFname = (e) => {
    if (e.target.value === "") {
      setFnameError(true);
      setFname(e.target.value);
    } else {
      setFnameError(false);
      setFname(e.target.value);
    }
  };

  const [lnameError, setLnameError] = useState(false);
  const [lname, setLname] = useState("");
  const OnchangeLname = (e) => {
    if (e.target.value === "") {
      setLnameError(true);
      setLname(e.target.value);
    } else {
      setLnameError(false);
      setLname(e.target.value);
    }
  };

  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState("");
  const OnchangeEmail = (e) => {
    if (
      e.target.value === "" ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)
    ) {
      setEmailError(true);
      setEmail(e.target.value);
    } else {
      setEmailError(false);
      setEmail(e.target.value);
    }
  };

  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState("");
  const OnchangePassword = (e) => {
    if (e.target.value === "" || e.target.value.length < 8) {
      setPasswordError(true);
      setPassword(e.target.value);
    } else {
      setPasswordError(false);
      setPassword(e.target.value);
    }
  };

  // phone input
  const [phoneError, setPhoneError] = useState(false);
  const [phone, setPhone] = useState("");
  const OnchangePhone = (e) => {
    if (e.target.value === "" || e.target.value.length < 10) {
      setPhoneError(true);
      setPhone(e.target.value);
    } else {
      setPhoneError(false);
      setPhone(e.target.value);
    }
  };

  const [loading, setLoading] = useState(false);

  const RegisterEmail = async (obj) => {
    setLoading(true);
    try {
      const res = await axios.post(`/customers/auth/register`, obj);
      setLoading(false);
      messageBanner({
        status: "success",
        message: "Registered successfully! Login to continue",
      });

      props.close();
      props.showLogin();
    } catch (error) {
      setLoading(false);
      console.log(error);
      messageBanner({
        status: "error",
        message: "Registration failed!",
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const emailObj = {
      firstname: fname,
      lastname: lname,
      password: password,
      email: email,
      authType: "email",
      phone: phone,
    };

    setFname("");
    setLname("");
    setEmail("");
    setPassword("");

    RegisterEmail(emailObj);
  };

  return (
    <Modal close={props.close} title={"Sign up with Email"}>
      {loading ? (
        <SpinnerSmall />
      ) : (
        <Form>
          <InputGroup>
            <FormInput
              type="text"
              name="fname"
              value={fname}
              onChange={OnchangeFname}
              placeholder="First name"
              maxLength="25"
            />
            {fnameError && <Error>First name is required</Error>}
          </InputGroup>
          <InputGroup>
            <FormInput
              type="text"
              name="lname"
              value={lname}
              onChange={OnchangeLname}
              placeholder="Last name"
              maxLength="25"
            />

            {lnameError && <Error>Last name is required</Error>}
          </InputGroup>
          <InputGroup>
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={OnchangeEmail}
              placeholder="Email"
            />

            {emailError && <Error>Email required</Error>}
          </InputGroup>

          <InputGroup>
            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={OnchangePassword}
              placeholder="Password"
              minLength="8"
            />

            {passwordError && (
              <Error>Password of atleast 8 characters required</Error>
            )}
          </InputGroup>

          <InputGroup>
            <FormInput
              type="text"
              name="phone"
              value={phone}
              onChange={OnchangePhone}
              placeholder="WhatsApp number Eg: +250781234567"
              minLength="10"
            />

            {phoneError && <Error>Phone number required</Error>}
          </InputGroup>

          <Submit
            disabled={
              fname.length < 1 ||
              lname.length < 1 ||
              email.length < 1 ||
              password.length < 1 ||
              phone.length < 1
            }
            onClick={onSubmit}
            type="submit"
          >
            Sign up
          </Submit>
          <HorizontalRule></HorizontalRule>
          <ModalFooter>
            <Para>
              Already have an account?{" "}
              <span onClick={() => props.showlogin()}>Login</span>
            </Para>
            <Para>
              By using CourierPal, I agree to their and{" "}
              <Link href="/">
                <a>terms and services</a>
              </Link>{" "}
              and{" "}
              <Link href="/">
                <a>privacy policy</a>
              </Link>
            </Para>
          </ModalFooter>
        </Form>
      )}
    </Modal>
  );
}
