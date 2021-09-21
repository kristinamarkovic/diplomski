<template>
  <div>
    <div class="monthly-expenses">
        <div class="wrapper p-t-150">
            <div class="left-side">
                <form class="form m-b-20">
                <div class="form-title">
                    <h2>Monthly Expenses</h2>
                </div>
                <div class="d-flex-row justify-between">
                    <div class="d-flex-column categories-group form-group p-0">
                        <label v-for="category in categories" :key="category.name" class="form-input-label m-t-10">{{ category.name }}</label>
                    </div>
                    <div class="d-flex-column form-group p-0">
                        <input v-for="expense in expenses" :key="expense.id" v-model="expense.expense" class="form-input m-t-10" placeholder="Input Amount" />
                    </div>
                </div>
                <div class="form-group float-right">
                    <button type="button" class="form-button" @click="insert">Insert</button>
                </div>
                
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {mapGetters, mapMutations, mapActions, mapState} from "vuex";
let moment = require("moment");

export default {
    name: 'MonthlyExpenses',
    data: () => {
        return {
            budget: '',
            year: '',
            user_id: '',
            error_msg: '',
            DatePickerFormat: 'yyyy',
            incomes: '',
            validYear: null,
            expense: '',
            categories: '',
            expenses: null,
            formData: null,
        }
    },
    created() {
        this.getAllCategories();
    },
    computed: {
        ...mapGetters([
          'user',
          'getUserIncome'
        ]),
        yearData: {
          get: function() {
            return this.getUserIncome
          }
        },
        currentUser: {
            get: function() {
                return this.user.user.id;
            }
        }
    },
    methods: {
        validate() {
            let valid = true;

            if(this.yearData.year == '') {
                valid = false;
            }
            
            let emptyExpenses = this.expenses.find(el => isNaN(parseFloat(el.expense)));
            if(emptyExpenses) {
                valid = false;
            }

            if(valid) {
                this.formData = this.expenses.map(({expense, year, category_id, user_id}) => ({ expense, year, category_id, user_id}));
            }
            return valid;
        },
        insert() {
            let valid = this.validate();
            if(valid) {
                axios
                .post('/auth/insert_monthly_expenses', this.formData)
                .then(({ data }) => {
                    console.log(data, 'data');
                    if(data) {
                        // this.expenses = data.expenses;
                        
                    }
                })
                .catch(e => {
                    this.error_msg = e.response.data.message;
                    console.log(this.error_msg);
                })
            }
            else {
              console.log("Popuni bla bla bla ovo cemo odradit")
            }
        },
        async getAllCategories() {
            await axios.get('/auth/get_all_categories')
            .then(({ data }) => {
                console.log(data, 'categories');
                if(data) {
                    this.categories = data.categories;

                    //SUTRA; KATEGORIJE SU JEDAN LABEL GDE ISPISUJEM NAME OD KATEGORIJE
                    //OVO EXPENSES OSTAJE SAMO ZA OVE OSTALE PODATKE
                    //UPIT DA VRATIS PODATKE --- TU SU PODACI
                    //I ISPIS OVDE 
                    // BUG SA GODINOM NESTO SE NE UPDATEUJE
                    this.filterExpenses(this.categories);
                }
            })
            .catch(e => {
                // this.error_msg = e.data.message;
                console.log(e, 'error');
            })
        },
        filterExpenses(data) {
            if(data) {
                this.expenses = data;
                this.expenses.forEach((value, index) => {
                    Object.assign(value, { 'expense' : 0})
                    Object.assign(value, { 'user_id' : this.currentUser})
                    Object.assign(value, { 'year' : this.yearData.year})
                    Object.assign(value, { 'category_id' : value.id})
                });
                console.log(this.expenses, 'this.expenses');
            }
        }
    },
}
</script>

<style lang="scss">
.monthly-expenses {
    .left-side {
        min-width: 350px;
        .form-group {
            &:first-child {
                width: 60% !important;
            }
            &:last-child {
                width: 40% !important;
            }
        }
    }
}
</style>