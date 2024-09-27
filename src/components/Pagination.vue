<template>
    <v-pagination
        class="mt-4"
        v-model="currentPage"
        :length="totalPages"
        @input="pageChange"
    />
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        totalPages: {
            type: Number,
            required: true,
        },
    },
    methods: {
        pageChange(newPage) {
            this.$emit('page-change', newPage);
        },
    },
};
</script>
