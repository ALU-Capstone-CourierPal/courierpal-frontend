import styled from "styled-components";

export const Wrapper = styled.section`
  background: #def2f1;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
`;
export const Testimonials = styled.div`
  width: 40%;
`;
export const Faq = styled.div`
  idth: 40%;
`;

export const HeadingArea = styled.div`
  margin-bottom: 3rem;
`;
export const Heading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  margin: 0;
  color: #000000;
  margin-bottom: 0.5rem;
`;
export const SubHeading = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;
  margin: 0;
`;

export const Example = styled.div`
  display: flex;
  width: 100%;
  overflow: visible;
  gap: 20px;
  min-height: 30vh;
`;
export const Graphics = styled.div`
  position: relative;
  width: 300px;
  height: 150px;
`;
export const Circle = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;
export const CircleBig = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  height: 140px;
  width: 140px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
`;
export const OneTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  a {
    text-decoration: none;
    background: #39aea9;
    border: 1px solid #39aea9;
    width: 171px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
`;
export const UserName = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin: 0;

  color: #000000;
`;
export const Qoute = styled.p`
  font-style: normal;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  width: 70%;
`;
