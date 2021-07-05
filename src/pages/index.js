import React from 'react';
import { NavLink as Link } from 'react-router-dom';

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
        InfoButton1,
        InfoButton2,
        InfoButtonWrapper,
        InfoContainer, 
        InfoRow,  
        InfoWrapper, 
        RMBtn, 
        SubTitle,
        TextWrapper,
        TopLine
    } from './PageElements/InfoElements';
import {images} from './Data/Articles/images'
import homeStories from './Data/home.json'


// function ReadMoreTrunc({children, redirect}) {
//     const text = children;
//     var resultString = text;


//     var newLnIdx = text.indexOf('\n');
//     if (newLnIdx > -1) {
//         resultString = text.slice(0, newLnIdx);
//     }

//     return (
//         <SubTitle>
//             {resultString}
//             <RMBtn to={redirect}>
//                 Read More
//             </RMBtn>
//         </SubTitle>
//     );
// }

const Home = () => {

    var imgStart = false;
    var btnDisplay = false;

    return (
        <>
            <HeroContainer1>
                <HeroBg>
                    <ImgBg1 src={images[0]} alt='' />
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
                {homeStories.map((details, index) => {

                    imgStart = !imgStart;
                    btnDisplay = details.buttonDisplay;
                    console.log("THIS IS BUTTON DISPLAY ", btnDisplay)

                    const paragraph = details.sections;
                    var paraString = paragraph.toString();

                    if (btnDisplay === false) {
                        return (
                            <InfoWrapper>
                            <InfoRow imgStart={imgStart}>
                                <Column1>
                                    <TopLine>{details.topline}</TopLine>
                                    <Heading>{details.header}</Heading>
                                    <SubTitle>{paraString}</SubTitle>
                                </Column1>
                                <Column2>
                                    <ImgWrap>
                                        <Img src={images[index]} alt='' />
                                    </ImgWrap>
                                </Column2>
                            </InfoRow>
                        </InfoWrapper>
                        );
                    }

                    return (
                        <InfoWrapper>
                            <InfoRow imgStart={imgStart}>
                                <Column1>
                                    <TopLine>{details.topline}</TopLine>
                                    <Heading>{details.header}</Heading>
                                    <SubTitle>{paraString}</SubTitle>
                                    <InfoButtonWrapper>
                                        <InfoButton1 to='/about'>
                                            {details.button1}
                                        </InfoButton1>
                                        <InfoButton2 to='/about'>
                                            {details.button2}
                                        </InfoButton2>
                                    </InfoButtonWrapper>
                                </Column1>
                                <Column2>
                                    <ImgWrap>
                                        <Img src={images[index]} alt='' />
                                    </ImgWrap>
                                </Column2>
                            </InfoRow>
                        </InfoWrapper>
                    )
                })}
            </InfoContainer>
        </>
    );
};

export default Home;