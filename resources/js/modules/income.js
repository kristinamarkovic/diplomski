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
    },
};

const actions = {
    // In practice, we often use ES2015 argument destructuring
    // to simplify the code a bit (especially when we need to call commit multiple times)
    // getUserIncomeData ({ commit }, request) {
    //     return axios.get('/auth/get_income_of_user/' + request)
    //     .then(({ data }) => {
    //         console.log(data);
    //         if(data.user_income.length > 0) {
    //             //console.log(data.user_income[0].year)
    //             //commit('isInserted', data.message);
    //             commit('setInsertedYear', data.user_income[0].year);
    //             //commit('averageMonthlyIncome', data.yearly_income.monthly_income);
    //             commit('setYearlyBudget', data.user_income[0].budget);
    //             //commit('setCurrentYear', moment().year())

    //             if(this.currentYear == this.insertedYear) {
    //                 commit('setIsCurrentYear', true)
    //             }
    //             else {
    //                 commit('setIsCurrentYear', false)
    //             }
    //         }
    //     })
    //     .catch(e => {
    //         console.log(e, 'error');
    //     })
    // },
    //IDEJA KAKO OVO DA RESIMO NAJKRACOM MUKOM
    //ostavicemo funkciju koja dohvata sve za korisnika i onda uraditi jedan filter prilikom ucitavanja
    //gde cemo pitati za current year, ostaje flow. Ako ima vise godina unetih onda cu lepo raditi filter
    //u js samo za tu godinu i to je to i cuvati u state i na osnovu toga uraditi filter commit('setUserdata', year);
    getUserYearIncomeData ({ commit }, request) {
        return axios.post('/auth/get_income_of_user_year', request)
        .then(({ data }) => {
            console.log(data, 'sta je stiglo');
            if(data.user_income !== null) {
                commit('setCurrentYear', data.user_income.year);
                commit('setInsertedYear', data.user_income.year);
                commit('setAverageMonthlyIncome', data.user_income.average_monthly_income);
                commit('setYearlyBudget', data.user_income.budget);
                if(this.currentYear == this.insertedYear) {
                    commit('setIsCurrentYear', true)
                }
                else {
                    commit('setIsCurrentYear', false)
                }
            }
            else if (data.user_income !== null && this.currentYear != moment().year() ) {
                commit('setCurrentYear', this.currentYear)
            }
            else {
                console.log(this.currentYear, 'currentYear ELSE')
                console.log(moment().year(), 'moment')
                commit('setCurrentYear', moment().year())
            }

            //imam problem sa setovanjem
            
            // if(data.user_income.length > 0) {
            //     //console.log(data.user_income[0].year)
            //     //commit('isInserted', data.message);
            //     commit('setInsertedYear', data.user_income[0].year);
            //     //commit('averageMonthlyIncome', data.yearly_income.monthly_income);
            //     commit('setYearlyBudget', data.user_income[0].budget);
            //     commit('setCurrentYear', moment().year())

            //     if(this.currentYear == this.insertedYear) {
            //         commit('setIsCurrentYear', true)
            //     }
            //     else {
            //         commit('setIsCurrentYear', false)
            //     }
            // }
        })
        .catch(e => {
            console.log(e, 'error');
        })
    },
    getCurrentYear({commit}, request) {
        commit('setCurrentYear', request);
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