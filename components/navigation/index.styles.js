import styled from "styled-components";

export const MainHeader = styled.header`
  position: fixed;
  background-color: #fff;
  width: 100%;
  padding-left: 2rem;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  z-index: 100;

  .user {
    gap: 2.5rem;
  }

  .logo {
    cursor: pointer;
  }

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #000000;
    text-decoration: none;
    transition: all 0.5s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }
  .signup {
    background: #39aea9;
    border: 1px solid #39aea9;
    border-radius: 4px;
    width: 78px;
    height: 32px;
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
export const Middle = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
`;
export const End = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-right: 4rem;
  position: relative;
  padding-bottom: 0.25rem;
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const UserPic = styled.div`
  height: 3rem;
  width: 3rem;
`;

export const Pic = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;
export const DropDown = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const DropDownList = styled.div`
  position: absolute;
  top: 3.3rem;
  right: 0rem;
  height: 300px;
  width: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.span`
  width: 100%;
  height: 30px;
  background: #f4f4f4;
  transition: all 0.3s ease-in;
  padding: 0.25rem 0.5rem;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* secondary */
  cursor: pointer;
  color: #191919;
  &:hover {
    background-color: #39aea9;
    color: #fff;
  }
`;
