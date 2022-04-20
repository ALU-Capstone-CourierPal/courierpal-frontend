import styled from "styled-components";

export const HomeContainer = styled.section``;
export const Hero = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  height: 70vh;
  width: 110%;
  position: relative;
  margin-bottom: 2rem;
  margin-left: -2rem;
  margin-right: -2rem;
  margin-top: -0.5rem;
`;

export const CallToAction = styled.div`
  width: 30%;
  height: 60%;
  background: #def2f1;
  border: 1px solid #def2f1;
  border-radius: 4px;
  position: absolute;
  top: 42px;
  left: 120px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .a {
    text-decoration: none;
    color: #000000;
    display: flex;
    gap: 10px;
  }
`;
export const FirstTitle = styled.h1``;
export const Span = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  &:first-child {
    color: #39aea9;
  }
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
`;
export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  border-radius: 4px;
  background: #39aea9;
  border: 1px solid #39aea9;
  width: 180px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;
export const NavTo = styled.div``;
export const NavText = styled.span`
  color: #000000;
`;

export const DestinationsText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
export const DestinationHead = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #000000;
  margin-bottom: 0;
`;
export const DestinationPara = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;
  width: 30%;
`;

export const Addtrip = styled.button`
  border-radius: 4px;
  background: #39aea9;
  border: 1px solid #39aea9;
  width: 582px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;
