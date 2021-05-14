import styled from 'styled-components';

export const LongTextContainer = styled.div`
    min-height: 100vh;
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
    min-height: 80vh;
    position: relative;
    padding: 150px 0;

    @media screen and (max-width: 1080px) {
        display: flex;
        flex-direction: column;
        max-width: 540px;
    }
`;

export const ImageContainer = styled.div`
    float: left;
    max-width: 540px;
    padding-right: 24px;

    @media screen and (max-width: 1080px) {
        padding-bottom: 24px;
    }
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 7px;
`;

export const Text = styled.p`
    margin: 0;
    white-space: pre-line;
`;

