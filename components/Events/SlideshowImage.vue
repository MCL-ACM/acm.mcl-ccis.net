<template>
    <div v-show="visibleImage === index">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        visibleImage: {
            type: Number
        },
        index: {
            type: Number
        }
    }
}
</script>

<style>

</style>