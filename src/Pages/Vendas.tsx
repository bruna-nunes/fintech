import React from 'react'
import { useDataContext } from '../Contexts/DataContext';
import VendaItem from '../Components/VendaItem';

const Vendas = () => {
    const { data } = useDataContext();

    if(data === null) return null;

    return (
        <ul>
            {data.map((venda) => (
                <li key={venda.id}><VendaItem venda={venda} /></li>
            ))}
        </ul>
    )
}

export default Vendas