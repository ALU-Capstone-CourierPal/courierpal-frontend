import Image from 'next/image';
import React from 'react';
import {
  Wrapper,
  OneStep,
  Graphics,
  StepNum,
  StepText,
  StepDesc,
} from './index.styles';

// eslint-disable-next-line react/prop-types
export default function RequestItem({ isTravel }) {
  return (
    <Wrapper>
      <OneStep>
        <Graphics>
          <Image
            src={'/images/location.png'}
            height={70}
            width={70}
            alt="stepone"
          />
          <StepNum>1</StepNum>
        </Graphics>
        {isTravel ? (
          <div className="down">
            <StepText>Add a trip </StepText>
            <StepDesc>Start by adding your trip to get order request</StepDesc>
          </div>
        ) : (
          <div className="down">
            <StepText>Select a country </StepText>
            <StepDesc>Start by adding your trip to see request orders</StepDesc>
          </div>
        )}
      </OneStep>
      <OneStep>
        <Graphics>
          <Image
            src={'/images/takeoff.svg'}
            height={70}
            width={70}
            alt="stepone"
          />
          <StepNum>2</StepNum>
        </Graphics>
        {isTravel ? (
          <div className="down">
            <StepText>Create an order </StepText>
            <StepDesc>Start by adding your trip to see request orders</StepDesc>
          </div>
        ) : (
          <div className="down">
            <StepText>Accept an order</StepText>
            <StepDesc>
              Go to trips page on my profile and choose the orders you will like
              to deliver
            </StepDesc>
          </div>
        )}
      </OneStep>
      <OneStep>
        <Graphics>
          <Image
            src={'/images/location.png'}
            height={70}
            width={70}
            alt="stepone"
          />
          <StepNum>3</StepNum>
        </Graphics>
        {isTravel ? (
          <div className="down">
            <StepText>Confirm orders</StepText>
            <StepDesc>
              Use the email that will be provided to confirm order details such
              as color, size etc with shopper
            </StepDesc>
          </div>
        ) : (
          <div className="down">
            <StepText>Make payment</StepText>
            <StepDesc>
              Travelers will accept to bring your order with them to your city
              on their next trip. Pay for delivery
            </StepDesc>
          </div>
        )}
      </OneStep>
      <OneStep>
        <Graphics>
          <Image
            src={'/images/location.png'}
            height={70}
            width={70}
            alt="stepone"
          />
          <StepNum>4</StepNum>
        </Graphics>
        {!isTravel ? (
          <div className="down">
            <StepText>Get an item</StepText>
            <StepDesc>
              Your traveler will never recieve payment until you confirm
              delivery of your order
            </StepDesc>
          </div>
        ) : (
          <div className="down">
            <StepText>Buy the product, deliver and get paid</StepText>
            <StepDesc>
              Once you accept shopper they make payment we hold the money. Buy
              the product with your own money, deliver and get paid by us.
            </StepDesc>
          </div>
        )}
      </OneStep>
    </Wrapper>
  );
}
