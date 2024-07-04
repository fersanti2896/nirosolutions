import excel from '../assets/courses/excel.jpg';
import inversiones from '../assets/courses/inversiones.jpg';
import impuestos from '../assets/courses/impuestos.jpg';
import { CardNS } from './cards/CardNS';

export const CoursesNS = () => {
    const subtitlesExcel = ['Introducción a Excel', 'Fórmulas', 'Gráficos y Filtros de Datos', 'Tablas Dinámicas', 'Dashboards'];
    const subtitlesInversiones = ['Introducción a Ahorro', 'Certificados de Gobierno', 'SOFIPOS', 'Fintechs', 'Bolsa de Valores'];
    const subtitlesTaxes = ['Introducción a 1', 'Prueba 2', 'Test', 'Test 1', 'Test 2'];

    return (
        <>
            <span className='flex justify-center text-2xl pb-8 mx-10'>También contamos con cursos:</span>
            <div className='flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16 mx-8 pb-20'>
                <div className='flex-1 w-full md:w-auto'>
                    <CardNS title={'Curso Excel'} image={excel} subtitles={subtitlesExcel} className="h-full" />
                </div>
                <div className='flex-1 w-full md:w-auto'>
                    <CardNS title={'Curso Inversiones'} image={inversiones} subtitles={subtitlesInversiones} className="h-full" />
                </div>
                <div className='flex-1 w-full md:w-auto'>
                    <CardNS title={'Curso Contable y Fiscal'} image={impuestos} subtitles={subtitlesTaxes} className="h-full" />
                </div>
            </div>
        </>
    )
}
