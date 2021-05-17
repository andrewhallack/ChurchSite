import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper, SideBtnLink, SideBtnWrap } from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" exact activeStyle>Home</SidebarLink>
                    <SidebarLink to="/about" activeStyle>About Us</SidebarLink>
                    <SidebarLink to="/calendar" activeStyle>Calendar</SidebarLink>
                    <SidebarLink to="/news" activeStyle>News</SidebarLink>
                    <SidebarLink to="/announcemnets" activeStyle>Announcements</SidebarLink>
                    <SidebarLink to="/contact-us" activeStyle>Contact Us</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideBtnLink to="/donate">Donate</SideBtnLink>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
