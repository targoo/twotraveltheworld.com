import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { TextLink } from '../../atoms/TextLink/TextLink';

export const TopNavigation = () => {
  return (
    <StyledNav>
      <StyledQuickNav>
        <li>
          <Link href="/">
            <TextLink>Home</TextLink>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/gears">
            <a>Gears</a>
          </Link>
        </li>
      </StyledQuickNav>
      <StyledSocialNav>
        <li>
          <Link href="/fr">
            <a>Français</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/twotraveltheworld2017">
            <a
              className="icon-instagram"
              social_network="instagram"
              social_link="https://www.instagram.com/twotraveltheworld2017"
              href="https://www.instagram.com/twotraveltheworld2017"
              target="_blank"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <span className="screen-reader-text">Instagram</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/twotraveltheworld2017">
            <a
              className="icon-twitter"
              social_network="twitter"
              social_link="https://twitter.com/twotravelworld"
              href="https://twitter.com/twotravelworld"
              target="_blank"
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <span className="screen-reader-text">Twitter</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/twotraveltheworld2017">
            <a
              className="icon-facebook"
              social_network="facebook"
              social_link="https://www.facebook.com/twotraveltheworld"
              href="https://www.facebook.com/twotraveltheworld"
              target="_blank"
            >
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <span className="screen-reader-text">Facebook</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/twotraveltheworld2017">
            <a
              className="icon-pinterest"
              social_network="pinterest"
              social_link="https://uk.pinterest.com/twotraveltheworld"
              href="https://uk.pinterest.com/twotraveltheworld"
              target="_blank"
            >
              <i className="fa fa-pinterest" aria-hidden="true"></i>
              <span className="screen-reader-text">Pinterest</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/twotraveltheworld2017">
            <a
              className="icon-pinterest"
              social_network="pinterest"
              social_link="https://www.youtube.com/channel/UCPzPOyWi1pou7a0vSldVoQw"
              href="https://www.youtube.com/channel/UCPzPOyWi1pou7a0vSldVoQw"
              target="_blank"
            >
              <i className="fa fa-youtube" aria-hidden="true"></i>
              <span className="screen-reader-text">YouTube</span>
            </a>
          </Link>
        </li>
      </StyledSocialNav>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background-color: var(--color-contrast);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledQuickNav = styled.ul`
  margin: 0;
  flex-grow: 3;
  display: flex;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }

  li {
    display: inline-block;
    margin-right: 10px;
  }
`;

const StyledSocialNav = styled.ul`
  margin: 0;
  flex-grow: 1;
  display: flex;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-end;
  }

  li {
    display: inline-block;
    margin-right: 10px;
  }
`;
