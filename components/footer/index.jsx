import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  FooterMain,
  InnerFooter,
  Courier,
  Group,
  LogoArea,
  Social,
  EndGroup,
} from './index.styles';

export default function Footer() {
  return (
    <FooterMain>
      <InnerFooter>
        <Link href="/">
          <a>
            <Image
              src={'/images/logoBig.svg'}
              height="40"
              width="100"
              alt={'logo'}
              className="logo"
            />
          </a>
        </Link>
        <EndGroup>
          <Group>
            <Link href="/about">
              <a>About us</a>
            </Link>
            <Link href="/how-it-works">
              <a>How courierPal works</a>
            </Link>
            <Link href="/faqs">
              <a>Help Center</a>
            </Link>
            <Link href="/">
              <a>Trust & safety</a>
            </Link>
          </Group>
          <Group>
            <Link href="/testimonials">
              <a>Testimonials</a>
            </Link>
            <Link href="/">
              <a>Terms of Use</a>
            </Link>
            <Link href="/">
              <a>Privacy Policy</a>
            </Link>
          </Group>
        </EndGroup>
      </InnerFooter>
      <Courier>
        <LogoArea>
          <div className="copy">&copy;</div>

          <div className="spacelogo">
            <Link href="/">
              <a className="space">
                <Image
                  src={'/images/logoBig.svg'}
                  height={30}
                  width={90}
                  alt={'logo'}
                  className="logo"
                />
              </a>
            </Link>
          </div>
        </LogoArea>
        <Social>
          <a href="https://facebook.com">
            <Image src={'/images/face.svg'} height={20} width={20} alt={'fb'} />
          </a>
          <a href="https://facebook.com">
            <Image
              src={'/images/twitter.svg'}
              height={20}
              width={20}
              alt={'twitter'}
            />
          </a>
          <a href="https://facebook.com">
            <Image src={'/images/ig.svg'} height={20} width={20} alt={'IG'} />
          </a>
          <a href="https://facebook.com">
            <Image
              src={'/images/linkedin.svg'}
              height={20}
              width={20}
              alt={'linkedin'}
            />
          </a>
        </Social>
      </Courier>
    </FooterMain>
  );
}
