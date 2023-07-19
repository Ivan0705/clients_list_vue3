<template>
    <div class="preloader">
        <img class="preloader__image" src=../images/preloader.gif alt="preloading"/>
        <div>
            Идет загрузка...
        </div>
    </div>

</template>
<script>
    export default {
        name: 'Preloader'
    }
</script>
<style lang="scss">
    @import "../scss/Colors";
    @import "../scss/Fonts";

    .preloader {
        margin-left: 20px;
        margin-top: 10px;
        font-family: $font-montserrat;

        &__image {
            width: 90px;
        }
    }
</style>
