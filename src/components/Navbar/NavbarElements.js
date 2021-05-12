import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: rgba(13, 13, 13, 0.8);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((70vw - 1000px) / 2);
  z-index: 10;
  position: fixed;
  width: 100%;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  color: #959595;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 0;

  &.active {
    color: #fff;
    border-bottom: 1px solid;
  }

  &:hover {
    color: #fff;
    transition: all 0.2s ease-in-out;
  }
`;

export const Burger = styled(FaBars)`
  color: #fff;
  display: none;
  
  @media screen and (max-width: 1080px) {
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  &:hover {
    color: #959595;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #4684FF;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;