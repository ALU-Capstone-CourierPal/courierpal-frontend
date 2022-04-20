import React, { useState } from 'react';

import {
  Wrapper,
  ImagePic,
  OrderDetails,
  Group,
  H1,
  SubHead,
  DescTitle,
  Desc,
  Key,
  Value,
  Request,
  Item,
  Delivered,
} from './index.styles';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { getCookie } from 'cookies-next';
import { checkLocation } from '@components/global/checkFrom';

export default function TripView({ order, showregg, profile }) {
  const [isLogged, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!getCookie('token'));
    order && localStorage.setItem('order', JSON.stringify(order));
    // save order to local storage
  }, [order, profile]);
  const router = useRouter();

  const processDate = (date) => {
    const dateObj = new Date(date);
    // generate date in format of March 21st, 2022 from date object
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const day = dateObj.getDate();
    const monthIndex = dateObj.getMonth();
    const year = dateObj.getFullYear();
    return `${monthNames[monthIndex]} ${day}, ${year}`;
  };

  return (
    <Wrapper>
      <ImagePic src={checkLocation(order?.from, 'cities')} />
      <OrderDetails>
        <Group>
          <H1>
            <span>Available luggage space</span>
            <span>{`${order.availableLuggageSpace} Kgs`}</span>
          </H1>
          <SubHead>
            <span>Cost per luggage space</span>
            <span>{`$${order.pricePerLuggageSpace}`}</span>
          </SubHead>
        </Group>
        <Group>
          <DescTitle>Description</DescTitle>
          <Desc>{order.description}</Desc>
        </Group>
        <Group>
          <Item>
            <Key>Travel Date</Key>
            <Value>{processDate(order?.travelDate)}</Value>
          </Item>
          <Item>
            <Key>Arrival Date</Key>
            <Value>{processDate(order?.arrivalDate)}</Value>
          </Item>
          <Item>
            <Key>Country</Key>
            <Value>{order.from}</Value>
          </Item>
        </Group>
        <Group>
          <Request
            onClick={() => {
              isLogged ? router.push('/order') : showregg();
            }}
          >
            Request Item
          </Request>
          <Delivered>Delivered to 10 shoppers</Delivered>
        </Group>
      </OrderDetails>
    </Wrapper>
  );
}
