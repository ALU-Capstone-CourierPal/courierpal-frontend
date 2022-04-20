import { Span, Tabs } from '@components/myOrders/index.styles';
import React, { useEffect, useState } from 'react';

import {
  OneTripWrapper,
  Banner,
  Title,
  OneOrder,
  ImageEnd,
  Details,
  TitleOrder,
  Info,
  Key,
  Value,
  Button,
  AllOrders,
  Buttons,
} from './index.styles';

import { useRouter } from 'next/router';
import axios from 'util/axios';
import Spinner, { SpinnerSmall } from '@components/global/spinner';
import { checkLocation } from '@components/global/checkFrom';
import messageBanner from '@components/global/messageBanner';

export default function OneTrip() {
  // get the trip id from the params
  const router = useRouter();
  const { id } = router.query;

  const [trip, setTrip] = useState(null);

  const [requested, setRequested] = useState(null);
  const [toDeliver, setToDeliver] = useState(null);
  const [delivered, setDelivered] = useState(null);

  const [activeTab, setActiveTab] = useState(0);

  // get all orders for this trip
  const getOrders = async () => {
    try {
      const res = await axios.get(`/orders/trip/${id}`);
      const orders = res.data.data;
      setRequested(orders.filter((order) => order.status === 'pending'));
      setToDeliver(
        orders.filter(
          (order) => order.status === 'accepted' && order.paid === true,
        ),
      );
      setDelivered(orders.filter((order) => order.status === 'received'));
    } catch (error) {
      setRequested([]);
      setToDeliver([]);
      setDelivered([]);
      messageBanner({
        status: 'error',
        message: 'Could not get trip orders, try again later',
      });
      console.error(error);
    }
  };

  const [reload, setReload] = useState(false);

  useEffect(() => {
    id && getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, reload]);

  // get one trip from the server
  const getTrip = async () => {
    try {
      const res = await axios.get(`/trips/${id}`);
      setTrip(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [loading, setLoading] = useState(false);
  const [declining, setDeclining] = useState(false);
  const [delivering, setDelivering] = useState(false);

  const acceptReq = async (orderId) => {
    setLoading(true);
    try {
      const res = await axios.post(`orders/${orderId}/approve`);
      setLoading(false);

      setRequested(requested.filter((order) => order._id !== orderId));

      console.log(res.data);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };
  const rejectedReq = async (orderId) => {
    setDeclining(true);
    try {
      const res = await axios.post(`orders/${orderId}/reject`);
      setDeclining(false);
      setRequested(requested.filter((order) => order._id !== orderId));

      console.log(res.data);
    } catch (error) {
      setDeclining(false);

      console.log(error);
    }
  };

  const processOrder = async (orderId, status) => {
    status === 'accepted'
      ? setLoading(true)
      : status === 'received'
      ? setDelivering(true)
      : setDeclining(true);
    try {
      const res = await axios.patch(
        `/orders/${orderId._id}`,
        status === 'received'
          ? { status: status, delivered: true }
          : { status: status },
      );
      messageBanner({
        status: 'success',
        message: 'Order status updated successfully',
      });
      status === 'accepted'
        ? setLoading(false)
        : status === 'received'
        ? setDelivering(false)
        : setDeclining(false);

      // update array of orders by removing order with ID of orderId
      if (status === 'accepted' || status === 'cancelled') {
        setRequested(requested.filter((order) => order._id !== orderId));
      } else if (status === 'received') {
        setDelivered(delivered.filter((order) => order._id !== orderId));
      }
      setReload(!reload);
    } catch (error) {
      status === 'accepted'
        ? setLoading(false)
        : status === 'received'
        ? setDelivering(false)
        : setDeclining(false);
      console.error(error);
    }
  };

  const goToWhatsapp = (order) => {
    const url = `https://wa.me/${order.phone}?text=Hi, I have received your order. Thank you for using CourierPal. Do you want to clarify anything with the item requested like size, color, etc?`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    id && getTrip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <OneTripWrapper>
      <Banner src={checkLocation(trip?.from, 'banner')}></Banner>
      <Tabs>
        <Span active={activeTab === 0} onClick={() => setActiveTab(0)}>
          {requested?.length ? requested?.length : 0} requested
        </Span>
        <Span active={activeTab === 1} onClick={() => setActiveTab(1)}>
          {toDeliver?.length ? toDeliver?.length : 0} to deliver
        </Span>
        <Span active={activeTab === 2} onClick={() => setActiveTab(2)}>
          {delivered?.length ? delivered?.length : 0} delivered
        </Span>
      </Tabs>
      {!trip ? (
        <Spinner />
      ) : (
        <AllOrders>
          {activeTab === 0 &&
            (!requested ? (
              <SpinnerSmall />
            ) : requested.length === 0 ? (
              <h2>No requested items</h2>
            ) : (
              requested.map((item, i) => (
                <OneOrder
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1, transition: { duration: 0.5 } }}
                  viewport={{ once: true }}
                  key={i}
                >
                  <ImageEnd src={item?.image[0]?.url} />
                  <Details>
                    <TitleOrder>{item.name}</TitleOrder>
                    <Info>
                      <Key>Where to buy</Key>
                      <Value>{item.link}</Value>
                    </Info>
                    <Info>
                      <Key>Product price</Key>
                      <Value>{item.price * item.quantity}$</Value>
                    </Info>
                    <Info>
                      <Key>Quantity</Key>
                      <Value>{item.quantity}</Value>
                    </Info>
                    <Info>
                      <Key>Traveler reward</Key>
                      <Value>{item.award}$</Value>
                    </Info>
                    <Info>
                      <Key>Weight</Key>
                      <Value>{item.weight}Kg</Value>
                    </Info>
                    <Buttons>
                      <Button onClick={() => acceptReq(item._id)}>
                        {loading ? 'Loading...' : 'Accept'}
                      </Button>
                      <Button
                        disabled={declining}
                        onClick={() => rejectedReq(item._id)}
                        light
                      >
                        {declining ? 'Loading...' : 'Decline'}
                      </Button>
                    </Buttons>
                  </Details>
                </OneOrder>
              ))
            ))}
          {activeTab === 1 &&
            (!toDeliver ? (
              <SpinnerSmall />
            ) : toDeliver.length === 0 ? (
              <h2>No paid items to be delivered</h2>
            ) : (
              toDeliver.map((item, i) => (
                <OneOrder
                  key={i}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1, transition: { duration: 0.5 } }}
                  viewport={{ once: true }}
                >
                  <ImageEnd src={item.image[0].url} />
                  <Details>
                    <TitleOrder>{item.name}</TitleOrder>
                    <Info>
                      <Key>Where to buy</Key>
                      <Value>{item.link}</Value>
                    </Info>
                    <Info>
                      <Key>Product price</Key>
                      <Value>{item.price * item.quantity}$</Value>
                    </Info>
                    <Info>
                      <Key>Weight</Key>
                      <Value>{item.weight}Kg</Value>
                    </Info>
                    <Info>
                      <Key>Traveler reward</Key>
                      <Value>{item.award}$</Value>
                    </Info>
                    <Buttons>
                      <Button onClick={() => goToWhatsapp(item)}>
                        {'Send message to shopper '}
                      </Button>
                    </Buttons>
                  </Details>
                </OneOrder>
              ))
            ))}
          {activeTab === 2 &&
            (!delivered ? (
              <SpinnerSmall />
            ) : delivered.length === 0 ? (
              <h2>No delivered items</h2>
            ) : (
              delivered.map((item, i) => (
                <OneOrder
                  key={i}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1, transition: { duration: 0.5 } }}
                  viewport={{ once: true }}
                >
                  <ImageEnd src={item.image[0].url} />
                  <Details>
                    <TitleOrder>{item.name}</TitleOrder>
                    <Info>
                      <Key>Where to buy</Key>
                      <Value>{item.link}</Value>
                    </Info>
                    <Info>
                      <Key>Product price</Key>
                      <Value>{item.price * item.quantity}$</Value>
                    </Info>
                    <Info>
                      <Key>Weight</Key>
                      <Value>{item.weight}Kg</Value>
                    </Info>
                    <Info>
                      <Key>Traveler reward</Key>
                      <Value>{item.award}$</Value>
                    </Info>
                  </Details>
                </OneOrder>
              ))
            ))}
        </AllOrders>
      )}
    </OneTripWrapper>
  );
}
