import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  text-align: center;
  color: #000000;
`;
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem 2rem;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  height: auto;
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;
export const Img = styled.div`
  height: 170px;
  width: 170px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;
export const Name = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  margin: 0;

  color: #000000;
`;
export const P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #000;
  padding: 0 1rem;
`;

export const Banner = styled.div`
  height: 135px;
  width: 100vw;
  background-image: url('/images/banner.png');
  margin-left: -2rem;
  background-size: cover;
  background-position: center;
  position: relative;
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    margin: 0;
    color: #ffffff;
  }
`;
