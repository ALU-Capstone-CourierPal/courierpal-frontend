/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import {
  OneOrder,
  OrderDetails,
  OrderItemPic,
  OrderTextDetails,
  OrderTitle,
  DeliveredFrom,
  DateDelivered,
  OrderMeta,
  Vendor,
  CostDetails,
  Cost,
  CostNum,
  Reward,
  RewardText,
  RewardAmt,
} from './index.styles';

import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

import {
  Button,
  Details,
  Info,
  Key,
  TitleOrder,
  Value,
} from '@components/oneTrip/index.styles';

import messageBanner from '@components/global/messageBanner';

import axios from 'util/axios';
import { useEffect } from 'react';

export default function OneOrderComponent({
  order,
  myorders,
  showPay,
  reRender,
  filterOut,
  profile,
}) {
  // payment config
  const config = {
    public_key: 'FLWPUBK_TEST-dca7fa08d7f52cca2766df71fbe139e8-X',
    tx_ref: Date.now(),
    amount: order.total,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: profile?.email,
      phonenumber: profile?.phone,
      name: profile?.firstname + ' ' + profile?.lastname,
    },
    customizations: {
      title: 'Order payment',
      description: 'Pay for your order',
      logo: 'https://res.cloudinary.com/dpnbddror/image/upload/v1649582729/courier-pal/logoBig_dilpnx.webp',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const [trip, setTrip] = useState(null);

  const getTrip = async () => {
    try {
      const res = await axios.get(`/trips/${order.trip[0]}`);
      setTrip(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    order && !trip && getTrip();
  }, [order]);

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
  const [loadingPay, setLoadingPay] = useState(false);
  const [loadingCancel, setLoadingCancel] = useState(false);
  const [hasPaid, setHasPaid] = useState(false);
  const [delivering, setDelivering] = useState(false);
  const [showReceived, setShowReceived] = useState(false);

  const makePayment = async (order, cancel = false) => {
    !cancel ? setLoadingPay(true) : setLoadingCancel(true);
    try {
      const res = await axios.patch(
        `/orders/${order}`,
        cancel ? { status: 'declined', delivered: false } : { paid: true },
      );
      setHasPaid(true);
      setShowReceived(true);
      // reRender();
      messageBanner({
        type: 'success',
        message: 'Payment made successfully',
      });
      // remove order from ordersAll
      // filterOut(order);
      console.log(res);
      setLoadingPay(false);
      setLoadingCancel(false);
    } catch (error) {
      setLoadingPay(false);
      setLoadingCancel(false);
      console.error(error);
    }
  };

  useEffect(() => {
    if (order) {
      showPay && order.paid && !order.delivered && setShowReceived(true);
    }
  }, [order]);

  const receivedOrder = async (order) => {
    setDelivering(true);
    try {
      const res = await axios.patch(`/orders/${order}`, {
        delivered: true,
        status: 'received',
      });
      setDelivering(false);

      filterOut(order);
      messageBanner({
        type: 'success',
        message: 'Order marked as delivered',
      });
      console.log(res);
    } catch (error) {
      setDelivering(false);

      console.log(error);
    }
  };

  const messageTraveler = (order) => {
    const url = `https://wa.me/${trip.phone}?text=Hi, thank you for accepting my order. I would like to enquire about the status of my order.`;
    window.open(url, '_blank');
  };

  return (
    <OneOrder
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
    >
      <OrderDetails myorders={myorders}>
        <OrderItemPic src={order?.image[0]?.url} />
        {!myorders ? (
          <OrderTextDetails>
            <OrderTitle>{order.name}</OrderTitle>
            <DeliveredFrom>{`Delivered from ${order?.deliveryFrom}`}</DeliveredFrom>
            <DateDelivered>{`On ${processDate(
              order?.arrivalDate,
            )}`}</DateDelivered>
            <OrderMeta>
              <Vendor>{`Bought from ${order.link}`}</Vendor>
              <CostDetails>
                <Cost>Cost</Cost> <CostNum>{`$${order.price}`}</CostNum>
              </CostDetails>
            </OrderMeta>
          </OrderTextDetails>
        ) : (
          <Details>
            <TitleOrder>{order.name}</TitleOrder>
            <Info>
              <Key>Where to buy</Key>
              <Value>{order.link}</Value>
            </Info>
            <Info>
              <Key>Product price</Key>
              <Value>{order.price * order.quantity}$</Value>
            </Info>
            <Info>
              <Key>Traveler reward</Key>
              <Value>{order.award}$</Value>
            </Info>
            <Info>
              <Key>Quantity</Key>
              <Value>{order.quantity}</Value>
            </Info>
            <Info>
              <Key>Weight</Key>
              <Value>{order.weight}Kg</Value>
            </Info>
            {showPay && !order.paid && !hasPaid && (
              <Button
                style={{ marginTop: '1rem' }}
                disabled={loadingPay}
                className="btn"
                // onClick={() => makePayment(order?._id)}
                onClick={() => {
                  handleFlutterPayment({
                    callback: (response) => {
                      console.log('payment callback ', response);
                      makePayment(order?._id);
                      closePaymentModal(); // this will close the modal programmatically
                    },
                    onClose: () => {},
                  });
                }}
              >
                {loadingPay ? 'Loading...' : 'Make Payment'}
              </Button>
            )}

            {showReceived && (
              <>
                <Button
                  style={{
                    marginTop: '1rem',
                    backgroundColor: '#fff',
                    border: '1px solid #39aea9',
                    color: '#39aea9',
                  }}
                  className="btn light"
                  onClick={() => messageTraveler(order?._id)}
                >
                  {'Message traveler on WhatsApp'}
                </Button>
                <Button
                  style={{ marginTop: '1rem' }}
                  className="btn"
                  disabled={delivering}
                  onClick={() => receivedOrder(order?._id)}
                >
                  {!delivering ? 'I have received this order' : 'Loading'}
                </Button>
              </>
            )}

            {showPay && !order.paid && !hasPaid && (
              <Button
                disabled={loadingCancel}
                className="btn cancel"
                onClick={() => makePayment(order?._id, true)}
              >
                {loadingCancel ? 'Loading...' : 'Cancel'}
              </Button>
            )}
          </Details>
        )}
      </OrderDetails>
      {!myorders && (
        <Reward>
          <RewardText>Traveler Reward</RewardText>
          <RewardAmt>{`$${order?.award}`}</RewardAmt>
        </Reward>
      )}
    </OneOrder>
  );
}
