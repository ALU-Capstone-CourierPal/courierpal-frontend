import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  HomeContainer,
  Hero,
  CallToAction,
  FirstTitle,
  Description,
  Button,
  NavTo,
  NavText,
  Span,
  ButtonWrap,
  DestinationsText,
  DestinationHead,
  DestinationPara,
} from './index.styles';
import { getCookie } from 'cookies-next';

import RecentOrders from './orders';
import RequestItem from './requestItem';
import TestimoniesFaq from './testimonials';
import Slider from '@components/global/slider';

export default function HomeComponent({
  showtrip,
  showreg,
  trips,
  checkProfile,
  orders,
}) {
  const [isLogged, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(!!getCookie('token'));
  }, [checkProfile]);
  return (
    <>
      <Head>
        <title>CourierPal</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dpnbddror/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1637870721/brand_assets/LOGO_Karent_tx5hn5.png"
        />
      </Head>
      <HomeContainer>
        <Hero
          src={
            'https://res.cloudinary.com/dpnbddror/image/upload/v1647808370/courier-pal/hero_izxod2.webp'
          }
        >
          <CallToAction>
            <FirstTitle>
              <Span>Shop without borders, </Span>
              <Span>Travel and Earn</Span>
            </FirstTitle>
            <Description>
              CourierPal connects shoppers and travelers who assist each other
              in getting items across the world
            </Description>
            <ButtonWrap>
              <Button
                onClick={() => {
                  isLogged ? showtrip() : showreg();
                }}
              >
                Travel with CourierPal
              </Button>
            </ButtonWrap>

            <Link className="link" href="/how-it-works">
              <a className="a" style={{ textDecoration: 'none' }}>
                <NavTo>
                  <Image
                    src={'/images/works.svg'}
                    height={20}
                    width={20}
                    alt="How it works"
                  />
                </NavTo>
                <NavText>How it works?</NavText>
              </a>
            </Link>
          </CallToAction>
        </Hero>
        <DestinationsText>
          <DestinationHead>Trips</DestinationHead>
          <DestinationPara>
            Need that special item from another country? Browse to see who is
            coming from that country?
          </DestinationPara>
        </DestinationsText>
        <Slider items={trips} checkProfile={checkProfile} />
        <DestinationsText>
          <DestinationHead>
            How to request for an item from a traveler
          </DestinationHead>
        </DestinationsText>
        <RequestItem />

        <TestimoniesFaq />

        <DestinationsText>
          <DestinationHead>Recent orders</DestinationHead>
        </DestinationsText>
        <RecentOrders orders={orders} />
      </HomeContainer>
    </>
  );
}
