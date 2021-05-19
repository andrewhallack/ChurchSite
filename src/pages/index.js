import React from 'react';
import {HeroBg, 
        HeroContainer1,
        HeroContent, 
        HeroH1, 
        HeroH2, 
        HeroTitle, 
        ImgBg1
    } from './PageElements/HeroElements';
import {Column1, 
        Column2, 
        Heading,
        Img, 
        ImgWrap, 
        InfoContainer, 
        InfoRow,  
        InfoWrapper, 
        RMBtn, 
        SubTitle,
        TextWrapper,
        TopLine
    } from './PageElements/InfoElements';
import Church from '../images/church.jpg';
// import Icon from '../images/test.jpg';
// import {churchStory, 
//         churchStoryRedirect
//     } from './Data/churchStory';
// import { HPIntro, HPStoryRedirect } from './Data/HPStory';


function ReadMoreTrunc({children, redirect}) {
    const text = children;
    var resultString = text;


    var newLnIdx = text.indexOf('\n');
    if (newLnIdx > -1) {
        resultString = text.slice(0, newLnIdx);
    }

    return (
        <SubTitle>
            {resultString}
            <RMBtn to={redirect}>
                Read More
            </RMBtn>
        </SubTitle>
    );
}

const Home = () => {

    return (
        <>
            <HeroContainer1>
                <HeroBg>
                    <ImgBg1 src={Church} alt='' />
                </HeroBg>
                <HeroContent>
                    <HeroTitle>
                        <HeroH2>Welcome to</HeroH2>
                        <HeroH1>The Holy Protection of the Mother of God</HeroH1>
                        <HeroH2>Orthodox Christian Church</HeroH2>
                    </HeroTitle>
                </HeroContent>
            </HeroContainer1>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow imgStart={'false'}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Call to Action</TopLine>
                                <Heading>Join Our Church</Heading>
                                <SubTitle></SubTitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={Church} alt='' />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Call to Action</TopLine>
                                <Heading>Join Our Church</Heading>
                                <SubTitle></SubTitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={Church} alt='' />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default Home;