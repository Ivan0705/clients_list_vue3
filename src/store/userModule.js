import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

export const userModule = {
    state: () => ({
        users: [],
        isLoading: false,
        searchQuery: '',
        error: false,
        userById: []
    }),
    getters: {
        filteredList(state) {
            return state.users.filter(user => {
                return user.id.toString().includes(state.searchQuery.toString()) ||
                    user.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                    user.email.toLowerCase().includes(state.searchQuery.toLowerCase());
            })
        }
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        }
        ,
        setUserById(state, userById) {
            state.userById = userById;
        },
        setLoading(state, bool) {
            state.isLoading = bool;
        }
        ,
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        }
        ,
        setError(state, bool) {
            state.error = bool;
        }
    },
    actions: {
        async fetchUsers({commit}) {
            try {
                commit('setLoading', true);
                setTimeout(async () => {
                    const response = await axios.get(baseUrl)
                        .catch(err => {
                            commit('setError', true);
                            commit('setLoading', false);
                            console.log(err)
                        });
                    commit('setUsers', response.data);
                    commit('setLoading', false);
                }, 300)
            } catch (e) {
                console.log('Ошибка: ' + e);
                commit('setError', true)
            }
        },
        async fetchUserById({commit}, id) {
            try {
                commit('setLoading', true);
                setTimeout(async () => {
                    const response = await axios.get(baseUrl, {params: {id: id}})
                        .catch(err => {
                            commit('setError', true);
                            commit('setLoading', false);
                            console.log(err)
                        });
                    commit('setUserById', response.data);
                    commit('setLoading', false);
                }, 300)
            } catch (e) {
                console.log('Ошибка: ' + e);
                commit('setError', true)
            }
        }
    },
    namespaced: true
};
