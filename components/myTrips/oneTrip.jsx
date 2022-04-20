import React, { useEffect, useState } from 'react';
import {
  OneTrip,
  ImageEnd,
  Details,
  Top,
  TitleTrip,
  DateTravel,
  Footer,
  OneGroup,
  Num,
  Span,
} from './index.styles';
import { checkLocation } from '@components/global/checkFrom';
import messageBanner from '@components/global/messageBanner';
import { useRouter } from 'next/router';

export default function OneTripComponent({ orders, trip }) {
  const router = useRouter();
  // get orders of a trip
  const [ordered, setOrdered] = useState(null);
  const [delivered, setDelivered] = useState(null);
  const [earnings, setEarnings] = useState(null);

  useEffect(() => {
    if (trip && orders) {
      // filter orders by trip id
      const filteredOrders = orders.filter((order) => {
        return order.trip[0] === trip._id;
      });
      setOrdered(filteredOrders);

      // filter delivered from filteredOrders
      if (filteredOrders.length > 0) {
        const deliveredData = filteredOrders.filter(
          (order) => order.delivered === true,
        );
        setDelivered(deliveredData);
        if (deliveredData.length > 0) {
          // add all reward from delivered orders
          let totalEarn = 0;
          for (let i = 0; i < deliveredData.length; i++) {
            const element = deliveredData[i];
            totalEarn += element.award;
          }
          setEarnings(totalEarn);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trip, orders]);

  const processDate = (date) => {
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
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const monthIndex = dateObj.getMonth();
    const year = dateObj.getFullYear();
    return `${monthNames[monthIndex]} ${day}, ${year}`;
  };

  return (
    <OneTrip
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      onClick={() => {
        orders?.filter((order) => order.trip[0] === trip._id)?.length > 0
          ? router.push(`/mytrip/${trip._id}`)
          : messageBanner({
              status: 'info',
              message: 'This trip does not have any orders yet',
            });
      }}
    >
      <ImageEnd src={checkLocation(trip?.from, 'cities')} />
      <Details>
        <Top>
          <TitleTrip>{trip?.from + ' - ' + trip?.to}</TitleTrip>
          <DateTravel>{`Travel date: ${processDate(
            trip?.travelDate,
          )}`}</DateTravel>
          <DateTravel>{`Arrival date: ${processDate(
            trip?.arrivalDate,
          )}`}</DateTravel>
        </Top>
        <Footer>
          <OneGroup>
            <Num>{ordered?.length || 0}</Num>
            <Span>Ordered</Span>
          </OneGroup>
          <OneGroup>
            <Num>{delivered?.length || 0}</Num>
            <Span>Delivered</Span>
          </OneGroup>
          <OneGroup>
            <Num>${earnings || 0}</Num>
            <Span>Earnings</Span>
          </OneGroup>
        </Footer>
      </Details>
    </OneTrip>
  );
}
