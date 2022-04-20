import { FaqsMock, TestimonialsMock } from "mock/testimonials";
import Link from "next/link";
import React from "react";
import {
  Wrapper,
  Testimonials,
  Faq,
  HeadingArea,
  Heading,
  SubHeading,
  Example,
  Graphics,
  Circle,
  CircleBig,
  OneTestimonial,
  UserName,
  Qoute,
} from "./index.styles";

export default function TestimoniesFaq() {
  return (
    <Wrapper>
      <Testimonials>
        <HeadingArea>
          <Heading>Testimonials</Heading>
          <SubHeading>See what others are saying</SubHeading>
        </HeadingArea>
        <Example>
          <Graphics>
            <Circle
              src={
                "https://res.cloudinary.com/dpnbddror/image/upload/v1647867379/courier-pal/unsplash_jo8C9bt3uo8_ddetl6.webp"
              }
            />
            <CircleBig
              src={
                "https://res.cloudinary.com/dpnbddror/image/upload/v1647867379/courier-pal/unsplash_jo8C9bt3uo8_ddetl6.webp"
              }
            />
          </Graphics>
          <OneTestimonial>
            <UserName>{TestimonialsMock[0].user}</UserName>
            <Qoute>{TestimonialsMock[0].quote}</Qoute>
            <Link href={"/testimonials"}>
              <a>More stories </a>
            </Link>
          </OneTestimonial>
        </Example>
      </Testimonials>
      <Faq>
        <HeadingArea>
          <Heading>Frequently Asked Questions</Heading>
          <SubHeading>Check the FAQS for all your concerns</SubHeading>
        </HeadingArea>
        <Example>
          <OneTestimonial>
            <UserName>{FaqsMock[0].question}</UserName>
            <Qoute>{FaqsMock[0].answer}</Qoute>
            <Link href={"/faqs"}>
              <a>More faqs</a>
            </Link>
          </OneTestimonial>
        </Example>
      </Faq>
    </Wrapper>
  );
}
