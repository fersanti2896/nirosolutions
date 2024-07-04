import { Banner } from "flowbite-react";
import { FaBookOpen } from "react-icons/fa";

export const BannerNS = () => {
    return (
        <>
            <Banner>
                <div className="flex w-full flex-col justify-between border-b border-gray-200 bg-transparent p-4 dark:border-gray-600 dark:bg-gray-700 md:flex-row">
                    <div className="mb-4 md:mb-0 md:mr-4">
                        <h2 className="mb-1 text-base font-semibold text-white dark:text-white">¡Más de 10 años ayudando a simplificar la contabilidad y fiscalidad de tu negocio!</h2>
                        <p className="flex items-center text-sm font-normal text-white dark:text-gray-400">
                            Tenemos un amplio equipo de profesionales, para una excelente experiencia y asesoramiento, buscando a simplificar las adversidades y retos de nuestros clientes y colaboradores.
                        </p>
                    </div>
                    <div className="flex shrink-0 items-center">
                        <a
                            href="#about"
                            className="mr-3 inline-flex items-center justify-center rounded-lg bg-green-900 px-3 py-2 text-xs font-medium text-white hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                        >
                            <FaBookOpen className="mr-2 h-4 w-4" />
                            ¡Conocenos!
                        </a>

                    </div>
                </div>
            </Banner>
        </>
    )
}
