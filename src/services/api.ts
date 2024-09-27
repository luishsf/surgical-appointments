import axios from 'axios';

const API_URL = 'http://localhost:3000/data';

export const fetchSurgicalRequests = async ({ paginaAtual, itensPorPagina, filter }: { paginaAtual: number; itensPorPagina: number; filter: string }) => {
    const response = await axios.get(API_URL, {
        params: {
            _page: paginaAtual,
            _limit: itensPorPagina,
            q: filter,
        },
    });
    return response;
};
