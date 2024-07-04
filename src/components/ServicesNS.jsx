import { motion } from 'framer-motion';
import { Card } from 'flowbite-react';
import { CoursesNS } from './CoursesNS';
import { FcBullish, FcDocument, FcMultipleDevices } from "react-icons/fc";
import { CardServiceNS } from './services/CardServiceNS';

export const ServicesNS = () => {
    const titleCA = 'CA - Contabilidad y Administración';
    const descriptionCA = 'Nos encargamos de la gestión contable y administrativa de tu negocio, asegurando la precisión y eficiencia en cada proceso.';
    
    const titleFF = 'FF - Fiscal y Finanzas';
    const descriptionFF = 'Brindamos asesoramiento fiscal y financiero para optimizar tus recursos y cumplir con todas las obligaciones fiscales de manera oportuna y correcta.';
    
    const titleTI = 'TI - Tecnología';
    const descriptionTI = 'Implementamos soluciones tecnológicas avanzadas para mejorar la eficiencia operativa y facilitar la gestión contable y fiscal.';
    
    return (
        <>
            <h1 className="flex justify-center text-3xl pb-9">NUESTROS SERVICIOS</h1>
            <span className='flex justify-center text-2xl pb-8 mx-10'>Para satisfacer las diversas necesidades de nuestros clientes, ofrecemos una gama de servicios integrales:</span>
            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16 mx-8 pb-20">
                <motion.div
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Card className='h-full flex flex-col items-center justify-center text-center rounded-lg border-green-700 border-x-2 border-y-2'>
                        <FcDocument className='text-8xl mb-4 md:mb-0 mx-auto' />
                        <CardServiceNS title={titleCA} description={descriptionCA}/>
                    </Card>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Card className='h-full flex flex-col items-center justify-center text-center rounded-lg border-green-700 border-x-2 border-y-2'>
                        <FcBullish className='text-8xl mb-4 md:mb-0 mx-auto' />
                        <CardServiceNS title={titleFF} description={descriptionFF}/>
                    </Card>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Card className='h-full flex flex-col items-center justify-center text-center rounded-lg border-green-700 border-x-2 border-y-2'>
                        <FcMultipleDevices className='text-8xl mb-4 md:mb-0 mx-auto' />
                        <CardServiceNS title={titleTI} description={descriptionTI}/>
                    </Card>
                </motion.div>
            </div>
            <CoursesNS />
        </>
    )
}
