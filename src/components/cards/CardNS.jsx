import { Card } from 'flowbite-react';
import { DetailsCourse } from './DetailsCourse';

export const CardNS = ({ title, image, subtitles }) => {
    return (
        <>
            <Card className='max-w-sm'>
                <h5 className="mb-4 text-xl font-medium text-black dark:text-gray-400">{title}</h5>
                <div className="flex justify-center text-gray-900 dark:text-white w-70 h-56 ">
                    <img src={image} className='rounded-lg' />
                </div>
                <ul className="my-7 space-y-5">
                    {subtitles.map(i => <DetailsCourse key={i} detail={i} />)}
                </ul>
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                >
                    ¡Quiero este curso!
                </button>
            </Card>
        </>
    )
}
