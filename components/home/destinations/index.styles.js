import styled from 'styled-components';
import { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';

export const DestinationsWrap = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const MoveLeft = keyframes`
0% {
    transform: translateX(50%);

}
100% {
    transform: translateX(0);

}
`;
export const MoveRight = keyframes`
0% {
    transform: translateX(-50%);
}
100% {
    transform: translateX(0);
}
`;

export const TitleAnimate = keyframes`
0% {
    opacity: 0.5;
}
100% {
    opacity: 1;
}
`;

export const Filtering = styled.button`
  align-self: flex-end;
  width: 143px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #39aea9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const FilterText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #39aea9;
  margin-left: 0.5rem;
`;

export const Cards = styled.div`
  position: relative;
  .abs {
    position: absolute;
    top: 40%;
    cursor: pointer;
  }
  .prev {
    left: 5%;
  }
  .next {
    right: 5%;
  }
`;
export const Flow = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-top: 2rem;
`;
export const Card = styled(motion.div)`
  height: 70vh;
  min-width: 22vw;
  max-width: 22vw;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 20px;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  .middot {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c4c4c4;
    font-style: italic;
  }

  /* ${(props) =>
    props.changed
      ? css`
          animation: ${MoveLeft} 0.5s ease-in;
        `
      : css`
          animation: ${MoveRight} 0.5s ease-in;
        `} */
`;
export const Title = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  animation: ${TitleAnimate} 0.5s ease;
`;
export const Pic = styled.div`
  height: 45vh;
  width: 100%;
  border-radius: 10px;
  background-image: url(${(props) => props.src});
  background-size: cover;

  background-position: center;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const DetailsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const Rating = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
`;
export const RatingCount = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
`;
export const ArrivalDate = styled.span`
  font-style: italic;
  color: #c4c4c4;
`;
export const Weight = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
`;
export const Price = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  .space {
    font-weight: 500;
  }
`;
