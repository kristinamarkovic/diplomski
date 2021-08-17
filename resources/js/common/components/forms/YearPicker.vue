<template>
  <div>
      <label>Current Year</label>
      <datepicker
        type="year"
        v-model="currentYear"
        :format="DatePickerFormat"
        minimum-view="year"
        calendar-button-icon
    >
    </datepicker>
  </div>
</template>

<script>

let moment = require("moment");
import Datepicker from 'vuejs-datepicker';
import {mapGetters, mapMutations, mapActions, mapState} from "vuex";

export default {
    name: 'YearPicker',
    data: () => {
        return {
            DatePickerFormat: 'yyyy',
            year: '',
        }
    },
    created() {
        this.year = moment().format();
    },
    computed: {
        ...mapGetters([
            'getCurrentYear',
            'getInsertedYear',
            'user',
        ]),
        ...mapMutations([
            'setCurrentYear'
        ]),
        currentYear: {
            get() {
                return this.getCurrentYear ? this.getCurrentYear : moment(new Date()).format()
            },
            set(val) {
                console.log(val, 'vals')
                this.$store.commit('setCurrentYear', moment(val).year())
                // let data = {
                //     user: this.user.user.id,
                //     year: moment(val).year()
                // }
                // this.$store.commit('getUserYearIncomeData', data);
                // console.log(this.insertedYear, 'insertedYear');
                // console.log(moment(val).year(), 'what')
                // if(this.currentYear == this.insertedYear) {
                //     console.log(this.insertedYear, 'USLO');
                //     console.log(this.currentYear, 'USLO');
                //     this.$store.commit('setIsCurrentYear', true)
                // }
                // else {
                //     this.$store.commit('setIsCurrentYear', false)
                // }
            }
        },
        insertedYear: {
            get() {
                return this.getInsertedYear
            }
        },
        async getYearIncomeData() {
            let form = {
                user: this.user.user.id,
                year: this.currentYear
            }
            try {
                await this.$store.dispatch('getUserYearIncomeData', form);
            } catch (e) {
                console.log(e);
            }
        },
    },
    components: {
        Datepicker
    },
    methods: {
        // getYearIncomeData() {
        //     let form = {
        //         user: this.user.user.id,
        //         year: this.currentYear
        //     }
        //     try {
        //             this.$store.dispatch('getUserYearIncomeData', form);
        //     } catch (e) {
        //         console.log(e);
        //     }
        // }
    }
}
</script>

<style>

</style>