import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

export const AboutNS = () => {
    return (
        <>
            <h1 className="flex justify-center text-3xl pb-9 pt-10">¿QUIÉNES SOMOS?</h1>
            <div className="flex justify-center my-10 mx-10">
                <Timeline className="w-full max-w-4xl">
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Title className='text-2xl'>Experiencia y Especialización</Timeline.Title>
                            <Timeline.Body>
                                Somos una empresa mexicana con una década en el mercado contables y fiscal. Nuestra misión es apoyar a distintos sectores económicos en la superación de sus desafíos financieros y tecnológicos.
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Title className='text-2xl'>Equipo Profesional y Asesoramiento Integral</Timeline.Title>
                            <Timeline.Body>
                                Contamos con un amplio equipo de profesionales dedicados a brindar una experiencia excepcional y un asesoramiento integral. En Niro Solutions, nos enfocamos en simplificar las adversidades y retos de nuestros clientes y colaboradores, proporcionando servicios eficientes que se adapten a las necesidades específicas.
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Title className='text-2xl'>Presencia Nacional e Internacional</Timeline.Title>
                            <Timeline.Body>
                                Contamos con presencia tanto en la República Mexicana como en Centroamérica, lo que nos permite ofrecer nuestros servicios a una amplia gama de clientes internacionales.
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </div>
        </>
    );
};
