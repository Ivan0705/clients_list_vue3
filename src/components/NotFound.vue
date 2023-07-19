<template>
    <div class="not-found">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'NotFound'
    }
</script>

<style lang="scss" scoped>
    @import "../scss/Colors";
    @import "../scss/Fonts";

    .not-found {
        width: 141px;
        height: 17px;
        margin-top: 15px;
        margin-left: 20px;
        font-family: $font-montserrat;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: $gray;
    }
</style>
