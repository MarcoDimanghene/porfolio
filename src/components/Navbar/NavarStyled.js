import styled from "styled-components";


export const HeaderStyled= styled.header`
    width:100%;
    position:fixed;
    z-index: 1000;
    border-bottom: 2px solid var(--main-color);

`
export const WrapperHed = styled.div `
    display: flex;
    align-items:center;
    justify-content:space-around;
    max-width: 1200px;
    width: 100%;
    margin:auto;
    padding: 0.5rem 0 0.5rem 0;
    backdrop-filter: blur(10px);
    
`
export const Menu = styled.div `
    display:none;
    font-size:2rem;
    cursor: pointer;
    @media (max-width: 600px) {
        display:flex;
        
        }
`
export const LinkA= styled.a `
    font-size: 1.2rem;
    color: var(--text-color);
    margin:1rem;
    padding:0.5rem;
    position: relative;
    transition: background-color 0.8s ease; 
    border-radius:10px;
    cursor: pointer;
    &:hover {
        background-color: var(--second-bg-color);
        
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0; 
        height: 2px;
        background-color: var(--text-color); 
        transition: width 0.3s ease;
    }

    &:hover::after {
        
        width: 100%; 
    }
    @media (max-width: 770px) {
        font-size: 1rem;
        
        }
    
`
export const MenuLink = styled.div`
    padding: 1.5rem;
    @media (max-width: 730px) {
        padding: 1.2rem;
        
        }
       
        @media (max-width: 600px) {
        display:none;
        
        }
`

export const ThemeSelector = styled.button `
    font-size:1.8rem;
    background-color: transparent;
    color:var(--text-color);
    cursor: pointer;
    margin-right:2rem;
    width:20%;
    @media (max-width: 770px) {
        font-size: 1.6rem;
        margin-right:0rem;
        }
`
export const MenuIcon = styled.div `
    font-size: 3.6rem;
    color: var(--text-color);
    cursor: pointer;
    
`
