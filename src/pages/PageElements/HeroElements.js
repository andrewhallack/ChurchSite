import styled from 'styled-components';

export const HeroContainer1 = styled.div`
    background: rgb(226, 226, 226);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: -100; 

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.6) 100%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2; 
    }
`;

export const HeroContainer2 = styled.div`
    background: rgb(226, 226, 226);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    width: 100%;
    position: relative;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; 
`;

export const ImgBg1 = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a24;
    filter: blur(8px);
    -webkit-filter: blur(8px);
`;

export const ImgBg2 = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a24;
`;

export const HeroContent = styled.div`
    z-index: 3;
    position: absolute;
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroTitle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1, 100px);
    text-align: center;

    @media screen and (max-width: 1080px) {
        grid-template-rows: repeat(1, 40px);
        margin-top: 100px;
    }
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 1080px) {
        font-size: 36px;
    }

    @media screen and (max-width: 540px;) {
        font-size: 28px;
    }
`;

export const HeroH2 = styled.h2`
    color: #fff;
    font-size: 32px;
    text-align: center;
    font-weight: 100;

    @media screen and (max-width: 1080px) {
        font-size: 20px;
    }

    @media screen and (max-width: 540px;) {
        font-size: 16px;
    }
`;

