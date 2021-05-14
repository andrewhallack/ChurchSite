import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background: rgb(13, 13, 13);
    overflow-x: hidden;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: row;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    margin: 50px;
    width: 100%;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 16px;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 16px;
    margin-bottom: 16px;
    color: #4684FF;
`;

export const FooterLink = styled(Link)`
    color: rgb(226, 226, 226);
    text-decoration: none;
    margin-bottom: 0.2rem;
    font-size: 14px;

    &:hover {
        color: #87CDFF;
        transition: 0.3s ease-out;
    }
`;

export const FooterA = styled.a`
    color: rgb(226, 226, 226);
    text-decoration: none;
    margin-bottom: 0.2rem;
    font-size: 14px;

    &:hover {
        color: #87CDFF;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const WebsiteRights = styled.small`
    color: rgb(226, 226, 226);
    margin-bottom: 16px;
`;