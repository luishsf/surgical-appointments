<template>
    <v-snackbar v-model="show" :timeout="3000" top>
        {{ message }}
    </v-snackbar>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            required: true,
        },
        message: {
            type: String,
            default: '',
        },
    },
    computed: {
        show: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            },
        },
    },
};
</script>
