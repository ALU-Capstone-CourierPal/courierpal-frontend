import { TestimonialsMock } from "mock/testimonials";
import React from "react";
import {
  Wrapper,
  Title,
  Content,
  Card,
  Img,
  Name,
  P,
  Banner,
} from "./index.styles";

export default function Testimonials() {
  return (
    <Wrapper>
      <Banner />
      <Title>Hear what our shoppers and travelers have to say!</Title>
      <Content>
        {TestimonialsMock.map((item, i) => (
          <Card key={i}>
            <Img src={"/images/faq.png"} />
            <Name>{item.user}</Name>
            <P>{item.quote}</P>
          </Card>
        ))}
      </Content>
    </Wrapper>
  );
}
