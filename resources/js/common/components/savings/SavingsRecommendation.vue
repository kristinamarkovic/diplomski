<template>
  <div>
      <div class="savings-recommendation-form">
        <div class="wrapper">
            <div class="left-side">
                <form class="form m-b-20">
                <div class="form-title">
                    <h2>Savings Recommendation</h2>
                </div>
                <div class="form-group d-flex-column">
                    <label class="form-label">Percent</label>
                    <input v-model="percent" class="form-input" placeholder="Input Percent" />
                </div>
                <div class="form-group">
                    <button type="button" class="form-button" @click="calculate()">Insert</button>
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
export default {
    name: 'SavingsRecommendation',
    data: () => {
        return {
            budget: '',
            year: '',
            user_id: '',
            error_msg: '',
            monthly_savings: '',
            yearly_savings: '',
            percent: '',
        }
    },
    computed: {
        ...mapGetters([
            'user',
            'getCurrentYear',
            'getUserIncome'
        ]),
        yearData: {
            get: function() {
            return this.getCurrentYear
            }
        },
        currentUser: {
            get: function() {
                return this.user.user.id;
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
            let valid = true;

            if(this.incomeData.year == '') {
                valid = false;
            }

            if(isNaN(parseFloat(this.percent))) {
                valid = false;
            }
            return valid;
        },
        insert() {
            let valid = this.validate();
            if(valid) {
                let formData = {
                    'user_id': this.incomeData.id,
                    'monthly': this.monthly_savings,
                    'yearly': this.yearly_savings,
                    'year': this.incomeData.year,
                    'percent': parseFloat(this.percent)
                }
                axios
                .post('/auth/insert_savings_percent', formData)
                .then(({ data }) => {
                    console.log(data, 'data');
                })
                .catch(e => {
                    this.error_msg = e.response.data.message;
                    console.log(this.error_msg);
                })
            }
            else {
              console.log("Neuspesno popuni polja.")
            }
        },
        calculate() {
            this.validate();
            if(this.percent && this.incomeData) {
                this.monthly_savings = (parseFloat(this.incomeData.average_monthly_income) * parseFloat(this.percent)) / 100;
                this.yearly_savings = (parseFloat(this.incomeData.budget) * parseFloat(this.percent)) / 100;
                console.log(this.incomeData, 'incomeSavingsRecommandation')
            }
            if(this.monthly_savings && this.yearly_savings) {
                this.insert();
            }
        }
    }
}
</script>

<style lang="scss">
.savings-recommendation-form {
    .left-side {
        min-width: 300px;
    }
}
</style>