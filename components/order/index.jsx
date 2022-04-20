import messageBanner from '@components/global/messageBanner';
import React, { useEffect, useState } from 'react';
import OrderDelivery from './delivery';
import OrderDetails from './details';
import {
  Wrapper,
  Progress,
  ProgressOne,
  Span,
  ProgName,
  HoldStep,
  StepName,
} from './index.styles';
import OrderSummary from './summary';

import { useRouter } from 'next/router';
import axios from 'util/axios';
import { SpinnerSmall } from '@components/global/spinner';

export default function OrderSteps({ phone }) {
  const router = useRouter();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const order = JSON.parse(localStorage.getItem('order'));
    console.log(order);
    order ? setTrip(order) : router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [step, setStep] = useState(0);
  const [orderData, setOrderData] = useState({});

  const uploadOrderImage = async (files, id) => {
    try {
      // create form data
      const formData = new FormData();
      formData.append('file', files);
      const res = await axios.post(`/orders/${id}/upload`, formData);
      setLoading(false);
      messageBanner({
        message: `Order placed successfully. Redirecting to home...`,
        status: 'success',
      });

      // go home
      setTimeout(() => {
        router.push('/');
      }, 5000);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    localStorage.getItem('order') && setUserId(localStorage.getItem('userId'));
  }, []);

  const processOrder = async () => {
    // scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setLoading(true);
    try {
      const userObj = {
        trip: trip._id,
        customer: userId,
        owner: trip.traveler[0],
        deliveryFrom: trip.from,
        deliveryTo: trip.to,
        award:
          orderData.weight * trip.pricePerLuggageSpace * orderData.quantity,
        arrivalDate: trip.arrivalDate,
        phone: phone,
        total:
          parseInt(orderData.price * orderData.quantity) +
          parseInt(
            orderData.weight * trip.pricePerLuggageSpace * orderData.quantity,
          ) +
          10,
        link: orderData.link,
      };
      const orderObj = { ...orderData, ...userObj };
      const file = orderObj.images[0];
      // delete images field
      let newObj = { ...orderObj };
      delete newObj.images;

      const res = await axios.post('/orders', newObj);
      uploadOrderImage(file, res.data.data._id);
    } catch (error) {
      setLoading(false);
      messageBanner({
        message: `Order failed`,
        status: 'error',
      });
      console.error(error);
    }
  };

  const Steps = [
    {
      key: 0,
      step: (
        <OrderDetails
          trip={trip}
          sendData={(val) => setOrderData({ ...orderData, ...val })}
          goNext={() => setStep(1)}
        />
      ),
      stepName: 'Order details',
    },
    {
      key: 1,
      step: (
        <OrderDelivery
          trip={trip}
          sendData={(val) => setOrderData({ ...orderData, ...val })}
          goNext={() => setStep(2)}
        />
      ),
      stepName: 'Confirm delivery City ',
    },
    {
      key: 2,
      step: (
        <OrderSummary
          trip={trip}
          sendData={(val) => processOrder()}
          order={orderData}
        />
      ),
      stepName: '',
    },
  ];

  useEffect(() => {
    // scroll to top smooth
    step > 0 &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  }, [step, loading]);
  return (
    <Wrapper>
      <HoldStep isSummary={step === 2}>
        <StepName>
          {loading ? 'Creating order...' : Steps[step].stepName}
        </StepName>
        {loading ? <SpinnerSmall /> : Steps[step].step}
      </HoldStep>
    </Wrapper>
  );
}
