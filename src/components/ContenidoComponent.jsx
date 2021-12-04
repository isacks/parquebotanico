import React from 'react';
import SliderOrquideas from './SliderOrquideasComponent';
import SliderHelechos from './SliderHelechosComponent';
import SliderBromelias from './SliderBromeliasComponent';
import styled from 'styled-components';

function ContenidoComponent() {
    const opacity = "--bs-bg-opacity: .75";
    return (
        <Container>
            <InfoCard className="row p-4 text-white mt-5">
                <div className="col-md-6">
                    <SliderOrquideas />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="display-5 mt-3 text-center">ORQUIDEAS URBANAS</h1>
                    <div className="mb-3">Ciudad de Panamá</div>
                    <div>Los parques, áreas abiertas, lotes baldíos, aceras y cuencas de algunos ríos de la ciudad proporcionan las condiciones mínimas necesarias para albergar algunas especies silvestres, las cuales se encuentran perfectamente adaptadas a nuestras ciudades. Nos encontramos investigando y trabajando una guía que facilite el reconocimiento de las mismas.</div>
                    <div>Espéranos, pronto disponibles!</div>
                </div>
            </InfoCard>
            <InfoCard className="row p-4 text-white mt-5">
                <div className="col-md-6">
                    <SliderHelechos />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="display-5 mt-3 text-center">HELECHOS</h1>
                    <div className="mb-3">Generalidades</div>
                    <div>
                        <i><b>HELECHOS (MONILOPHYTA) </b></i>
                        Son un grupo de plantas vasculares y sin semillas, las cuales se reproducen exclusivamente por esporas. Pueden habitar un gran número de sustratos, algunas son incluso acuáticas. Quizás lo más característico de los helechos son sus soros (agrupaciones de esporangios), estos pueden ser muy variados en forma, tamaño y área de la planta donde se encuentran.
                    </div>
                </div>

            </InfoCard>
            <InfoCard className="row p-4 text-white mt-5">
                <div className="col-md-6">
                    <SliderBromelias />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="display-5 mt-3 text-center">BROMELIAS</h1>
                    <div className="mb-3">Generalidades</div>
                    <div>
                        La Familia <i><b>BROMELIACEAE</b></i> se encuentra ampliamente distribuida en los bosques tropicales de América (a excepción de 1 especie en África). Son en su mayoría plantas epifitas, crecen en las ramas de los árboles, pero hay algunas que crecen en las rocas o suelo. Actualmente son muy populares en viveros debido a su potencial ornamental y fácil mantenimiento.
                    </div>
                </div>

            </InfoCard>
        </Container>
    )
}

export default ContenidoComponent;

const Container = styled.div`

`;
const InfoCard = styled.div`
    background: rgba(33,37,41,75%);
`;