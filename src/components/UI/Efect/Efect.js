import styled from "styled-components";

export const DivEfeect=styled.div`
    position: relative;
    left: 0;
    backdrop-filter: blur(20px);
    padding: 0 9%;
    z-index:9;
    ::before{
        content:'';
        position: absolute;
        top:0;
        left:-100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.4),transparent);
        transition: 1s;
    }
        :hover::before{
        left: 100%;
    }
`