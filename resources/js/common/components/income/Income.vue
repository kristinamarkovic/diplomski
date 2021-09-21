<template>
  <div>
    <div class="income">
        <div class="wrapper">
            <div class="left-side">
                <form class="form w-50 m-b-20">
                    <div class="form-title">
                        <h2>Yearly Income</h2>
                    </div>
                    <div class="form-group d-flex-column">
                        <label class="form-label">Year</label>
                        <year-picker></year-picker>
                    </div>
                    <div class="form-group d-flex-column">
                        <label class="form-label">Amount</label>
                        <input v-model="budget" :class="[error_msg ? 'form-input error-input' : 'form-input']"  placeholder="Input Amount" />
                        <label class="form-label form-label-error" v-show="error_msg">{{error_msg}}</label>
                    </div>
                    <div class="form-group">
                        <button type="button" class="form-button" @click="insert">Insert</button>
                    </div>
                </form>
                {{ incomeData }}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import axios from 'axios';
import {mapGetters, mapMutations, mapActions, mapState} from "vuex";
import ConfirmationMessage from './ConfirmationMessage.vue';
import YearPicker from '../forms/YearPicker.vue';
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
            validYear: null,
        }
    },
    created() {
        this.getIncomeData();
    },
    mounted() {
        this.getIncomeData();
    },
    watch: {
        incomeYearly: function(value)  {
            this.budget = value.budget ? value.budget : '';
        }
    },
    computed: {
        ...mapGetters([
            'user',
            'getUserIncome',
            'getCurrentYear'
        ]),
        incomeData: {
            get: function() {
               return this.getUserIncome
            }
        },
        yearData: {
            get: function() {
                return this.getCurrentYear
            }
        },
        incomeYearly: {
            get: function() {
                return this.getUserIncome
            }
        }
    },
    methods: {
        validate() {
            let valid = true;

            if(this.budget == '' && this.yearData == '') {
                valid = false;
                this.error_msg = "Amount is a required field.Only numbers allowed."
            }
            if(this.year) {
                if(this.validYear !== undefined) {
                    valid = false;
                }
            }

            if(isNaN(parseFloat(this.budget))) {
                valid = false;
                this.error_msg = "Amount is a required field.Only numbers allowed."
            }

            if(this.incomeYearly || this.incomeYearly != parseFloat(this.budget)) {
                valid = false;
                console.error("Mora update")
            }
            return valid;
        },
        insert() {
            let valid = this.validate();
            if(valid) {
                let incomeForm = {
                    budget: this.budget,
                    year: this.yearData,
                    user_id: this.user.user.id
                }
                axios
                .post('/auth/insert_income', incomeForm)
                .then(({ data }) => {
                    this.getIncomeData();
                })
                .catch(e => {
                    this.error_msg = e.response.data.message;
                    console.log(this.error_msg);
                })
            }
            else {
                console.log("Nije dobra godina OVO na FE da se hendla kao validaciona poruka.")
            }
        },
        async getIncomeData() {
            try {
                let request = {
                    user_id: this.user.user.id,
                    year: this.yearData
                }
                await this.$store.dispatch('getUserIncomeData', request);
            } catch (e) {
                console.log(e);
            }
        },
    },
    components: {
        Datepicker,
        ConfirmationMessage,
        YearPicker
    }
}
</script>

<style lang="scss">

</style>