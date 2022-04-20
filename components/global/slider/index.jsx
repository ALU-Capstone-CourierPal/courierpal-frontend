/* eslint-disable react/prop-types */
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import React from 'react';

import { SliderWrapper } from './index.styles';
import { SpinnerSmall } from '../spinner';
import {
  ArrivalDate,
  Card,
  Details,
  DetailsRow,
  Pic,
  Price,
  Rating,
  RatingCount,
  Title,
  Weight,
} from '@components/home/destinations/index.styles';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { checkLocation } from '../checkFrom';
import { useEffect, useState } from 'react';

export default function Slider({ items, checkProfile }) {
  const router = useRouter();

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    localStorage.getItem('userId') && setUserId(localStorage.getItem('userId'));
  }, [checkProfile]);

  const processDate = (date) => {
    // generate date in format of 01/12/2020 from date object
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // only get first occurrence of a destination

  return (
    <SliderWrapper>
      {!items ? (
        <SpinnerSmall />
      ) : items.filter((item) => item.traveler[0] !== userId).length === 0 ? (
        <h2>No trips</h2>
      ) : (
        <Swiper
          className="theSwiper"
          spaceBetween={1}
          slidesPerView={'auto'}
          navigation
          watchSlidesVisibility={true}
        >
          {items
            .filter((item) => item.traveler[0] !== userId)
            .map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  onClick={() => router.push(`/trip/${item?._id}`)}
                  initial={{ x: '20%' }}
                  whileInView={{ x: '0%', transition: { duration: 1 } }}
                  viewport={{ once: true }}
                >
                  <Title>{item?.from}</Title>
                  <Pic src={checkLocation(item?.from, 'cities')} />
                  <Details>
                    <DetailsRow>
                      <Image
                        src={'/images/star.svg'}
                        height={16}
                        width={16}
                        alt="rating"
                      />
                      <Rating>{item?.rating}</Rating>
                      <RatingCount>{`{${item?.ratingsCount}}`}</RatingCount>
                      <span className="middot">&middot;</span>
                      <ArrivalDate>
                        {processDate(item?.arrivalDate)}
                      </ArrivalDate>
                    </DetailsRow>
                    <DetailsRow>
                      <Weight>{`${item?.availableLuggageSpace}kg`}</Weight>
                      <span>&middot;</span>
                      <Price>
                        {`$${item?.pricePerLuggageSpace} `}{' '}
                        <span className="space">per luggage space</span>
                      </Price>
                    </DetailsRow>
                  </Details>
                </Card>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </SliderWrapper>
  );
}
