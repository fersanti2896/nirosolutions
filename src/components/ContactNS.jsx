import { Button, Select, Label, TextInput, Textarea, Footer } from 'flowbite-react';
import { BsFillTelephoneFill, BsEnvelopeFill, BsGeoAltFill } from 'react-icons/bs';
import fondo from '../assets/img/fondo2.jpg';

export const ContactNS = () => {
    return (
        <>
            <div className='relative min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${fondo})` }}>
                <div className='absolute inset-0 bg-blue-400 opacity-20'></div>
                <div className='relative flex items-center justify-center min-h-screen p-4'>
                    <div className='bg-zinc-300 opacity-90 p-8 max-w-6xl w-full rounded-lg shadow-lg'>
                        <h1 className='flex justify-center text-4xl pb-9 pt-10 text-gray-900'>CONTACTO</h1>
                        <div className='flex flex-col sm:flex-row pb-20'>
                            <div className='sm:w-1/2 pr-4 pl-12'>
                                <Footer.Title className='text-black text-2xl font-normal' title="DATOS DE CONTACTO" />
                                <p className='text-black flex items-center text-xl'>
                                    <BsFillTelephoneFill className="mr-2" />
                                    +52 55 3435 1703
                                </p><br />
                                <p className='text-black flex items-center text-xl'>
                                    <BsEnvelopeFill className="mr-2" />
                                    contacto@nirosolutions.com
                                </p><br />
                                <p className='text-black flex items-center text-xl'>
                                    <BsGeoAltFill className="mr-2" />
                                    Av. Manuel Alvarez 111<br />
                                    Col. Juan Escutia, Alcaldía Iztapalapa<br />
                                    C.P. 00530, CDMX.
                                </p><br />
                            </div>
                            <div className='sm:w-1/2'>
                                <form className='w-full'>
                                    <div className='mb-4'>
                                        <div className="mb-2 block">
                                            <Label htmlFor="text1" value="Nombre (s)" />
                                        </div>
                                        <TextInput id="text1" type="text" placeholder="Fernando Nicolás" required />
                                    </div>
                                    <div className='mb-4'>
                                        <div className='mb-2 block'>
                                            <Label htmlFor="number1" value="Teléfono" />
                                        </div>
                                        <TextInput id="number1" type="tel" placeholder='55 5555 4444' required />
                                    </div>
                                    <div className='mb-4'>
                                        <div className="mb-2 block">
                                            <Label htmlFor="email1" value="Correo Electrónico" />
                                        </div>
                                        <TextInput id="email1" type="email" placeholder="example@gmail.com" required />
                                    </div>
                                    <div className="mb-4">
                                        <div className="mb-2 block">
                                            <Label htmlFor="countries" value="Tipo de Asunto" />
                                        </div>
                                        <Select id="countries" required>
                                            <option>Servicios Contables</option>
                                            <option>Impuestos</option>
                                            <option>Asesoría</option>
                                            <option>Servicios de Tecnología TI</option>
                                        </Select>
                                    </div>
                                    <div className="mb-4">
                                        <div className="mb-2 block">
                                            <Label htmlFor="comment" value="Mensaje" />
                                        </div>
                                        <Textarea id="comment" placeholder="Comentario..." required rows={4} />
                                    </div>
                                    <div className='flex justify-center'>
                                        <Button className='mt-4 w-3/4' color="success" type="submit">Enviar</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
