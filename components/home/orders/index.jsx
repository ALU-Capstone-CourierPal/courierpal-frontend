/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Wrapper } from './index.styles';

import { SpinnerSmall } from '@components/global/spinner';

import { useEffect } from 'react';

import { useRouter } from 'next/router';
import OneOrderComponent from './oneOrder';

export default function RecentOrders({
  orders,
  showPay,
  reRender,
  myorders,
  profile,
}) {
  const router = useRouter();
  const [ordersAll, setOrdersAll] = useState(null);
  useEffect(() => {
    orders &&
      (router.pathname === '/'
        ? setOrdersAll(orders.filter((item) => item.delivered))
        : setOrdersAll(orders));
  }, [orders, router.pathname]);

  return (
    <Wrapper>
      {!ordersAll ? (
        <SpinnerSmall />
      ) : ordersAll.length === 0 ? (
        <h2>No orders yet</h2>
      ) : (
        ordersAll.map((order, i) => (
          <OneOrderComponent
            key={i}
            order={order}
            showPay={showPay}
            reRender={reRender}
            myorders={myorders}
            filterOut={(order) =>
              setOrdersAll(ordersAll.filter((o) => o._id !== order))
            }
            profile={profile}
          />
        ))
      )}
    </Wrapper>
  );
}
