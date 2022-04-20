import React from 'react';
import {
  WrapOrder,
  Block,
  Item,
  OrderName,
  OrderPic,
  KeyName,
  ValueName,
  HorizontalRule,
  TotalKey,
  FooterText,
  Submit,
} from './index.styles';

import Link from 'next/link';

export default function OrderSummary({ order, trip, sendData }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const finalObj = {
      total: parseInt(order.price) + parseInt(trip.award) + 20,
    };
    sendData(finalObj);
    // sendDataNow();
  };
  return (
    <WrapOrder>
      <Block>
        <Item>
          <OrderPic src={order.images[0].preview} />
          <OrderName>{order.name}</OrderName>
        </Item>
        <Item>
          <KeyName>Deliver from</KeyName>
          <ValueName>{order.from}</ValueName>
        </Item>
        <Item>
          <KeyName>Deliver to</KeyName>
          <ValueName>{order.to}</ValueName>
        </Item>
        <HorizontalRule />
        <Item>
          <KeyName>Quantity</KeyName>
          <ValueName>{order.quantity}</ValueName>
        </Item>
        <Item>
          <KeyName>Where to buy</KeyName>
          <ValueName>{order.link}</ValueName>
        </Item>
      </Block>
      <Block>
        <Item>
          <KeyName>Product Total Price</KeyName>
          <ValueName>{`$${order.price * order.quantity}`}</ValueName>
        </Item>
        <Item>
          <KeyName>Traveler Award</KeyName>
          <ValueName>
            ${order.weight * trip.pricePerLuggageSpace * order.quantity}
          </ValueName>
        </Item>

        <Item>
          <KeyName>Service Fee</KeyName>
          <ValueName>{`$10`}</ValueName>
        </Item>
        <HorizontalRule />
        <Item>
          <TotalKey>Estimated total</TotalKey>
          <ValueName>{`$${
            parseInt(order.price * order.quantity) +
            parseInt(
              order.weight * trip.pricePerLuggageSpace * order.quantity,
            ) +
            10
          }`}</ValueName>
        </Item>
        <Submit onClick={onSubmit}>Submit</Submit>
        <FooterText>
          By publishing my order, I agree to the{' '}
          <Link href="/">
            <a>Terms of Use.</a>
          </Link>{' '}
          I understand that if the order price is incorrect, my order may be
          canceled.
        </FooterText>
      </Block>
    </WrapOrder>
  );
}
