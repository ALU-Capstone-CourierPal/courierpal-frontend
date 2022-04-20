import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* padding: 0 2rem; */
  align-items: center;
`;
export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  gap: 5px;
  a {
    color: #39aea9;
    text-decoration: none;
  }
`;

export const LoginMore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 30px;
  width: 90%;
  padding: 2.5px 10px;
  color: #000;
  margin: 0;
`;

export const FormArea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 40px;
  width: 90%;
  padding: 2.5px 10px;
  color: #000;
`;
export const Submit = styled.button`
  width: 70%;
  margin: auto;
  height: 40px;
  background: #39aea9;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-top: 1rem;
`;
export const Error = styled.p`
  margin: 0;
  margin-top: 2.5px;
  color: red;
`;
export const InputGroup = styled.div`
  margin-bottom: 0.5rem;
  width: 90%;

  margin: auto;
  min-height: 60px;
  .date {
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 30px;
    width: 90%;
    margin: auto;
    padding: 2.5px 10px;
    color: #000;
    margin: 0;
  }
  select {
    height: 30px;
    outline: 0;
    border: 0;
    border: 1px solid #ccc;
    background: #fff;
    color: #000;
    padding: 4px;
    border-radius: 10px;
  }
`;
export const HorizontalRule = styled.hr``;
export const Para = styled.p`
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  /* secondary */
  color: #191919;
  margin: 0;

  &:first-child {
    margin-bottom: 0.5rem;
  }
  span {
    color: #39aea9;
  }
`;

export const Or = styled.span``;
export const GoogleBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding: 0 10px;
  &:hover {
    transform: scale(1.01);
  }
`;
export const GText = styled.span``;
