<template>
    <div class="user">
        <div>
            <div class="user__photo"><img class="user__photo__image" src=../images/profile.png alt="profile"/></div>
            <div class="container">
                <div class="user__name">{{user.name}}</div>
                <br/>
                <div class="user__email">{{user.email}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'User',
        props: {
            user: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/Colors";
    @import "../scss/Fonts";

    .user {
        width: 240px;
        height: 70px;
        margin-left: 20px;
        margin-top: 18px;
        background: $white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        font-family: $font-montserrat;
        font-style: normal;

        &__photo {
            box-sizing: border-box;
            width: 70px;
            height: 70px;
            border-right: 1px solid $light_gray;

            &__image {
                width: 40px;
                margin-left: 15px;
                margin-top: 15px;
            }
        }

        &__name {
            width: 115px;
            height: 15px;
            margin-top: -60px;
            font-weight: 600;
            color: $dark_gray;
        }

        &__email {
            width: 121px;
            height: 17px;
            font-weight: 400;
            color: $gray;
        }
    }

    .container {
        margin-left: 75px;
        font-size: 14px;
        line-height: 17px;
    }
</style>
