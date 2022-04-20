import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section``;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height */
  color: #000000;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const AddTrip = styled.button`
  position: absolute;
  right: 5rem;
  width: 108px;
  height: 40px;
  background: #39aea9;
  color: #ffffff;
  border-radius: 4px;
`;
export const Trips = styled.div``;
export const Upcoming = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;
export const TripsAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 4rem;
`;

export const OneTrip = styled(motion.div)`
  background: #f4f4f4;
  box-shadow: 0px 8px 8px -4px rgba(24, 39, 75, 0.1);
  border-radius: 5px;
  display: flex;
  height: 50vh;
  width: 60%;
  margin: auto;
  position: relative;
  cursoir: pointer;
`;
export const ImageEnd = styled.div`
  width: 40%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 5px 0 0 5px;
`;
export const Details = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const TitleTrip = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  margin: 0;
  margin-bottom: 2rem;
  color: #000000;
`;
export const DateTravel = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: rgba(0, 0, 0, 0.5);
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  /* position: absolute; */
  bottom: 0;
  height: 3rem;
  right: 0;
  left: 0;
  width: 100%;
`;
export const OneGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Num = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;

  color: #000000;
`;
export const Span = styled.span`
  font-style: normal;
  font-size: 15px;
  line-height: 36px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
`;
