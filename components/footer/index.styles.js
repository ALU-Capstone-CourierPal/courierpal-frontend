import styled from "styled-components";

export const FooterMain = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
`;
export const InnerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  padding-left: 3rem;
  margin-bottom: 3rem;
  /* margin: auto; */
`;

export const EndGroup = styled.div`
  display: flex;
  gap: 50px;
`;
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  a {
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    /* identical to box height */

    color: #000000;
  }
`;

export const Courier = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  align-content: center;

  .spacelogo {
    margin-left: 10px;
  }
  .copy {
    font-size: 20px;
  }
`;
export const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
