import React from 'react'
import { FooterA, FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>The Holy Protection of the Mother of God</FooterLinkTitle>
                            <FooterA target="_blank" href="https://www.google.com/maps/place/13850+Beechnut+St,+Houston,+TX+77083/@29.6888351,-95.6296454,17z/data=!3m1!4b1!4m5!3m4!1s0x8640ddeba0b7d9fb:0xc4ffa6bcb0ff6d1c!8m2!3d29.6888305!4d-95.6274567">13850 Beechnut Street Houston, TX 77083</FooterA>
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
