<template>
    <div class="main-page">
        <Header/>
        <router-view>
        </router-view>
    </div>
</template>

<script>
    import Header from "../components/TheHeader";
    import Page from './Page'

    export default {
        name: 'main-page',
        components: {
            Header, Page
        }
    }
</script>

<style lang="scss" scoped>

    @import "../scss/Colors";

    .main-page {
        width: 1266px;
        height: 748px;
        background: $white;
        margin-left: 5px;
    }
</style>
