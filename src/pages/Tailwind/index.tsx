import { FC } from 'react';
import style from './Tailwind.module.scss';

interface ITailwindProps {}

export const Tailwind: FC<ITailwindProps> = (props) => {
    console.log('Render tailwind');
    return (
        <div className='bg-orange-400'>
            <h1 className="text-3xl font-bold underline bg-orange-400">
                Hello world!
            </h1>
        </div>
    );
};
