import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { removeCookies } from "cookies-next";
import Avatar from "react-avatar";
import {
  MainHeader,
  Middle,
  End,
  Span,
  UserPic,
  DropDown,
  DropDownList,
  Item,
  Pic,
} from "./index.styles";

import { getCookie } from "cookies-next";

import { useRouter } from "next/router";

export default function Header({ showReg, showLogin, showTrip, profile }) {
  const router = useRouter();
  const [showDrop, setShowDrop] = useState(false);
  const [isLogged, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(!!getCookie("token"));
  }, [profile]);
  return (
    <MainHeader>
      <Link href="/">
        <a>
          <Image
            src={"/images/logoBig.svg"}
            height="80"
            width="150"
            alt={"logo"}
            className="logo"
          />
        </a>
      </Link>

      <Middle>
        <Span
          onClick={() => {
            isLogged ? showTrip(true) : showReg();
          }}
        >
          Travel
        </Span>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Middle>
      {profile || isLogged ? (
        <End className="user">
          {profile && (
            <>
              <UserPic>
                {profile?.profilePicture?.url ? (
                  <Pic src={profile?.profilePicture?.url} />
                ) : (
                  <Avatar
                    size="50"
                    color="#39aea9"
                    round={true}
                    name={`${profile?.firstname} ${profile?.lastname}`}
                  />
                )}
              </UserPic>
              <DropDown onClick={() => setShowDrop(!showDrop)}>
                <Span>{profile?.firstname}</Span>
                <Span>
                  <Image
                    src={"/images/down.svg"}
                    height="20"
                    width="20"
                    alt="drop"
                  />
                </Span>
              </DropDown>
            </>
          )}

          {showDrop && (
            <DropDownList>
              <Item onClick={() => router.push("/profile")}>Profile</Item>
              <Item onClick={() => router.push("/mytrips")}>Trips</Item>
              <Item onClick={() => router.push("/myorders")}>Orders</Item>
              <Item
                onClick={() => {
                  localStorage.clear();
                  removeCookies("token");
                  window.location.replace("/");
                }}
              >
                Logout
              </Item>
            </DropDownList>
          )}
        </End>
      ) : (
        <End>
          <Span onClick={() => showLogin()}>Login</Span>
          <Span className="signup" onClick={() => showReg()}>
            Sign Up
          </Span>
        </End>
      )}
    </MainHeader>
  );
}
