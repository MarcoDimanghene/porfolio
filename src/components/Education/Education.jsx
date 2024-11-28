import { H3TitleStyled, PStyled } from "../UI/Txtformat/TxtStyled"
import { ContEdu, InfoCont } from "./EducationStyled"


const Education = () => {
    return (
        <ContEdu>
            <H3TitleStyled>
                Mis Estudios
            </H3TitleStyled>
            <InfoCont>
                <PStyled>Python: IFES Educación Superior, Neuquén (2022).</PStyled>
                <p>Python (2022): Adquirí conocimientos sólidos en programación con Python, uno de los lenguajes más populares y versátiles de la actualidad. Dominé conceptos fundamentales como estructuras de datos, algoritmos y programación orientada a objetos.</p>
            </InfoCont>
            <InfoCont>
                <PStyled>Diseño Web: NUCBA (2023).</PStyled>
                <p>Diseño Web (2023): Desarrollé habilidades en diseño y desarrollo web, aprendiendo a crear sitios web atractivos y funcionales utilizando HTML, CSS y JavaScript. Me familiaricé con frameworks y herramientas para optimizar la experiencia del usuario.</p>
            </InfoCont>
            <InfoCont>
                <PStyled>JavaScript: NUCBA (2023).</PStyled>
                <p>Profundicé en JavaScript para crear interacciones dinámicas en páginas web. Exploré conceptos como DOM, eventos, AJAX y librerías como jQuery</p>
            </InfoCont>
            <InfoCont>
                <PStyled>Inteligencia Artificial: IFES Educación Superior, Neuquén (2024)</PStyled>
                <p>Me introduje en el apasionante mundo de la Inteligencia Artificial, aprendiendo sobre algoritmos de machine learning, redes neuronales y sus aplicaciones en diversos campos.</p>
            </InfoCont>
            <InfoCont>
                <PStyled>React: NUCBA (2024)</PStyled>
                <p>Dominé React, una biblioteca de JavaScript popular para construir interfaces de usuario eficientes y escalables. Desarrollé aplicaciones web de una sola página (SPA) y aprendí a gestionar el estado de las aplicaciones.</p>
            </InfoCont>
        </ContEdu>
    )
}

export default Education