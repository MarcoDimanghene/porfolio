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
                    <LinkA to='/'>Inicio</LinkA>
                    <LinkA>Proyectos</LinkA>
                    <LinkA>Habilidades</LinkA>
                    <LinkA>Educación</LinkA>
                </MenuLink>
                <ThemeSelector onClick={toggleTheme }> {isDarkMode ? <GoMoon /> : <GoSun />}</ThemeSelector>
            </WrapperHed>
        
    </HeaderStyled>
    
    )
}

export default Navbar