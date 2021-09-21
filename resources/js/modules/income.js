import axios from "axios";

const state = {
    currentYear: "",
    userIncome: null,
};

const getters = {
    getCurrentYear: state => state.currentYear,
    getUserIncome: state => state.userIncome,
};

const mutations = {
    setCurrentYear(state, year) {
        state.currentYear = year;
    },
    setUserDataIncome(state, data) {
        state.userIncome = data;
    },
};
// Nema za sta! <3
const actions = {
    getUserIncomeData ({ commit }, payload) {
        console.log(payload, 'request')
        let url = '/auth/get_income_of_user/' + payload.user_id
        if(payload.year) url += '?year=' + payload.year
        return axios.get(url)
        .then(({ data }) => {
            console.log(data.user_income, 'dataUserIncomeDATAAAAAAA')
            commit('setUserDataIncome', data.user_income);
        })
        .catch(e => {
            console.log(e, 'error');
        })
    },
    setUserDataIncome({commit}, data) {
        commit('setUserDataIncome', data);
    },
    setCurrentYear({commit, year}) {
        commit('setCurrentYear', year);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

let moment = require("moment");