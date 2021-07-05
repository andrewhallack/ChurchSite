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
import Stories from './Data/Articles/articles.json'
import {images} from './Data/Articles/images'


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

    var imgStart = false;

    return (
        <>
            <InfoContainer>  
                {Stories.map((details, index) => {

                    imgStart = !imgStart;

                    const paragraph = details.sections;
                    var paraString = paragraph.toString();

                    return (
                        <InfoWrapper>
                            <InfoRow imgStart={imgStart}>
                                <Column1>
                                    <TopLine>{details.topline}</TopLine>
                                    <Heading>{details.header}</Heading>
                                    <ReadMoreTrunc redirect={details.redirect}>{paraString}</ReadMoreTrunc>
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

export default About;