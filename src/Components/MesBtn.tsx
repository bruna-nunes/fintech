import React from 'react'
import { useDataContext } from '../Contexts/DataContext';

const style: React.CSSProperties = {
    padding: 'var(--gap) var(--gap-s)',
    backgroundColor: 'var(--color-3)',
    border: 'none',
    borderRadius: 'var(--gap)',
    color: 'var(--color-2)',
    fontWeight: '600',
    textTransform: 'capitalize',
}

function nomeMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
}

function formatDate(date: Date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
}

function MesBtn({ n }: { n: number }) {
    const {setInicio, setFinal} = useDataContext();


    function setMes(n: number) {
        const date = new Date();
        date.setMonth(date.getMonth() + n);
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        setInicio(formatDate(firstDay));
        setFinal(formatDate(lastDay));
    }
    return (
        <button style={style} onClick={() => setMes(n)}>{nomeMes(n)}</button>
    )
}

export default MesBtn