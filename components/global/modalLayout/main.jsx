/* eslint-disable react/prop-types */
import React from 'react';
import { ModalContainer, ModalContent, Title, Form } from './index.styles';
import PropTypes from 'prop-types';

export default function Modal(props) {
  const closing = (e) => {
    if (e.target === e.currentTarget) {
      props.close();
    }
  };

  return (
    <ModalContainer onClick={(e) => closing(e)}>
      <ModalContent
        initial={{ opacity: 0.8, y: '-100%' }}
        fromTrip={props.fromTrip}
        animate={{ opacity: 1, transition: { duration: 0.5 }, y: '0%' }}
      >
        <Title fromTrip={props.fromTrip}>{props.title}</Title>
        <Form>{props.children}</Form>
      </ModalContent>
    </ModalContainer>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  fromTrip: PropTypes.bool,
};
