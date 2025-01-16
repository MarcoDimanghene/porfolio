import styled from "styled-components";


export const WrapperProyec = styled.div `
    width: 100%;
    margin:auto;
    display: flex;
    flex-direction:column;
    align-items: center;
    padding: 4px;
`
export const ContProjecs= styled.div`
    display: grid;
    width:80%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
    gap: 3rem;
    @media (max-width: 500px) {
        width:90%;
        
        }
`

export const Proyects = styled.div`
    border-radius: 10px;
    box-sizing: border-box;
    padding: 1.5rem;
    box-shadow: 0 0 25px var(--main-color);
    cursor: pointer;
    transition: 0.8s ease;
    overflow:hidden;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    &:hover{
        scale:1.1;
    }
    @media (max-width: 500px) {
        font-size:1rem
        
        }
    @media (max-width: 350px) {
        padding: 0.8rem;
        margin:auto;
        }
`
export const TitleCont = styled.div`
    margin-bottom:4rem;
`
export const Proyect01Img = styled.img`
    background-image: url();
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    height: 280px;
    @media (max-width: 550px) {
        height: 150px;
        
        }
`

export const ContIcons = styled.div`
    font-size:2rem;
    gap:5px;
    padding: 2rem;
    @media (max-width: 500px) {
        font-size:1rem
        
        }
`