import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  gap: 5rem;
  padding: 1rem 0;
`;
export const ImagePic = styled.div`
  width: 60%;
  height: 80vh;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;
export const OrderDetails = styled.div`
  background: #ffffff;
  border: 1px solid #d9d9d9;
  width: 40%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const H1 = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  /* identical to box height */
  /* secondary */
  color: #191919;
  display: flex;
  justify-content: space-between;
  margin: 0;
`;
export const SubHead = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.75);
  margin: 0;
`;

export const DescTitle = styled.h2`
  margin: 0;
`;
export const Desc = styled.p`
  margin: 0;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Key = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  /* secondary */
  color: #191919;
`;
export const Value = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  /* secondary */
  color: #191919;
`;

export const Request = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background: #39aea9;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;
export const Delivered = styled.p`
  width: 100%;
`;
