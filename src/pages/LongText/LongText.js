import React from 'react';
import {Redirect} from 'react-router-dom'
import Stories from '../Data/Articles/articles.json'
import { Heading, InfoContainer, TopLine } from '../PageElements/InfoElements';
import {ArticleContainer, Image, ImageContainer, LongTextContainer, SectionTitle, Text} from './LongTextElements'
import { churchStory } from '../Data/churchStory';
import Church from '../../images/church.jpg';
import Icon from '../../images/icon.jpg';
import {images} from '../Data/Articles/images'

export default ({match: { params: {id} } }) => {
    const checkId = parseInt(id);
    if (checkId !== 0 && !checkId) {
        return (
            <Redirect to={{pathname: "/404"}} />
        );
    }

    return (
            <>
                {Stories.map((details, index) => {
                    
                    if (index === checkId) {
                        console.log(images[index])
                        return (
                            <>
                                <LongTextContainer>
                                    <ArticleContainer>
                                        <ImageContainer>
                                            <Image src={images[index]} alt="" />
                                        </ImageContainer>
                                        <TopLine>{details.topline}</TopLine>
                                        <Heading>{details.header}</Heading>
                                        {details.subtitles.map((element, index) => {
                                                return (
                                                    <>
                                                        <SectionTitle>{element}</SectionTitle>
                                                        <Text>{details.sections[index]}</Text>
                                                    </>
                                                )
                                            }  
                                        )}
                                    </ArticleContainer>
                                </LongTextContainer>
                            </>
                        )
                    }
                })}
            </>
    );
}
