import { Banner } from '@components/testimonials/index.styles';
import { FaqsMock } from 'mock/testimonials';
import Image from 'next/image';
import React from 'react';
import { Wrapper, Title, Content, Row, Paragraph } from './index.styles';

export default function Faqs() {
  return (
    <Wrapper>
      <Banner />
      <Title>Frequently Asked Questions</Title>
      <Content>
        {FaqsMock.map((faq, index) => (
          <Row key={index}>
            <Paragraph>{faq.question}</Paragraph>

            <Image src="/images/plus.svg" height="16" width="16" alt="add" />
          </Row>
        ))}
      </Content>
    </Wrapper>
  );
}
