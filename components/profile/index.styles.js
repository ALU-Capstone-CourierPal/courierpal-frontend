import styled from 'styled-components';

export const ProfileContainer = styled.section`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
export const Inner = styled.div`
  width: 60vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 2rem;
  border-radius: 10px;
`;
export const Title = styled.h1`
  margin: 0;
`;
export const PicArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 30%;
`;
export const Pic = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  .overlay {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 30%;
    width: 90%;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 500;
    span {
      margin-bottom: 5%;
    }
  }
`;
export const UpdateBtn = styled.button`
  height: 40px;
  width: 100%;
  border: 1px solid #39aea9;
  border-radius: 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #39aea9;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70%;
  margin: auto;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
export const Label = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  /* identical to box height, or 138% */

  color: rgba(0, 0, 0, 0.85);
`;
export const Input = styled.input`
  height: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 5px 10px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;

  /* identical to box height, or 157% */

  color: rgba(0, 0, 0, 0.5);
`;
export const SubmitBtn = styled.button`
  height: 40px;
  width: 100%;
  background: #39aea9;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  border-radius: 5px;

  color: #ffffff;
`;
