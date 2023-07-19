<template>
    <div class="page">
        <div>
            <div class="page__search">Поиск пользователей</div>
            <input type="text" v-model='searchQuery' placeholder="Введите id или имя пользователя"
                   @update:model-value="setSearchQuery"/>
            <div class="page__results">Результаты</div>
            <div>
                <div v-if="!isLoading">
                    <div class="page__scrolling">
                        <div v-if="!error">
                            <User v-for="user in filteredList" :key="user.id" :user="user"
                                  @click="getId(user.id)"/>

                        </div>
                        <div v-else="error">
                            <NotFound>Неизвестная ошибка</NotFound>
                        </div>
                        <div v-if="searchQuery && !filteredList.length">
                            <NotFound>Ничего не найдено</NotFound>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <Preloader/>
                </div>
            </div>
        </div>
        <div class="page__info">
            <div v-if="id > 0">
                <div v-if="!isLoadingInfo">
                    <UserInfo :user="userById"/>
                </div>
                <div v-else>
                    <Preloader/>
                </div>
            </div>
            <div v-else>
                <SelectEmployee/>
            </div>
        </div>
    </div>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script>
    import NotFound from "../components/NotFound";
    import UserInfo from "../components/UserInfo";
    import User from "../components/User";
    import SelectEmployee from "../components/SelectEmployee";
    import Preloader from "../components/Preloader";
    import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

    export default {
        name: 'page',
        components: {Preloader, SelectEmployee, UserInfo, NotFound, User},
        data() {
            return {
                id: 0,
                isLoadingInfo: false
            }
        },
        methods: {
            ...mapMutations({
                setUsers: 'user/setUsers',
                setError: 'user/setError',
                setSearchQuery: 'user/setSearchQuery',
            }),
            ...mapActions({
                fetchUsers: 'user/fetchUsers',
                fetchUserById: 'user/fetchUserById'

            }),
            getId(id) {
                this.isLoadingInfo = true;

                setTimeout(() => {
                    this.id = id;
                    this.isLoadingInfo = false;
                }, 300);

                this.fetchUserById(id);
            }
        },
        mounted() {
            this.fetchUsers();
        },
        computed: {
            ...mapState({
                users: state => state.user.users,
                userById: state => state.user.userById,
                isLoading: state => state.user.isLoading,
                searchQuery: state => state.user.searchQuery,
                error: state => state.user.error
            }),
            ...mapGetters({
                filteredList: 'user/filteredList'
            }),
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/Colors";
    @import "../scss/Fonts";

    .page {
        display: flex;
        width: 1266px;
        height: 575px;
        background: $white2;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        font-family: $font-montserrat;;

        &__info {
            position: absolute;
            width: 975px;
            height: 575px;
            margin-left: 290px;
            background: $white2;
            border-left: 1px solid $light_gray;
            border-radius: 0 10px 10px 0;
        }

        &__results {
            margin-top: 15px;
            width: 233px;
            height: 22px;
            left: 70px;
            top: 254px;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 140%;
            color: $dark_gray;
            margin-left: 20px;
        }

        &__search {
            width: 261px;
            height: 22px;
            margin-top: 27px;
            margin-bottom: 22px;
            top: 142px;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 140%;
            color: $dark_gray;
            margin-left: 20px;
        }

        &__scrolling {
            -ms-overflow-style: none;
            scrollbar-width: none;
            overflow-y: scroll;
            border-radius: 5px;
            height: 370px;
            padding: 10px;
        }

        &__scrolling::-webkit-scrollbar {
            width: 0;
        }
    }

    input[type='text'] {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px;
        gap: 16px;
        width: 240px;
        height: 46px;
        background: $white;
        border: 1.5px solid $light_gray;
        border-radius: 8px;
        outline: none;
        margin-left: 18px;
    }
</style>
