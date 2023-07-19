<template>
    <div class="header">
        <div class="header__title">Список пользователей</div>
        <div class="header__user">Пользователь</div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="scss">
    @import "../scss/Colors";
    @import "../scss/Fonts";

    .header {
        font-family: $font-montserrat;
        font-style: normal;

        &__title {
            height: 39px;
            font-weight: 700;
            font-size: 32px;
            line-height: 39px;
            color: $red;
            margin-bottom: 30px;
        }

        &__user {
            position: absolute;
            width: 117px;
            height: 20px;
            left: 1199px;
            top: 30px;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: $dark_gray;
        }
    }

</style>
