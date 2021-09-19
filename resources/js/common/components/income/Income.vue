<template>
  <div>
    <div class="income">
        <div class="wrapper">
            <div class="left-side">
                <form class="form w-50 m-b-20" v-if="!isCurrentYear">
                <div class="form-title">
                    <h2>Enter Yearly Income</h2>
                </div>
                <div class="form-group d-flex-column">
                    <label class="form-label">Year</label>
                    <year-picker></year-picker>
                </div>
                <div class="form-group d-flex-column">
                    <label class="form-label">Amount</label>
                    <input v-model="budget" class="form-input" placeholder="Input Amount" />
                </div>
                <div class="form-group">
                <button type="button" class="form-button" @click="insert">Insert</button>
                </div>
                </form>
                <div v-else>
                        <confirmation-message></confirmation-message>
                        <p>Ovo je data koja je dosla od Usera jednog po ovoj godini: </p>
                        {{ incomeData }}
                </div>
            </div>
        </div>
        <!-- <h1>Income Form</h1>
        <div class="form">
            <form>
                <div class="form-group">
                    <year-picker></year-picker>
                </div>
                <div class="form-group">
                    <label>Amount</label>
                    <input type="text" placeholder="Input Amount" v-model="budget"/>
                </div>
                <div class="form-group">
                    <button type="button" @click="insert">Insert</button>
                </div>
                <div>
                    <p>Ovo je data koja je dosla od Usera jednog po ovoj godini: </p>
                    {{ incomeData }}
                </div>
            </form>
        </div> -->
    </div>
    <!-- <div v-else>
        <confirmation-message></confirmation-message>
         <p>Ovo je data koja je dosla od Usera jednog po ovoj godini: </p>
        {{ incomeData }}
    </div> -->
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
    computed: {
        ...mapGetters([
            'user',
            'getIsCurrentYear',
            'getUserIncome',
            'getAllData',
            'getCurrentYear'
        ]),
        isCurrentYear: {
            get: function() {
               return this.getIsCurrentYear
            }
        },
        incomeData: {
            get: function() {
               return this.getUserIncome
            }
        },
        yearData: {
            get: function() {
                return this.getCurrentYear
            }
        }
    },
    methods: {
        validate() {
            let valid = true;
            if(this.budget == '' && this.yearData == '') {
                valid = false;
            }
            if(this.getAllData && this.year) {
                this.validYear = this.getAllData.find(el => {
                    if(el.year == this.yearData) {
                        return el;
                    }
                })
                if(this.validYear !== undefined) {
                    valid = false;
                }
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
                    console.log(data, 'data');
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
                await this.$store.dispatch('getUserIncomeData', this.user.user.id);
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