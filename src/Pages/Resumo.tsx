import React from 'react'
import { useDataContext } from '../Contexts/DataContext';

function Resumo() {
    const { data } = useDataContext();
    console.log(data);
    return (
        <div>Resumo</div>
    )
}

export default Resumo