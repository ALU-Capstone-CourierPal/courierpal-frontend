/* eslint-disable react/prop-types */
import OrderView from '@components/tripView';
import React, { useState } from 'react';
import MainLayout from '@components/main';

import {
  DestinationHead,
  DestinationsText,
} from '@components/home/index.styles';
import axios from 'util/axios';
import Slider from '@components/global/slider';
import { useRouter } from 'next/router';

export default function OneOrderView({ order }) {
  const router = useRouter();
  const { id } = router.query;
  const [showTrip, setShowTrip] = useState(false);
  const [showingReg, showReg] = useState(false);
  const [filteredTrips, setFilteredTrips] = useState(null);
  const [profile, setProfile] = useState(false);

  return (
    <MainLayout
      tripShow={showTrip}
      closing={() => {
        setShowTrip(false);
        showReg(false);
      }}
      sendTrips={(val) => setFilteredTrips(val)}
      showregg={showingReg}
      closeTrip={() => setShowTrip(false)}
      checkLogin={() => setProfile(!profile)}
      sendFilteredTrips={(val) => console.log(val)}
      setPhone={(val) => console.log('')}
      sendTripsMine={(val) => console.log('')}
      sendMyTrips={(val) => console.log('')}
      sendOrders={(val) => console.log('')}
    >
      <OrderView
        order={order}
        showtrip={() => setShowTrip(true)}
        showreg={() => showReg(true)}
        showregg={() => showReg(true)}
        profile={profile}
      />
      <DestinationsText>
        <DestinationHead>Other trips from {order.from}</DestinationHead>
      </DestinationsText>
      <Slider
        items={filteredTrips?.filter(
          (item) => item?._id !== id && item.from === order.from,
        )}
      />
    </MainLayout>
  );
}

// get server side props using param handle
export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  try {
    const res = await axios.get(`/trips/${id}`);
    return {
      props: {
        order: res.data.data,
        currentUrl: ctx.req.url,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  }
};
