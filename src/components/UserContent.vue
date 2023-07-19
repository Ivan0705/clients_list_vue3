<template>
    <div class="user-content">
        <div class="user-content__name">{{user.name}}</div>
        <br/>
        <div class="user-content__email">{{user.email}}</div>
        <br/>
        <div class="user-content__phone">{{user.phone}}</div>
        <div class="user-content__about-me">О себе</div>
        <div class="user-content__content">
            Email:{{user.username}}
            <br/>
            street: {{user.address.street}}
            <br/>
            suite: {{user.address.suite}}
            <br/>
            city: {{user.address.city}}
            <br/>
            zipcode: {{user.address.zipcode}}
            <br/>
            lat: {{user.address.geo.lat }}
            <br/>
            lng: {{user.address.geo.lng}}
            <br/>
            Company name: {{user.company.name}}
            <br/>
            Company catchPhrase: {{user.company.catchPhrase}}
            <br/>
            Company bs:{{user.company.bs}}
            <br/>
            website:{{user.website}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserContent',
        props: {
            user: Object,
            required: true
        }
    }
</script>

<style lang="scss">
    .user-content {
        &__name {
            width: 233px;
            height: 19px;
            margin-top: 30px;
            font-weight: 600;
            font-size: 16px;
        }

        &__email {
            width: 242px;
            height: 21px;
            margin-top: 10px;
            font-weight: 600;
        }

        &__phone {
            width: 242px;
            height: 21px;
            margin-top: 10px;
            font-weight: 600;
        }

        &__about-me {
            width: 233px;
            height: 22px;
            margin-top: 20px;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
        }

        &__content {
            width: 439px;
            height: 136px;
            margin-top: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 17px;
        }
    }
</style>
