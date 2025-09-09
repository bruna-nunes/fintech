import React from 'react'
import { useDataContext } from '../Contexts/DataContext';
import DateRange from './DateRange';
import Meses from './Meses';
import { useLocation } from 'react-router-dom';

function Header() {
    const [title, setTitle] = React.useState('Resumo');

    const location = useLocation();

    React.useEffect(() => {
        const path = location.pathname;
        if (path.includes('/vendas/')) {
            setTitle('Venda');
        } else if (path.includes('/vendas')) {
            setTitle('Vendas');
        } else {
            setTitle('Resumo');
        }
    }, [location]);    

    return (
        <header className='mb'>
            <div className='daterange mb'>
                <DateRange />
                <h1 className='box bg-3'>{title}</h1>
            </div>
            <Meses />
        </header>
    )
}

export default Header