<template>
    <v-container pt-12>
        <search-field v-model="filter" />
        <data-table
            :headers="headers"
            :items="items"
            :items-per-page="itensPorPagina"
        />
        <pagination
            :current-page="pagination.page"
            :total-pages="totalPages"
            @page-change="changePage"
        />
        <snackbar v-model="showErrorMessage" :message="errorMessage" />
    </v-container>
</template>

<script>
import SearchField from './SearchField.vue';
import DataTable from './DataTable.vue';
import Pagination from './Pagination.vue';
import Snackbar from './Snackbar.vue';
import { fetchSurgicalRequests } from '@/services/api';

export default {
    components: {
        SearchField,
        DataTable,
        Pagination,
        Snackbar,
    },
    data() {
        return {
            items: [],
            filter: '',
            itensPorPagina: 5,
            totalPages: 0,
            pagination: {
                page: 1,
            },
            headers: [
                { text: 'Médico', value: 'medico.nome' },
                { text: 'Paciente', value: 'paciente.nome' },
                { text: 'Idade', value: 'paciente.dataNascimento' },
                { text: 'Data de Criação', value: 'dataCriacao' },
            ],
            showErrorMessage: false,
            errorMessage: '',
        };
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetchSurgicalRequests({
                    paginaAtual: this.pagination.page,
                    itensPorPagina: this.itensPorPagina,
                    filter: this.filter,
                });

                this.items = response.data;
                const totalItems = response.headers['x-total-count'];
                this.totalPages = Math.ceil(totalItems / this.itensPorPagina);
            } catch (error) {
                this.showErrorMessage = true;
                this.errorMessage = "Erro ao buscar dados";
            }
        },
        changePage(newPage) {
            this.pagination.page = newPage;
            this.fetchData();
        },
    },
    watch: {
        filter() {
            this.pagination.page = 1;
            this.fetchData();
        },
    },
    mounted() {
        this.fetchData();
    },
};
</script>
