import React from 'react'
import { useDataContext } from '../Contexts/DataContext';

function Header() {
    const { data } = useDataContext();
    console.log(data);
    return (
        <div>Header</div>
    )
}

export default Header