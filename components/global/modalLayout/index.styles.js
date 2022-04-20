import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
`;
export const ModalContent = styled(motion.div)`
  min-height: 65vh;
  max-height: 90vh;
  max-width: 50%;
  min-width: 50%;
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
  padding-top: 0;
  position: relative;
  overflow-y: auto;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  margin: 0;
  margin: 1rem 0;

  /* identical to box height */

  /* secondary */
  color: ${(props) => (props.fromTrip ? '#39AEA9' : '#191919')};

  width: 100%;
  text-align: center;
`;
export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 100%;
  min-height: 50vh;
`;
export const ModalFooter = styled.div``;
