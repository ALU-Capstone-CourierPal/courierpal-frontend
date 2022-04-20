import styled from "styled-components";

export const Wrapper = styled.section``;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;

  /* identical to box height */

  color: #000000;
`;

export const Tabs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 4px 3px -2px rgba(0, 0, 0, 0.2);
  height: 60px;
`;
export const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => (props.active ? "#39AEA9" : "rgba(0, 0, 0, 0.65)")};
  border-bottom: ${(props) => (props.active ? "1px solid #39AEA9" : "none")};
  cursor: pointer;
  transition: all 0.3s ease-in;
`;

export const Group = styled.div`
  transition: all 0.3s ease-in;
  background: #e5e5e5;
  padding: 2rem 0;

  h2 {
    width: 100%;
    text-align: center;
  }
`;
