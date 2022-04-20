import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
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
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  margin: auto;
`;
export const Row = styled.div`
  width: 100%;
  background: #def2f1;
  height: 114px;
  padding: 0 2rem;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;
export const Paragraph = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;

  color: #000000;
`;
