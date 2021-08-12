import axios from "axios";

const state = {
    isInserted: "",
    insertedYear: "",
    averageMonthlyIncome: "",
    yearlyIncome: "",
    currentYear: moment().year(moment().toDate())
};

const getters = {
    getInsertedMessage: state => state.isInserted,
    getInsertedYear: state => state.insertedYear,
    getAverageMonthlyIncome: state => state.averageMonthlyIncome,
    getYearlyBudget: state => state.yearlyIncome
};


const mutations = {
    setInsertedMessage(state, msg) {
        state.isInserted = msg;
    },
    setInsertedYear(state, year) {
        state.insertedYear = year;
    },
    setAverageMonthlyIncome(state, income) {
        state.averageMonthlyIncome = income;
    },
    setYearlyBudget(state, budget) {
        state.yearlyIncome = budget;
    }
};

const actions = {
    // In practice, we often use ES2015 argument destructuring
    // to simplify the code a bit (especially when we need to call commit multiple times)
    getUserIncomeData ({ commit }, request) {
        return axios.get('/auth/get_income_of_user/' + request)
        .then(({ data }) => {
            console.log(data);
            //console.log(data.user_income[0].year)
            //commit('isInserted', data.message);
            commit('setInsertedYear', data.user_income[0].year);
            //commit('averageMonthlyIncome', data.yearly_income.monthly_income);
            commit('setYearlyBudget', data.user_income[0].budget);
        })
        .catch(e => {
            console.log(e, 'error');
        })
    },
    setInsertedYear({commit}, year) {
        commit('setInsertedYear', year);
    },
    setAverageMonthlyIncome({commit}, income) {
        commit('setAverageMonthlyIncome', income);
    },
    setYearlyBudget({commit}, budget) {
        commit('setYearlyBudget', budget);
    },
    setInsertedMessage({commit}, msg) {
        commit('setInsertedMessage', msg);
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}

let moment = require("moment");