<template>
    <v-text-field
        outlined
        :value="value"
        label="Pesquisar por médico ou paciente"
        @input="$emit('input', $event)"
        prepend-inner-icon="mdi-magnify"
    />
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true,
        },
    },
};
</script>
