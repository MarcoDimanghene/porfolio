import styled from "styled-components";

export const ContSkill = styled.div `
    margin-top: 10%;
    
`
export const TitleStyled = styled.div `
    width: 100%;
    text-align:center;
    padding: 1.5rem;
`
export const IconsCcont = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius:15px;
    transition: 0.8s ease;
    width:100px;
    height:150px;
    cursor: pointer;
    &:hover{
        scale:0.9;
        box-shadow: 0 0 25px var(--main-color);
    }
`
export const ContIconsSkill = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    gap:1rem;
`
export const SkillIcons = styled.img `
    width:80px;
    height:80px;
`