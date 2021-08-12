<template>
  <div>
    <h1>Income Form</h1>
    <div class="form">
        <form>
            <div class="form-group">
                <label>Choose Year</label>
                <datepicker
                    type="year"
                    v-model="year"
                    :format="DatePickerFormat"
                    minimum-view="year"
                    calendar-button-icon
                >
                </datepicker>
            </div>
            <div class="form-group">
                <label>Amount</label>
                <input type="text" placeholder="Input Amount" v-model="budget"/>
            </div>
            <div class="form-group">
                <button type="button" @click="insert">Insert</button>
            </div>


            <div>
                {{  getInsertedMessage }} - is inserted
                {{ getInsertedYear }} - year
                {{ getAverageMonthlyIncome }} - averageMonthlyIncome
                {{ getYearlyBudget }} - yearlyIncome
            </div>
        </form>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import axios from 'axios';
import {mapGetters, mapMutations, mapActions, mapState} from "vuex";
let moment = require("moment");

export default {
    name: 'Income',
    data: () => {
        return {
            budget: '',
            year: '',
            user_id: '',
            error_msg: '',
            DatePickerFormat: 'yyyy',
            incomes: '',
        }
    },
    mounted() {
        this.getIncomeData();
    },
    computed: {
        ...mapGetters([
            'user',
            'getInsertedMessage',
            'getInsertedYear',
            'getAverageMonthlyIncome',
            'getYearlyBudget'
        ]),
        currentYear: {
            get: function() {
                return 2021
            },
        }
    },
    methods: {
        insert() {
            let valid = true;
            if(this.budget == '' && this.year == '') {
                valid = false;
            }
            if(valid) {
                let incomeForm = {
                    budget: this.budget,
                    year: moment(this.year).format('YYYY'),
                    user_id: this.user.user.id
                }
                axios
                .post('/auth/insert_income', incomeForm)
                .then(({ data }) => {
                    console.log(data, 'data');
                })
                .catch(e => {
                    this.error_msg = e.response.data.message;
                    console.log(this.error_msg);
                })
            }
        },
        async getIncomeData() {
                try {
                    await this.$store.dispatch('getUserIncomeData', this.user.user.id);
                } catch (e) {
                    console.log(e);
                }
        },
            // let id = this.user.user.id;
            // axios.get('/auth/get_income_of_user/' + id)
            // .then(({ data }) => {
            //     console.log(data,'data');
            // })
            // .catch(e => {
            //     console.log(e, 'error');
            // })
    },
    components: {
        Datepicker
    }
}
</script>

<style lang="scss">

</style>