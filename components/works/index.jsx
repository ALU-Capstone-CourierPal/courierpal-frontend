import RequestItem from '@components/home/requestItem';
import TestimoniesFaq from '@components/home/testimonials';
import { Span, Tabs } from '@components/myOrders/index.styles';
import { Banner } from '@components/testimonials/index.styles';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  Wrapper,
  PayHead,
  Pay,
  DetailsPay,
  Row,
  Num,
  Para,
  Payment,
} from './index.styles';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Wrapper>
      <Banner>
        <h1>How it works</h1>
      </Banner>
      <Tabs>
        <Span active={activeTab === 0} onClick={() => setActiveTab(0)}>
          For shopper
        </Span>
        <Span active={activeTab === 1} onClick={() => setActiveTab(1)}>
          For Travelers
        </Span>
      </Tabs>
      {activeTab === 1 ? (
        <PayHead>How to Earn Money Traveling</PayHead>
      ) : (
        <PayHead>How to request delivery</PayHead>
      )}
      <RequestItem isTravel={activeTab === 1} />
      <PayHead>How payment works</PayHead>
      <Payment>
        <Pay>
          <Image src="/images/pay.png" height="400" width="400" alt="pay" />
          <DetailsPay>
            <Row>
              <Num>1</Num>
              <Para>
                Once a request has been accepted, a shopper will make a payment.
                We put the payment on hold and only releases it to the traveler
                when the item is delivered{' '}
              </Para>
            </Row>
            <Row>
              <Num>2</Num>
              <Para>
                Traveler will purchase the item with their own money from the
                store requested by the traveler
              </Para>
            </Row>
            <Row>
              <Num>3</Num>
              <Para>
                The shopper confirm delivery that the item has been delivered{' '}
              </Para>
            </Row>
            <Row>
              <Num>4</Num>
              <Para>
                The shopper is paid for their luggage space as well as the
                refund for the item within 3-5 business working days
              </Para>
            </Row>
          </DetailsPay>
        </Pay>
      </Payment>
      <TestimoniesFaq />
    </Wrapper>
  );
}
