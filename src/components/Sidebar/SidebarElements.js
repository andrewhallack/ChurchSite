import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(13, 13, 13, 0.95);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.7s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    z-index: ${({ isOpen }) => (isOpen ? '100' : '-100')};
    overflow-y: auto;

    @media screen and (min-width: 1080px) {
        display: none;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    position: fixed;
    top: 1.2rem;
    right: 1.5rem;

    &:hover {
        color: #959595;
        transition: all 0.2s ease-in-out;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    backround: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-styled: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #959595;
    cursor: pointer;

    &.active {
        color: #fff;
    }

    &:hover {
        color: #fff;
        transition: all 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0;
`;

export const SideBtnLink = styled(Link)`
  border-radius: 4px;
  background: #4684FF;
  padding: 10px 22px;
  margin-bottom: 40px;
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