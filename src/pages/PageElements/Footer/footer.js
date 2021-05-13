import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>The Holy Protection of the Mother of God</FooterLinkTitle>
                            <FooterLink to="/">13850 Beechnut Street Houston, TX 77083</FooterLink>
                            <FooterLink to="/">281-741-0591</FooterLink>
                            <FooterLink to="/">holyprotection@gmail.com</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/">About</FooterLink>
                            <FooterLink to="/">Calendar</FooterLink>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Sunday School</FooterLink>
                        </FooterLinkItems>                        
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights>
                        © {new Date().getFullYear()} - The Holy Protection of the Mother of God
                        </WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
