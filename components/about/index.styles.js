import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;

  /* identical to box height */

  /* secondary */
  color: #191919;
`;
export const Groups = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  gap: 5rem;
  margin: auto;
`;
export const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;
export const Circle = styled.div`
  height: 180px;
  min-width: 180px;
  border-radius: 50%;
  background: #def2f1;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextSide = styled.div`
  width: 50%;
`;
export const H2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;

  /* identical to box height */

  /* secondary */
  color: #191919;
`;
export const P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: justify;

  /* secondary */
  color: #191919;
`;
export const Button = styled.button`
  height: 40px;
  width: 50%;
  margin: auto;
  border-radius: 5px;
  background: #39aea9;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;
