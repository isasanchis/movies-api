<template>
    <div class="card-default">
        <h2>{{ titulo }}</h2>
        <p>{{ descricao }}</p>
    </div>
</template>

<script>
export default {
    name: 'filme',
    props: {
        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String
        }
    },
}
</script>

<style>

</style>