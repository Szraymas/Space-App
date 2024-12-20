import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0 ;
    display: flex;
    justify-content: space-between;

    img{
        width: 212px;
    }

`

const Cabecera = ({setFiltro}) => {
    return <HeaderEstilizado>

        <img src="./imagenes/logo.png" alt="Logo de Space App" />
        <CampoTexto setFiltro={setFiltro}/>
    </HeaderEstilizado>
}

export default Cabecera