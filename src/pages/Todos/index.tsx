import {
    FC,
    useEffect,
    useState,
    useLayoutEffect,
    useRef,
    memo,
    useCallback,
} from 'react';
import className from 'classnames/bind';
import styles from './Todos.module.scss';
import Todo from '~/components/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '~/state'
import { bindActionCreators } from 'redux';
const cx = className.bind(styles);

interface ITodosProps {}
interface todo {
    id: number;
    content: string;
}

export const Todos: FC<ITodosProps> = (props) => {
    const [inputTodo, setInputTodo] = useState('');
    const [todos, setTodos] = useState<todo[]>([]);
    const [countTime, setCountTime] = useState(0);

    const dispatch = useDispatch()
    const { handleA, handleB, handleC} = bindActionCreators(actionCreators, dispatch);
    const amount = useSelector((state:State) => state.bank)

    console.log("Render todos")
    useLayoutEffect(() => {
        setTimeout(() => {
            setCountTime(countTime + 1);
            if (countTime == 9) {
                setCountTime(0);
            }
        }, 1000);
    });
    const handleDeleteTodo = useCallback((id:number) => {
        setTodos(todos.filter((value) => value.id != id));
    }, []);

    const handleUpdateTodo = useCallback((id:number, newContent:string) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id ? { id: id, content: newContent } : todo;
            }),
        );
    }, []);

    const handleAddTodo = () => {
        console.log('Add todo: ', inputTodo);
        setTodos([
            ...todos,
            { id: Math.floor(Math.random() * 1100), content: inputTodo },
        ]);
        setInputTodo('');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Todos</div>
            <div className={cx('time')}>{countTime}</div>
            <input
                type="text"
                className={cx('input')}
                value={inputTodo}
                onChange={(e) => setInputTodo(e.target.value)}
            />
            <button className={cx('add-btn')} onClick={handleAddTodo}>
                Add
            </button>

            <div className={cx('todo-list')}>
                {todos.map((todo, index) => {
                    return (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            content={todo.content}
                            handleDeleteTodo={handleDeleteTodo}
                            handleUpdateTodo={handleUpdateTodo}
                        ></Todo>
                    );
                })}
            </div>

            <h1>{amount}</h1>
            <button onClick={e => handleA(100)}>A</button>
            <button onClick={e => handleB(50)}>B</button>
            <button onClick={e => handleC()}>C</button>
            
        </div>
    );
};

export default Todos;
