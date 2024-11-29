import { GoSun, GoMoon  } from "react-icons/go";
import {   HeaderStyled,  Logo, MenuLink, LinkA, ThemeSelector, WrapperHed } from "./NavarStyled";


// eslint-disable-next-line react/prop-types
const Navbar = ({toggleTheme, isDarkMode  }) => {
    return (
    <HeaderStyled>
        
            <WrapperHed>
                <Logo>
                <h2>LOGO</h2>
                </Logo>
            
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