import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const InfoContainer = styled.div`
    color: rgb(13, 13, 13);
    background: rgb(226, 226, 226);
    padding-top: 150px;
    min-height: 100vh;
    overflow-x:hidden;

    @media screen and (max-width: 1080px) {
        padding-top: 100px;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60rem,50%));
    justify-content: center;
    padding: 10px;
    grid-gap: 3rem;

    @media screen and (max-width: 1080px) {
        grid-template-columns: repeat(auto-fit, minmax(40rem,100%));
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 50%);
    align-items: center;
    justify-content: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col2 col1'`)};
    width: 100%;
    height: 100%;
    padding-bottom: 100px;
    

    @media screen and (max-width: 1080px) {
        // grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col2' 'col1'`)};
        grid-template-areas: 'col1' 'col2';
        padding-bottom: 50px;
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    width: 100%;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1080px) {
        width: 100%;
    }

     @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    width: 100%;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1080px) {
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

export const TextWrapper = styled.div`
    width: 100%;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #4684FF;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #000;

    @media screen and (max-width: 1080px) {
        font-size: 40px;
    }

    @media screen and (max-width: 540px;) {
        font-size: 32px;
    }
`;

export const SubTitle = styled.p`
    max-width: 100%;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #000;
    white-space: pre-line;
`;

export const ImgWrap = styled.div`
    max-width: 540px;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    align-items: center;
    justify-content: center;
    border-radius: 7px;

    @media screen and (max-width: 768px) {
        margin-left: 10px;
        margin-right: 10px;
        width: 90%;
    }
`;

export const PartitionContainer = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    background: rgb(226, 226, 226);
    padding: 0 0 50px;
`;

export const Partition = styled.div`
    background: rgb(13, 13, 13);
    height: 2px;
    width: 90%;
`;

export const RMBtn = styled(Link)`
    color: #4684FF;
    padding: 4px 4px 4px 4px;
    outline: none;
    border: 4px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
`;

export const MapContainer = styled.div`
    background: rgb(226, 226, 226);
    max-width: 100%;
    padding: 0 0 100px;
`;

export const MapContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
`;

export const InfoUl = styled.ul`
    list-style-type: none;
    text-align: left;
`;

export const InfoLi = styled.li`
    text-decoration: none;
    margin-bottom: 20px;
`;

export const ListRow = styled.div`
    min-height: 50vh;
    background: rgb(226, 226, 226);
    padding: 50px 0 150px;
    justify-content: center;
    display: flex;

    @media screen and (max-width: 768px) {
            flex-direction: column;
    }
`;

export const ListContent = styled.div`
    min-width: 20vh;
    min-height: 20vh;
    max-width: 800px;
    max-height: 100%;
    justify-content: center;
    align-items: center;
    background: rgb(226, 226, 226);
    padding: 24px;
    overflow: hidden;
`;

export const ListItemTitle = styled.p`
    color: #4684FF;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
`;

export const InfoA = styled.a`
    color: rgb(13, 13, 13);
    text-decoration: none;
    margin-bottom: 0.2rem;

    &:hover {
        text-decoration: underline;
        transition: 0.3s ease-out;
    }
`;