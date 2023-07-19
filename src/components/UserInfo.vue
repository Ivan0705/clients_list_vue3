<template>
    <div class="user-info">
        <div class="container">
            <img class="user-info__image" src=../images/profile.png alt="profile"/>
            <UserContent v-for="us in user" :key="us.id" :user="us"/>
        </div>
    </div>
</template>

<script>
    import UserContent from './UserContent'

    export default {
        name: 'UserInfo',
        props: {
            user: {
                type: Object,
                required: true
            }
        },
        components: {
            UserContent
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/Colors";
    @import "../scss/Fonts";

    .user-info {
        width: 975px;
        height: 575px;
        color: $dark_gray;
        line-height: 140%;
        font-family: $font-montserrat;

        &__image {
            margin-top: 30px;
            margin-left: -40px;
            width: 424px;
            height: 286px;
            background: $white;
            border: 1px solid $light_gray;
            margin-right: 61px;
        }
    }

    .container {
        display: flex;
        margin-left: 61px;
        font-size: 14px;
        font-style: normal;
    }
</style>
