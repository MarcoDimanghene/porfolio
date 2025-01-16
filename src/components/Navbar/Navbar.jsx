import { GoSun, GoMoon  } from "react-icons/go";
import {   HeaderStyled,   MenuLink, LinkA, ThemeSelector, WrapperHed, Menu } from "./NavarStyled";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { useState } from "react";
import ModalNav from "./ModalLinkNav/ModalNav";
import { AnimatePresence } from "framer-motion"

// eslint-disable-next-line react/prop-types
    const Navbar = ({toggleTheme, isDarkMode  }) => {
    const [isModalOpen, setIsmodalOpen] = useState(false)
    

    return (
    <HeaderStyled>
            <WrapperHed>
            <Menu onClick={()=>setIsmodalOpen((prevState)=>!prevState)}>
                <RiMenuUnfoldLine />
            </Menu>
            <AnimatePresence>
                {isModalOpen && (
                <ModalNav closeModal={() => setIsmodalOpen(false)} />
                )}
            </AnimatePresence>

                <MenuLink>
                    <LinkA href="#home">Inicio</LinkA>
                    <LinkA href="#project">Proyectos</LinkA>
                    <LinkA href="#skill">Habilidades</LinkA>
                    <LinkA href="#education">Educación</LinkA>
                </MenuLink>
                <ThemeSelector onClick={toggleTheme }> {isDarkMode ? <GoMoon /> : <GoSun />}</ThemeSelector>
            </WrapperHed>
        
    </HeaderStyled>
    
    )
}

export default Navbar