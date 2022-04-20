import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const OneTripWrapper = styled.section`
  background: #e5e5e5;
  padding: 2rem 0;
`;
export const Banner = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  position: relative;
`;
export const Title = styled.h1`
  position: absolute;
  bottom: 0.5rem;
  left: 1rem;
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;

  color: #ffffff;
`;

export const AllOrders = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  gap: 2rem;
`;
export const OneOrder = styled(motion.div)`
  min-width: 50%;
  height: 60vh;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;
export const ImageEnd = styled.div`
  background-image: url(${(props) => props.src});
  width: 30%;
  min-width: 40%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 10px 0 0 10px;
`;
export const Details = styled.div`
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const TitleOrder = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;

  color: #000000;
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: rgba(0, 0, 0, 0.5);
  }
`;
export const Key = styled.span``;
export const Value = styled.span``;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;
export const Button = styled.button`
  width: 80%;
  background: #39aea9;
  height: 40px;
  border-radius: 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  ${(props) =>
    props.light &&
    css`
  background-color: #fff;
    color: #39aea9;
    border: 1px solid #39aea9;
  }`}
`;
