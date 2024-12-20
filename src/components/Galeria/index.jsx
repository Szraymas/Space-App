import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from "./Tags"
import Imagen from "./Imagen"

const GaleriaContainer = styled.div`
    display: flex;
`

const SeccionFluida = styled.section`
    flex-grow: 1;
`

const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
    padding-right: 3%;
`

const Galeria = ({fotos = [], setTag, alSeleccionarFoto, alAlternarFavorito, filtro }) => {
    return (
        <>
        <Tag setTag={setTag}/>
        <GaleriaContainer>
            <SeccionFluida>
                <Titulo>Navegue por la Galería</Titulo>
                <ImagenesContainer> 
                    {fotos.filter(foto => {
                        return filtro == '' || foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
                        .includes(filtro.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "") || filtro.titulo == setTag.tag)
                    } )
                        .map(foto =>  <Imagen 
                        alAlternarFavorito = {alAlternarFavorito}
                        alSolicitarZoom={alSeleccionarFoto}
                        key={foto.id} 
                        foto={foto} />)}
                </ImagenesContainer>
            </SeccionFluida>
            <Populares />
        

        </GaleriaContainer>
    </>
    )

}

export default Galeria