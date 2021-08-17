import axios from "axios";

const state = {
    isInserted: "",
    insertedYear: "",
    averageMonthlyIncome: "",
    yearlyIncome: "",
    currentYear: "",
    isCurrentYear: "",
};

const getters = {
    getInsertedMessage: state => state.isInserted,
    getInsertedYear: state => state.insertedYear,
    getAverageMonthlyIncome: state => state.averageMonthlyIncome,
    getYearlyBudget: state => state.yearlyIncome,
    getCurrentYear: state => state.currentYear,
    getIsCurrentYear: state => state.isCurrentYear,
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
    },
    setCurrentYear(state, year) {
        state.currentYear = year;
    },
    setIsCurrentYear(state, bool) {
        state.isCurrentYear = bool;
    }
};

const actions = {
    // In practice, we often use ES2015 argument destructuring
    // to simplify the code a bit (especially when we need to call commit multiple times)
    getUserIncomeData ({ commit }, request) {
        return axios.get('/auth/get_income_of_user/' + request)
        .then(({ data }) => {
            console.log(data);
            if(data.user_income.length > 0) {
                //console.log(data.user_income[0].year)
                //commit('isInserted', data.message);
                commit('setInsertedYear', data.user_income[0].year);
                //commit('averageMonthlyIncome', data.yearly_income.monthly_income);
                commit('setYearlyBudget', data.user_income[0].budget);
                commit('setCurrentYear', moment().year())

                if(this.currentYear == this.insertedYear) {
                    console.log('OVde?')
                    commit('setIsCurrentYear', true)
                }
                else {
                    commit('setIsCurrentYear', false)
                }
            }
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
    setCurrentYear({commit, year}) {
        commit('setCurrentYear', year);
    } ,
    setIsCurrentYear({commit, year}) {
        commit('setIsCurrentYear', year);
    } 
}

export default {
    state,
    getters,
    actions,
    mutations
}

let moment = require("moment");