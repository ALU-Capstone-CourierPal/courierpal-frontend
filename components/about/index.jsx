import React from 'react';
import Image from 'next/image';

import { useRouter } from 'next/router';

import {
  Wrapper,
  Title,
  Groups,
  Group,
  Circle,
  TextSide,
  H2,
  P,
  Button,
} from './index.styles';
import { Banner } from '@components/testimonials/index.styles';

export default function AboutUs() {
  const router = useRouter();
  return (
    <Wrapper>
      <Banner />
      <Title>About us</Title>
      <Groups>
        <Group>
          <Circle>
            <Image
              src={'/images/shop.png'}
              height={70}
              width={70}
              alt="stepone"
            />
          </Circle>
          <TextSide>
            <H2>Shop that special item</H2>
            <P>
              We allow students to shop from special items from their home
              countries or other countries by connecting them with a travel who
              is coming to Rwanda. While things can’t travel people can, to put
              a smile on your face
            </P>
            <Button onClick={() => router.push('/how-it-works')}>
              Learn how to shop
            </Button>
          </TextSide>
        </Group>
        <Group>
          <Circle>
            <Image
              src={'/images/takeoff.svg'}
              height={70}
              width={70}
              alt="stepone"
            />
          </Circle>
          <TextSide>
            <H2>Travel the world</H2>
            <P>
              We help travelers make extra cash wille undertaking a trip they
              planed on taking anyway by connecting them with a shopper{' '}
            </P>
            <Button onClick={() => router.push('/how-it-works')}>
              How to travel
            </Button>
          </TextSide>
        </Group>
      </Groups>
    </Wrapper>
  );
}
