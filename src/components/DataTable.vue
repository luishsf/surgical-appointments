<template>
    <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="itemsPerPage"
        hide-default-footer
    >
        <template v-slot:item.paciente.dataNascimento="{ item }">
            <span>{{ calculateAge(item.paciente.dataNascimento) }}</span>
        </template>
        <template v-slot:item.dataCriacao="{ item }">
            <span>{{ formatDateTime(item.dataCriacao) }}</span>
        </template>
    </v-data-table>
</template>

<script>
export default {
    props: {
        headers: {
            type: Array,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },
        itemsPerPage: {
            type: Number,
            required: true,
        },
    },
    methods: {
        formatDateTime(dateString) {
            const options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            };
            return new Date(dateString).toLocaleString('pt-BR', options);
        },
        calculateAge(birthDateString) {
            const birthDate = new Date(birthDateString);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },
    },
};
</script>
