import React, { use } from 'react'
import DateInput from './DateInput'
import { useDataContext } from '../Contexts/DataContext';

function DateRange() {
    const { inicio, setInicio, final, setFinal } = useDataContext();
    return (
        <form className="box flex" onSubmit={e => e.preventDefault()}>
            <DateInput label="Inicio" value={inicio} onChange={({ target }) => setInicio(target.value)} />
            <DateInput label="Final" value={final} onChange={({ target }) => setFinal(target.value)} />
        </form>
    )
}

export default DateRange