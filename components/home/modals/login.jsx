import Modal from "@components/global/modalLayout/main";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import axios from "util/axios";
import {
  Form,
  FormInput,
  Submit,
  Error,
  InputGroup,
  HorizontalRule,
  ModalFooter,
  Para,
  Or,
  GoogleBtn,
  GText,
  LoginMore,
} from "./index.styles";
import { SpinnerSmall } from "@components/global/spinner";

import messageBanner from "@components/global/messageBanner";
import { setCookies } from "cookies-next";

export default function LoginModal(props) {
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

  const [loading, setLoading] = useState(false);

  const LoginEmail = async (obj) => {
    setLoading(true);
    try {
      const res = await axios.post(`/customers/auth/login`, obj);
      setLoading(false);
      setCookies("token", res.data.data);
      props.close();
      props.getUserInfo();
    } catch (error) {
      setLoading(false);
      console.log(error);
      messageBanner({
        status: "error",
        message: "Login failed. Check your credentials",
      });
    }
  };

  const onsubmit = (e) => {
    e.preventDefault();

    const loginObj = {
      password: password,
      email: email,
    };

    setEmail("");
    setPassword("");

    LoginEmail(loginObj);
  };

  return (
    <Modal close={props.close} title={"Sign in"}>
      {loading ? (
        <SpinnerSmall />
      ) : (
        <Form>
          <InputGroup>
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={OnchangeEmail}
              placeholder="Email"
            />

            {emailError && <Error>Enter correct email format</Error>}
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

          <Submit onClick={onsubmit} type="submit">
            Login
          </Submit>
          <HorizontalRule></HorizontalRule>
          <ModalFooter>
            <LoginMore>
              <Para>Forgot your password?</Para>
              <Or>OR</Or>
              <GoogleBtn>
                <Image
                  src={"/images/google.svg"}
                  height="24"
                  width="24"
                  alt="google login"
                />
                <GText>Continue with Google</GText>
              </GoogleBtn>
            </LoginMore>

            <Para>
              Don’t have an account?{" "}
              <span onClick={() => props.showreg()}>Sign Up</span>
            </Para>
          </ModalFooter>
        </Form>
      )}
    </Modal>
  );
}
