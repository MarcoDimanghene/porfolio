import { LinkA } from "../NavarStyled";
import { ModalCont } from "./ModalNavStyled";


// eslint-disable-next-line react/prop-types
const ModalNav = ({ closeModal }) => {
    return (
    <ModalCont
    initial={{ opacity: 0, y: -20 }} // Al principio, el modal está invisible y se desplaza hacia arriba
    animate={{ opacity: 1, y: 0 }}    // En el estado animado, el modal es visible y en su posición original
    exit={{ opacity: 0, y: 20 }}      // Cuando se cierra, el modal se desvanece y se mueve hacia abajo
    transition={{ duration: 0.3 }}    // Duración de la animación de apertura y cierre
    >
        
            <LinkA href="#home" onClick={closeModal}>
            Inicio
            </LinkA>
            <LinkA href="#project" onClick={closeModal}>
            Proyectos
            </LinkA>
            <LinkA href="#skill" onClick={closeModal}>
            Habilidades
            </LinkA>
            <LinkA href="#education" onClick={closeModal}>
            Educación
            </LinkA>
        
        
    </ModalCont>
    );
};

export default ModalNav;
