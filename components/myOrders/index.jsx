import RecentOrders from '@components/home/orders';
import axios from 'util/axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Wrapper, Title, Tabs, Span, Group } from './index.styles';
import { SpinnerSmall } from '@components/global/spinner';

export default function MyOrders({ profile }) {
  // orders
  const [allOrders, setAllOrders] = useState(null);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    localStorage.getItem('userId') && setUserId(localStorage.getItem('userId'));
  }, []);

  const getOrders = async () => {
    try {
      const res = await axios.get('/orders');

      const myTrips = res.data.data.filter((item) => item.customer === userId);
      setAllOrders(res.data.data.filter((item) => item.customer === userId));
    } catch (error) {
      console.log(error);
    }
  };

  const [reload, setReload] = useState(false);

  useEffect(() => {
    userId && !allOrders && getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload, userId]);

  const [pending, setPending] = useState(null);
  const [accepted, setAccepted] = useState(null);
  const [completed, setCompleted] = useState(null);

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (allOrders) {
      const pending = allOrders.filter((order) => order.status === 'pending');
      const accepted = allOrders.filter((order) => order.status === 'accepted');
      const completed = allOrders.filter(
        (order) => order.status === 'received',
      );
      setPending(pending);
      setAccepted(accepted);
      setCompleted(completed);
    }
  }, [allOrders, reload]);

  return (
    <Wrapper>
      <Title>Orders</Title>
      <Tabs>
        <Span active={activeTab === 0} onClick={() => setActiveTab(0)}>
          {pending?.length ? pending?.length : 0} requested
        </Span>
        <Span active={activeTab === 1} onClick={() => setActiveTab(1)}>
          {accepted?.length ? accepted?.length : 0} accepted
        </Span>
        <Span active={activeTab === 2} onClick={() => setActiveTab(2)}>
          {completed?.length ? completed?.length : 0} delivered
        </Span>
      </Tabs>
      <Group>
        {activeTab === 0 &&
          (!pending ? (
            <SpinnerSmall />
          ) : pending.length === 0 ? (
            <h2>No pending orders</h2>
          ) : (
            <RecentOrders profile={profile} myorders orders={pending} />
          ))}
        {activeTab === 1 &&
          (!accepted ? (
            <SpinnerSmall />
          ) : accepted.length === 0 ? (
            <h2>No accepted orders</h2>
          ) : (
            <RecentOrders
              reRender={() => setReload(!reload)}
              showPay
              profile={profile}
              myorders
              orders={accepted}
            />
          ))}
        {activeTab === 2 &&
          (!completed ? (
            <SpinnerSmall />
          ) : completed.length === 0 ? (
            <h2>No delivered orders</h2>
          ) : (
            <RecentOrders profile={profile} myorders orders={completed} />
          ))}
      </Group>
    </Wrapper>
  );
}
