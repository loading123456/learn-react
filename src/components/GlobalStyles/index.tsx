import { FC, ReactElement } from 'react';
import './GlobalStyles.scss';

interface Props {
    children: ReactElement;
}

const GlobalStyles: FC<Props> = ({ children }) => {
    return <>{children}</>;
};

export default GlobalStyles;
