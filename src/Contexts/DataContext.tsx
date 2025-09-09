import React from 'react';
import useFetch from '../Hooks/useFetch';

export type IVenda = {
    id: string;
    nome: string;
    preco: number;
    status: 'pago' | 'processando' | 'falha';
    pagamento: 'cartao' | 'boleto' | 'pix';
    data: string;
    parcelas: number | null;
}

type IDataContext = {
    data: IVenda[] | null;
    loading: boolean;
    error: string | null;
    inicio: string;
    setInicio: React.Dispatch<React.SetStateAction<string>>;
    final: string;
    setFinal: React.Dispatch<React.SetStateAction<string>>;
}

function getDate(daysAgo: number) {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
}
const DataContext = React.createContext<IDataContext | null>(null);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
    const [inicio, setInicio] = React.useState(getDate(15));
    const [final, setFinal] = React.useState(getDate(0));
    const { data, loading, error } = useFetch<IVenda[]>(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`);

    return (
        <DataContext.Provider value={{ data, loading, error, inicio, setInicio, final, setFinal }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    const context = React.useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext must be used within a DataContextProvider');
    }
    return context;
};
