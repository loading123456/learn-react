import { FC } from 'react';
interface IHeaderProps {}

export const Header: FC<IHeaderProps> = (props) => {
    return (
        <div>
            <h1>Header</h1>
        </div>
    );
};

export default Header;
