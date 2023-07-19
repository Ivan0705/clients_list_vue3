<template>
    <div class="select-employee">
        <div class="select-employee__title">Выберите пользователя, чтобы посмотреть</div>
    </div>
</template>

<script>
    export default {
        name: 'SelectEmployee'
    }
</script>

<style lang="scss" scoped>
    @import "../scss/Colors";
    @import "../scss/Fonts";

    .select-employee {
        background: $white;
        width: 975px;
        height: 575px;
        box-sizing: border-box;
        border-radius: 0 10px 10px 0;
        position: absolute;

        &__title {
            width: 397px;
            height: 17px;
            margin-top: 250px;
            margin-left: 284px;
            font-family: $font-montserrat;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: $gray;
        }
    }
</style>
