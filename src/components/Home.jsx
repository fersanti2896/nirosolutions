import { useEffect, useRef } from 'react';
import fondo from '../assets/img/fondo4.jpg';
import { BannerNS } from './BannerNS';

export const Home = ({ setBgHeight }) => {
    const bgRef = useRef(null);

    useEffect(() => {
        const updateHeight = () => {
            if (bgRef.current) {
                setBgHeight(bgRef.current.clientHeight);
            }
        };

        window.addEventListener('resize', updateHeight);
        updateHeight();

        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, [setBgHeight]);

    return (
        <div ref={bgRef} className='relative bg-cover bg-center pb-20' style={{ backgroundImage: `url(${fondo})` }}>
            <div className='absolute inset-0  bg-zinc-950 opacity-45'></div>
            <div className='relative px-2 lg:px-8 max-w-screen-xl mx-8'>
                <div className="my-0 md:my-0 pt-36 pb-52 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                    <div className='pt-8'>
                        <h1 className='font-semibold text-white leading-snug text-6xl'>
                            NIRO SOLUTIONS <br />
                        </h1>
                        <h2>
                            <span className='text-white leading-snug text-5xl'>
                                Tu aliado en soluciones contables y tecnológicos
                            </span>
                            <br />
                            <BannerNS />
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
