import { ContIcons, ContProjecs,  Proyect01Img, Proyects, TitleCont, WrapperProyec } from "./ProjectsStyled"
import proyects01 from './Img/01.png';
import proyects02 from './Img/02.png';
import proyects03 from './Img/03.png';
import proyects04 from './Img/04.png';
import { TiHtml5,TiCss3  } from "react-icons/ti";
import { TbBrandJavascript, TbBrandTypescript  } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { H3TitleStyled } from "../UI/Txtformat/TxtStyled";

const Projects = () => {
    return (
        <WrapperProyec >
            <TitleCont><H3TitleStyled>Mis Proyectos</H3TitleStyled></TitleCont>
            <ContProjecs>
                <Proyects>
                    <Proyect01Img src={proyects01}/>
                    <p>Desarrollé una landing page responsiva, enfocándome en la estructura semántica de HTML y el diseño visual con CSS.</p>
                    
                    <ContIcons><p>Tencologias usadas</p><TiHtml5 /> <TiCss3 /> </ContIcons>
                </Proyects>
                <Proyects>
                <Proyect01Img src={proyects02}/>
                    <p> Creé un E-commerce con JavaScript, implementando funcionalidades dinámicas como carrito de compras y actualizaciones interactivas. </p>
                    
                    <ContIcons><p>Tencologias usadas</p><TiHtml5 /> <TiCss3 /><TbBrandJavascript /></ContIcons>
                </Proyects>
                <Proyects>
                    <Proyect01Img src={proyects03}/>
                    <p>Desarrollé una landing page que consume la API de Marvel, permitiendo a los usuarios buscar y obtener información sobre personajes.
                    </p>
                    <ContIcons> <p>Tencologias usadas</p>
                    <TiHtml5 /> <TiCss3 /><TbBrandJavascript />
                    </ContIcons>
                </Proyects>
                <Proyects>
                <Proyect01Img src={proyects04}/>
                    <p> Construí un E-commerce completo con React, MongoDB y TypeScript, creando una API personalizada para gestionar datos de productos, usuarios y pedidos.</p>
                    
                    <ContIcons><p>Tencologias usadas</p><TiHtml5 /> <TiCss3 /><TbBrandJavascript /><GrReactjs /> <TbBrandTypescript />
                    </ContIcons>
                </Proyects>
            </ContProjecs>
        </WrapperProyec>
    )
}

export default Projects