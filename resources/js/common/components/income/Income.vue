<template>
  <div>
    <div class="income" v-if="!isCurrentYear">
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
                    <p>Ovo je data koja je dosla od Usera jednog po ovoj godini: </p>
                    {{ incomeData }}
                </div>
            </form>
        </div>
    </div>
    <div v-else>
        <confirmation-message></confirmation-message>
         <p>Ovo je data koja je dosla od Usera jednog po ovoj godini: </p>
        {{ incomeData }}
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import axios from 'axios';
import {mapGetters, mapMutations, mapActions, mapState} from "vuex";
import ConfirmationMessage from './ConfirmationMessage.vue';
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
        }
    },
    methods: {
        validate() {
            if(this.budget == '' && this.year == '') {
                valid = false;
            }
            if(this.getAllData && this.year) {
                this.validYear = this.getAllData.find(el => {
                    if(el.year == moment(this.year).year()) {
                        return el;
                    }
                })
                console.log(this.validYear, 'validYear');
                if(this.validYear !== undefined) {
                    valid = false;
                }
            }
        },
        insert() {
            let valid = this.validate();
            if(valid) {
                let incomeForm = {
                    budget: this.budget,
                    year: moment(this.year).year(),
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
        ConfirmationMessage
    }
}
</script>

<style lang="scss">

</style>