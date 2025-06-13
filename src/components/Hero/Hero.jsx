import { H1Styled,  PStyled } from "../UI/Txtformat/TxtStyled"
import {  H3Styled,  IconCont,  IconMotionDiv,  ImfoCont,  ImgDiv,  ImgDivCont,  TxtConnt, WrapperHero } from "./HeroStyled"
import { SiGithub, SiLinkedin  } from "react-icons/si";

export const Hero = () => {
  return (
    
    <WrapperHero>
    <ImfoCont>
      <TxtConnt>
        <H1Styled>Hola soy Marco</H1Styled>
        <H1Styled>Dimanghene</H1Styled>
          <H3Styled>Front Developer</H3Styled>
          <PStyled>Full stack developer con conocimientos en React, Node y MongoDB. Experiencia en automatización y soluciones digitales.</PStyled>
      </TxtConnt>
        <ImgDivCont>
          <ImgDiv/>
        </ImgDivCont>
    </ImfoCont>
      <IconCont>
        <IconMotionDiv onClick={() => window.open("https://github.com/MarcoDimanghene", "_blank")}><SiGithub/></IconMotionDiv>
        <IconMotionDiv onClick={() => window.open("https://www.linkedin.com/in/marcodimanghene", "_blank")}><SiLinkedin /></IconMotionDiv>
      </IconCont>
    </WrapperHero>
  )
}
