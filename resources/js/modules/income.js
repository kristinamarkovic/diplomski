import axios from "axios";

const state = {
    insertedYear: "",
    currentYear: "",
    isCurrentYear: "",
    userIncome: null,
    allData: null,
};

const getters = {
    getInsertedYear: state => state.insertedYear,
    getCurrentYear: state => state.currentYear,
    getIsCurrentYear: state => state.isCurrentYear,
    getUserIncome: state => state.userIncome,
    getAllData: state => state.allData,
};


const mutations = {
    setInsertedYear(state, year) {
        state.insertedYear = year;
    },
    setCurrentYear(state, year) {
        state.currentYear = year;
    },
    setIsCurrentYear(state, bool) {
        state.isCurrentYear = bool;
    },
    setUserDataIncome(state, year) {
        state.userIncome = null;
        let data = null;
        if(state.allData) {
            data = state.allData.find(element => {
                if(element.year == year ) {
                    return element;
                }
            })
            if(data) {
                state.insertedYear = data.year;
                state.userIncome = data;
            }
        }
    },
    setAllData(state, data) {
        state.allData = data;
    }
};

const actions = {
    // In practice, we often use ES2015 argument destructuring
    // to simplify the code a bit (especially when we need to call commit multiple times)
    //ovde su svi podaci bez filtera
    getUserIncomeData ({ commit }, request) {
        return axios.get('/auth/get_income_of_user/' + request)
        .then(({ data }) => {
            console.log(data.user_income, 'dataUserIncomeDATAAAAAAA')
            // OVDE DOHVATAS SVE PODATKE I TREBA DA SETUJES NEKI STATE IZ KOJEG CES DA UZMES KAD STIGNE GODINA
            commit('setAllData', data.user_income);
            if(data.user_income.length > 0) {
                if(this.currentYear == "") {
                    commit('setCurrentYear', moment().year())
                }
                let usersBudget = data.user_income.find(element => {
                    if(element.year == moment(this.currentYear).year()) {
                        return element;
                    }
                })
                commit('setInsertedYear', usersBudget.year);
                commit('setUserDataIncome', usersBudget.year);

                if(this.currentYear == this.insertedYear) {
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
    setUserDataIncome({commit}, data) {
        commit('setUserDataIncome', data);
    },
    setCurrentYear({commit, year}) {
        commit('setCurrentYear', year);
    },
    setIsCurrentYear({commit, year}) {
        commit('setIsCurrentYear', year);
    },
    setAllData({commit}, data) {
        commit('setAllData', data);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

let moment = require("moment");