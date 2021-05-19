import React from 'react';
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
import Icon from '../images/icon.jpg';
import Priest from '../images/priest.jpg';
import {churchStory, 
        churchStoryRedirect
    } from './Data/churchStory';
import { HPIntro, HPStoryRedirect } from './Data/HPStory';
import {PriestAbout} from './Data/PriestAbout'


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
                            <ReadMoreTrunc redirect="/stories/0">{churchStory}</ReadMoreTrunc>
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
                            <ReadMoreTrunc redirect="/stories/1">{HPIntro}</ReadMoreTrunc>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={Icon} alt='' />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                    <InfoRow imgStart={'false'}>
                        <Column1>
                            <TopLine>Our Priest</TopLine>
                            <Heading>Fr. Julian Anitei</Heading>
                            <ReadMoreTrunc redirect={"/stories/2"}>{PriestAbout}</ReadMoreTrunc>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={Priest} alt='' />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default About;