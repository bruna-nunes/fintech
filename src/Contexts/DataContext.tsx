import React from 'react';
import useFetch from '../Hooks/useFetch';

type IVenda = {
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
}

const DataContext = React.createContext<IDataContext | null>(null);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
    const { data, loading, error } = useFetch<IVenda[]>('https://data.origamid.dev/vendas/');

    return (
        <DataContext.Provider value={{ data, loading, error }}>
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
