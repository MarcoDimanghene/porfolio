import styled, { keyframes } from "styled-components";
import imgMarco from './marco.png';
import { motion } from 'framer-motion';


const fillText = keyframes`
    0% {
        background-size: 0 100%;
    }
    100% {
        background-size: 100% 100%;
    }
`;

export const WrapperHero = styled.div `
    padding:8rem 9% 1rem ;
    display: flex;
    margin:auto;
    justify-content: center;
    flex-direction:column;

`
export const ImfoCont = styled.div`
    display: flex;
`
export const IconCont = styled.div `
    display: flex;
    width:20%;
    height:50px;
    color:'var(--tex-color)';
`

export const TxtConnt = styled.div `
    max-width:50%;

`
export const H3Styled = styled.h3`
    font-size:3rem;
    font-weight:700;
    color:transparent;
    -webkit-text-stroke: .7px  var(--main-color);
    background-image: linear-gradient(var(--main-color), var(--main-color));
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-size: 0 100%;
    background-position: left;
    animation: ${fillText} 3.5s infinite alternate;
    animation-duration: 3s;  
    animation-timing-function: ease-in-out;
    animation-delay: 0s; 
`

export const ImgDivCont = styled.div`
    display:flex;
    width:80%;
`
export const ImgDiv= styled.div`
    background-image: url(${imgMarco});
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    width: 300px;     
    height: 300px;
    border-radius: 50%;
    filter:drop-shadow( 0 0 10px rgba(0, 0, 0, 0.7));
`
export const IconMotionDiv = styled(motion.div).attrs({
    whileHover: {
        color: 'var(--main-color)', 
    },
    transition: {
        duration: 0.2, 
        ease: 'easeInOut',
    },
})`
    font-size: 2.5rem;
    margin: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
`;

