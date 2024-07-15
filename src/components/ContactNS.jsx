import { useState } from 'react';
import { Button, Select, Label, TextInput, Textarea, Footer } from 'flowbite-react';
import { BsFillTelephoneFill, BsEnvelopeFill, BsGeoAltFill } from 'react-icons/bs';
import fondo from '../assets/img/fondo2.jpg';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export const ContactNS = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_u3orz3v';
        const templateID = 'template_wqnweg8';
        const userID = 'FhBjYFxUXKuH0ppSX';

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                Swal.fire({
                    title: '¡Correo Enviado Correctamente!',
                    text: 'Nuestro equipo se contactará contigo lo más pronto posible.',
                    icon: 'success'
                  });
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }, (error) => {
                console.log('FAILED...', error);
                alert('Error al enviar el mensaje');
            });
    };


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
                                    Alcaldía Iztapalapa<br />
                                    C.P. 09100, CDMX.
                                </p><br />
                            </div>
                            <div className='sm:w-1/2'>
                            <form className='w-full' onSubmit={handleSubmit}>
                                <div className='mb-4'>
                                    <div className="mb-2 block">
                                        <Label htmlFor="name" value="Nombre (s)" />
                                    </div>
                                    <TextInput id="name" type="text" placeholder="Fernando Nicolás" required value={formData.name} onChange={handleChange} />
                                </div>
                                <div className='mb-4'>
                                    <div className='mb-2 block'>
                                        <Label htmlFor="phone" value="Teléfono" />
                                    </div>
                                    <TextInput id="phone" type="tel" placeholder='55 5555 4444' required value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className='mb-4'>
                                    <div className="mb-2 block">
                                        <Label htmlFor="email" value="Correo Electrónico" />
                                    </div>
                                    <TextInput id="email" type="email" placeholder="example@gmail.com" required value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="mb-4">
                                    <div className="mb-2 block">
                                        <Label htmlFor="subject" value="Tipo de Asunto" />
                                    </div>
                                    <Select id="subject" required value={formData.subject} onChange={handleChange}>
                                        <option value="">Selecciona un asunto</option>
                                        <option value="Servicios Contables">Servicios Contables</option>
                                        <option value="Impuestos">Impuestos</option>
                                        <option value="Asesoría">Asesoría</option>
                                        <option value="Servicios de Tecnología TI">Servicios de Tecnología TI</option>
                                    </Select>
                                </div>
                                <div className="mb-4">
                                    <div className="mb-2 block">
                                        <Label htmlFor="message" value="Mensaje" />
                                    </div>
                                    <Textarea id="message" placeholder="Comentario..." required rows={4} value={formData.message} onChange={handleChange} />
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
