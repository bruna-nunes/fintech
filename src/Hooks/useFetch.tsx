import React from "react";

function useFetch<DataInterface>(url: RequestInfo | URL, options?: RequestInit) {
    const [data, setData] = React.useState<DataInterface | null>(null);
    const [error, setError] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(false);

    const optionsRef = React.useRef(options);
    optionsRef.current = options;

    React.useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        const fetchData = async () => {
            setLoading(true);
            setData(null);

            try {
                const response = await fetch(url, {
                    signal,
                    ...optionsRef.current
                });
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.status}`);
                }
                const result = (await response.json()) as DataInterface;
                if(!signal.aborted) {
                    setData(result);
                }
            } catch (error) {
                if(!signal.aborted && error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                if(!signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };
    }, [url]);

    return { data, error, loading };
};

export default useFetch;
