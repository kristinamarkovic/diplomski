<template>
  <div>
      <div class="year-picker">
        <datepicker
            type="year"
            v-model="year"
            :format="DatePickerFormat"
            minimum-view="year"
            calendar-button-icon
            inputClass="input-datepicker" 
            @selected="selectDate"
        >
        </datepicker>
    </div>
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
        if(this.getCurrentYear) {
            this.year = this.formatYear(this.getCurrentYear)
        }
        else {
            this.year = moment(new Date()).format();
        }
    },
    mounted() {
        if(this.getCurrentYear) {
            this.year = this.formatYear(this.getCurrentYear)
        }
        else {
            this.year = moment(new Date()).format();
        }
    },
    watch: {
        currentYear: function(val) {
            this.year = this.formatYear(this.getCurrentYear)
        }
    },
    methods: {
        formatDate(date) {
            return moment(new Date(date)).year()
        },
        formatYear(year) {
            let formated = year.toString();
            return formated.concat('-01-01');
        },
        selectDate(date) {
            this.year = this.formatDate(date);
            this.$store.commit('setCurrentYear', this.year);
            let payload = {
                year: this.year,
                user_id: this.user.user.id
            }
            this.$store.dispatch('getUserIncomeData', payload);
        }
    },
    computed: {
        ...mapGetters([
            'getCurrentYear',
            'getInsertedYear',
            'user',
        ]),
        currentYear: {
            get() {
                return this.getCurrentYear ? this.formatYear(this.getCurrentYear) : moment(new Date()).format()
            },
        },
    },
    components: {
        Datepicker
    },
}
</script>

<style lang="scss">
</style>