import styled from 'styled-components';

export const LongTextContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    padding: 0 30px;
    position: relative;
    background: rgb(226, 226, 226);
    justify-content: center;
    align-items: center;
`;

export const ArticleContainer = styled.div`
    max-width: 1100px;
    max-height: 90vh;
    padding: 2em 0;
    position: relative;


    @media screen and (max-width: 1080px) {
        display: flex;
        flex-direction: column;
        max-width: 540px;
    }
`;

export const ImageContainer = styled.div`
    float: left;
    max-width: 540px;
    padding: 24px;

    @media screen and (max-width: 1080px) {
        padding-bottom: 24px;
    }
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 7px;
`;

export const Text = styled.article`
    margin: 0;
    white-space: pre-line;
`;

