import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 0 5rem;
  align-items: center;
`;
export const OneStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  max-width: 20%;
  min-width: 20%;
  height: 50vh;

  .down {
    position: absolute;
    top: 35vh;
    left: 5%;
    right: 5%;
    width: auto;
  }
`;
export const Graphics = styled.div`
  background: #def2f1;
  width: 168px;
  height: 168px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StepNum = styled.span`
  position: absolute;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #39aea9;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StepText = styled.h1`
  text-align: center;
  margin-bottom: 0;
`;
export const StepDesc = styled.p`
  text-align: center;
`;
