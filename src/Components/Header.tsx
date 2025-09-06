import React from 'react'
import { useDataContext } from '../Contexts/DataContext';
import DateRange from './DateRange';

function Header() {
    return (
        <div>
            <DateRange />
        </div>
    )
}

export default Header