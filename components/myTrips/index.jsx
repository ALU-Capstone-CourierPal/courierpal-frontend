/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  Title,
  Header,
  AddTrip,
  Trips,
  Upcoming,
  TripsAll,
} from './index.styles';

import { SpinnerSmall } from '@components/global/spinner';
import OneTripComponent from './oneTrip';
import axios from 'util/axios';

export default function MyTrips({ showTripModal }) {
  // get trips of a user
  const [myTrips, setMyTrips] = useState(null);
  const [allOrders, setAllOrders] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    localStorage.getItem('userId') && setUserId(localStorage.getItem('userId'));
  }, []);

  const getMyTrips = async () => {
    try {
      const res = await axios.get(`/customers/${userId}/trips`);
      setMyTrips(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllOrders = async () => {
    try {
      const res = await axios.get(`/orders/all`);
      setAllOrders(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    !myTrips && userId && getMyTrips();
    !allOrders && getAllOrders();
  }, [userId]);

  return (
    <Wrapper>
      <Header>
        <Title>Trips</Title>
        <AddTrip onClick={() => showTripModal()}>Add trip</AddTrip>
      </Header>
      <Trips>
        <Upcoming>Upcoming Trips</Upcoming>
        <TripsAll>
          {!myTrips || !allOrders ? (
            <SpinnerSmall />
          ) : myTrips.length === 0 ? (
            <h2>No trips</h2>
          ) : (
            myTrips.map((item, index) => (
              <OneTripComponent key={index} orders={allOrders} trip={item} />
            ))
          )}
        </TripsAll>
      </Trips>
    </Wrapper>
  );
}
