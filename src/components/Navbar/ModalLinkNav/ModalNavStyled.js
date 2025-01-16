import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalCont = styled(motion.div)`
    position: fixed;
    top: 100px;
    left: 0;
    width: 100%;
    height: auto;
    background-color: var(--second-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

