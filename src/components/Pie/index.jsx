import { styled } from 'styled-components';

const PieEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;

const IconoContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const PieTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

function Pie() {
    return (
        <PieEstilizado>
            <IconoContainer>
                
                <li>
                    <a href="https://www.instagram.com/fesuarezmas">
                        <img src="/imagenes/redes/instagram.svg" alt="Icono instagram" />
                    </a>
                </li>
            </IconoContainer>
            <PieTexto>Desarrollado por Felipe. Guiado por Daniel Riverol. </PieTexto>
        </PieEstilizado>
    );
}

export default Pie