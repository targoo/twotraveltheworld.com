import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import styled from 'styled-components';

import { TextLink } from '../../atoms/TextLink/TextLink';
import VisuallyHidden from '../../atoms/VisuallyHidden/VisuallyHidden';

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
            <a>
              <FaInstagram />
              <VisuallyHidden>Instagram</VisuallyHidden>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/twotraveltheworld2017">
            <a>
              <FaTwitter />
              <VisuallyHidden>Twitter</VisuallyHidden>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/twotraveltheworld2017">
            <a>
              <FaFacebook />
              <VisuallyHidden>Facebook</VisuallyHidden>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/twotraveltheworld2017">
            <a>
              <FaPinterest />
              <VisuallyHidden>Pinterest</VisuallyHidden>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/twotraveltheworld2017">
            <a>
              <FaYoutube />
              <VisuallyHidden>YouTube</VisuallyHidden>
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
  flex-wrap: wrap;
`;

const StyledQuickNav = styled.ul`
  height: 40px;
  margin: 0;
  flex-grow: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
`;

const StyledSocialNav = styled.ul`
  height: 40px;
  margin: 0;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    justify-content: flex-end;
  }

  li {
    display: inline-block;
    margin: 0 10px;

    a {
      color: var(--color-white);

      :hover {
        color: var(--color-primary);
      }
    }

    &:last-child {
    }
  }
`;
