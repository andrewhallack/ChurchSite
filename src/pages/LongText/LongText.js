import React from 'react'
import { ArticleContainer, Image, ImageContainer, LongTextContainer, Text } from './LongTextElements'
import Church from '../../images/church.jpg';
import {churchStory} from '../Data/churchStory';
import { Heading, TopLine } from '../PageElements/InfoElements';

const LongText = () => {
    return (
        <>
            <LongTextContainer>
                <ArticleContainer>
                    <ImageContainer>
                        <Image src={Church}></Image>
                    </ImageContainer>
                    <TopLine>The Story of</TopLine>
                    <Heading>Our Church</Heading>
                    <Text>{churchStory}</Text>
                </ArticleContainer>
            </LongTextContainer>
        </>
    )
}

export default LongText
