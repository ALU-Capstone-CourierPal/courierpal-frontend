import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  // square grid of 2x2
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 5rem;
`;
export const OneOrder = styled(motion.div)`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
`;
export const OrderDetails = styled.div`
  display: flex;
  min-height: 50vh;
  min-width: 30vw;
  gap: 50px;
  ${(props) =>
    props.myorders &&
    css`
      min-width: 60vw;
    `}
`;
export const OrderItemPic = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  min-width: 40%;
  height: 90%;
  border-radius: 5px;
`;
export const OrderTextDetails = styled.div`
  position: relative;
  width: 100%;
  .btn {
    position: absolute;
    bottom: 4rem;
    width: 100%;
    left: 0;
    right: 0;
  }
  .cancel {
    bottom: 0.5rem;
    background-color: #fff;
    color: #39aea9;
    border: 1px solid #39aea9;
  }
`;
export const OrderTitle = styled.h1``;
export const DeliveredFrom = styled.p``;
export const DateDelivered = styled.p``;
export const OrderMeta = styled.div`
  background: #def2f1;
  padding: 0.25rem 0.5rem;
`;
export const Vendor = styled.span``;
export const CostDetails = styled.div``;
export const Cost = styled.span``;
export const CostNum = styled.span``;

export const Reward = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RewardText = styled.span``;
export const RewardAmt = styled.span``;
