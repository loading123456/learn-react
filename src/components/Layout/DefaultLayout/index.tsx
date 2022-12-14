import { FC, ReactElement } from 'react';
import Header from './Header';

interface IDefaultLayoutProps {
    children?: ReactElement;
}

export const DefaultLayout: FC<IDefaultLayoutProps> = ({ children }) => {
    return (
        <>
            <Header></Header>
            {children}
        </>
    );
};

export default DefaultLayout;
