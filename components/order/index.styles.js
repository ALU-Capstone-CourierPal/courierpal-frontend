import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  background-color: #f0f1f1;
  /* height: auto; */
  padding: 2rem 0;
`;
export const HoldStep = styled.div`
  width: 60%;
  background-color: ${(props) => (props.isSummary ? "#f0f1f1" : "#fff")};
  padding: 2rem;
  margin: auto;
  border-radius: 10px;
`;

export const StepName = styled.h1`
  width: 100%;
  text-align: center;
  color: rgba(59, 75, 87, 0.85);
`;

export const Progress = styled.div``;
export const ProgressOne = styled.div``;
export const Span = styled.span``;
export const ProgName = styled.p``;

export const WrapOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: #f0f1f1;
`;
export const Block = styled.div`
  background-color: #fff;
  width: 50%;
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const OrderName = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000;
`;
export const OrderPic = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  height: 100px;
  width: 100px;
  border-radius: 5px;
`;
export const KeyName = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: rgba(0, 0, 0, 0.5);
`;
export const ValueName = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000;
`;
export const HorizontalRule = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;
export const TotalKey = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
`;
export const Submit = styled.button`
  background: #39aea9;
  width: 70%;
  margin: auto;
  height: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-top: 2rem;
  border-radius: 5px;
`;
export const FooterText = styled.p`
  text-align: center;
  a {
    color: #39aea9;
    text-decoration: none;
  }
`;

export const DragZoneContainer = styled.div`
  width: 100%;
  width: 80%;
  margin: auto;
  margin-bottom: 2rem;
  ${(props) =>
    props.trip &&
    css`
      position: absolute;
      right: 10%;
      margin: unset;
      width: 200px;
      top: 30%;
    `}
`;
export const UploadContainer = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
`;

export const PreviewWrapper = styled.div`
  height: 200px;
  width: 200px;
  position: relative;
  .close {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    background: #d9d9d9;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
export const Preview = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

export const UploadText = styled.span``;
