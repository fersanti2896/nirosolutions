import { Footer } from 'flowbite-react';
import { BsEnvelopeFill, BsFacebook, BsFillTelephoneFill, BsGeoAltFill, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../assets/img/logo-sin.png';

export const FooterNS = () => {
    return (
        <>
            <Footer container className='bg-gray-300'>
                <div className="w-full mb-10 mt-10 px-4 sm:px-6 lg:px-24 font-bold">
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
                        <Footer.Brand
                            href="#"
                            src={logo}
                            alt="Niro Solutions Logo"
                            name="Niro Solutions"
                        />
                        <div className='mt-8 sm:mt-0 sm:ml-16 font-normal'>
                            <Footer.Title className='text-black' title="Oficina CDMX" />
                            <p className='text-black flex items-center'>
                                <BsFillTelephoneFill className="mr-2" />
                                +52 55 3435 1703
                            </p>
                            <p className='text-black flex items-center'>
                                <BsEnvelopeFill className="mr-2" />
                                contacto@nirosolutions.com
                            </p>
                            <p className='text-black flex items-center'>
                                <BsGeoAltFill className="mr-2" />
                                Col. Juan Escutia, Alcaldía Iztapalapa<br />
                                C.P. 09100, CDMX.
                            </p>
                        </div>

                        <div className='mt-8 sm:mt-0 sm:ml-16 '>
                            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
                                <div>
                                    <Footer.Title className='text-black' title="Niro Solutions" />
                                    <Footer.LinkGroup col>
                                        <Footer.Link href="#">¿Quiénes Somos?</Footer.Link>
                                        <Footer.Link href="#">Servicios</Footer.Link>
                                        <Footer.Link href="#">Contacto</Footer.Link>
                                        <Footer.Link href="#">FAQ</Footer.Link>
                                    </Footer.LinkGroup>
                                </div>
                                <div>
                                    <Footer.Title className='text-black' title="Legal" />
                                    <Footer.LinkGroup col>
                                        <Footer.Link href="#">Aviso de Privacidad</Footer.Link>
                                        <Footer.Link href="#">Términos &amp; Condiciones</Footer.Link>
                                    </Footer.LinkGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-center px-4 sm:px-6 lg:px-5">
                        <Footer.Copyright className='text-black text-center sm:text-left' href="#" by="Niro Solutions™" year={2024} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon className='text-black' href="#" icon={BsFacebook} />
                            <Footer.Icon className='text-black' href="#" icon={BsInstagram} />
                            <Footer.Icon className='text-black' href="#" icon={BsTwitter} />
                        </div>
                    </div>
                </div>
            </Footer>
        </>
    );
}
