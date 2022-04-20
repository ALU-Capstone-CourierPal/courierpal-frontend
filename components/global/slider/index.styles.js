import styled from 'styled-components';

export const SliderWrapper = styled.section`
  position: relative;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;

  .theSwiper {
    overflow: hidden;
    width: 100%;
    position: relative;
    display: flex;
    padding: 0 1rem;
    height: 80vh;
    padding-top: 1rem;
  }

  .swiper-slide {
    width: 27vw !important;
  }

  .swiper-button-next,
  .swiper-button-prev {
    height: 50px;
    width: 50px;
    margin-left: 0;
    bottom: 0;
    margin-right: 10px;
    background: #39aea9;
    padding: 1rem;
    position: absolute;
    z-index: 100;
    border-radius: 50px;
    background-size: 40% 40%;
    cursor: pointer;
    top: 0;
    top: 40%;
    transform: translateY(-50%);
  }

  .swiper-button-next {
    background-image: url('/images/next.svg');
    background-repeat: no-repeat;
    background-position: center;
    right: 0rem;
  }

  .swiper-button-prev {
    background-image: url('/images/prev.svg');
    background-repeat: no-repeat;
    background-position: center;
    left: 0rem;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
`;
