import React from 'react'
import styled, { css } from 'styled-components/macro'
import Button from './Button';

const Intro = styled.div`
  margin-top: 1em;
  text-align: center;
  font-weight: 700;
`;

const btnCSS = css`
    margin-top: 2em;
`;


const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <Intro>
            <h1>Take the quiz.</h1>
            <h4>Welcome to my quiz application. Here you can choose the category of the quiz, the level of difficulty, the type of 
            questions and its number.</h4>
            <h4>May luck come with you!</h4>
            <Button onClick={startQuiz} css={btnCSS}>Begin</Button>
        </Intro>
    )
}

export default Start