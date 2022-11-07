import { FC, useState, memo } from 'react';
import className from 'classnames/bind';
import styles from './Todo.module.scss';

const cx = className.bind(styles);

interface ITodoProps {
    id: number;
    content: string;
    handleDeleteTodo: (id: number) => void;
    handleUpdateTodo: (id: number, newContent: string) => void;
}

export const Todo: FC<ITodoProps> = ({
    id,
    content,
    handleDeleteTodo,
    handleUpdateTodo,
}) => {
    const [updateTodo, setUpdateTodo] = useState(false);
    const [updateInput, setUpdateInput] = useState('');
    const [updateContent, setUpdateContent] = useState('Change')

    console.log("todo re-render:")

    const handleUpdateBtn = () => {
        setUpdateTodo(!updateTodo);

        
        if (updateTodo) {
            handleUpdateTodo(id, updateInput);
            setUpdateContent('Change')
        } else {
            setUpdateContent('Update')

        }


    };
    return (
        <div className={cx('wrapper')}>
            <span className={cx('content')}>{content}</span>{' '}
            <span> &nbsp;&nbsp;| &nbsp; &nbsp;</span>
            <button onClick={(e) => handleDeleteTodo(id)}>Delete</button>
            <input
                type="text"
                className={cx('inputUpdate')}
                style={{ display: updateTodo ? 'block' : 'none' }}
                value={updateInput}
                onChange={(e) => setUpdateInput(e.target.value)}
            />
            <button onClick={handleUpdateBtn}>{updateContent}</button>
        </div>
    );
};

export default memo(Todo);
