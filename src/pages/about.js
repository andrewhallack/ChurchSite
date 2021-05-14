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
        TopLine
    } from './PageElements/InfoElements';
import Church from '../images/church.jpg';
import Icon from '../images/test.jpg';
import {churchStory, 
        churchStoryRedirect
    } from './Data/churchStory';
import { HPIntro, HPStoryRedirect } from './Data/HPStory';


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

const About = () => {

    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow imgStart={'false'}>
                        <Column1>
                            <TopLine>The Story of</TopLine>
                            <Heading>Our Church</Heading>
                            <ReadMoreTrunc redirect={churchStoryRedirect}>{churchStory}</ReadMoreTrunc>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={Church} alt='' />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                    <InfoRow>
                        <Column1>
                            <TopLine>The Holy Protection of the</TopLine>
                            <Heading>Mother of God</Heading>
                            <ReadMoreTrunc redirect={HPStoryRedirect}>{HPIntro}</ReadMoreTrunc>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={Icon} alt='' />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default About;