import React, {useState} from 'react';
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
import {data} from './Data/data';


function ReadMore({children, maxCharacterCount = 100}) {
    const text = children;

    const [isTruncated, setIsTruncated] = useState(true);

    function toggleIsTruncated() {
        setIsTruncated(!isTruncated);
    }

    const hold = isTruncated ? text.slice(0, maxCharacterCount) : text;
    const ellipsis = isTruncated ? "..." : "";
    const resultString = hold + ellipsis;

    if (text.length >= maxCharacterCount) {
        return (
            <SubTitle>
                {resultString}
                <RMBtn type="button" z-index="100" onClick={toggleIsTruncated}>
                    {isTruncated ? "Read More" : "Read Less"}
                </RMBtn>
            </SubTitle>
        );
    }
    else {
        return (
            <SubTitle>
                {text}
            </SubTitle>
        );
    }
    
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
                            <TopLine>The Story of</TopLine>
                            <Heading>Our Church</Heading>
                            <ReadMore>Holy Protection of the Mother of God Orthodox Christian Church is part of an extended Orthodox Christian community in Houston, Texas. This extended community encompasses thousands of faithful of various ethnic backgrounds. Orthodox Christianity is rooted in the faith of the Apostles of Christ. It was ten years ago when a group of enthusiastic people from Houston decided to start a new Orthodox Christian Mission in the southwest part of the city. The goal was to serve the Orthodox Christian faithful in that area and develop an Orthodox Christian outreach.</ReadMore>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={Icon} alt='' />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                    <InfoRow>
                        <Column1>
                            <TopLine>The Holy Protection</TopLine>
                            <Heading>of the Mother of God</Heading>
                            <ReadMore>asdf</ReadMore>
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

export default Home;
