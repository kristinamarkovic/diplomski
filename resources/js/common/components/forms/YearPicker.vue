<template>
  <div>
      <div class="year-picker">
        <datepicker
            type="year"
            v-model="currentYear"
            :format="DatePickerFormat"
            minimum-view="year"
            calendar-button-icon
            inputClass="input-datepicker" 
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
        }
    },
    methods: {
        formatDate(date) {
            return moment(new Date(date)).year()
        },
        formatYear(year) {
            let formated = year.toString();
            return formated.concat('-01-01');
        }
    },
    computed: {
        ...mapGetters([
            'getCurrentYear',
            'getInsertedYear',
        ]),
        currentYear: {
            get() {
                return this.getCurrentYear ? this.formatYear(this.getCurrentYear) : moment(new Date()).format()
            },
            set(val) {
                this.$store.commit('setCurrentYear', this.formatDate(val))
                this.$store.commit('setUserDataIncome', this.formatDate(val));
                if(this.formatDate(val) == this.getInsertedYear) {
                    this.$store.commit('setIsCurrentYear', true)
                }
                else {
                    this.$store.commit('setIsCurrentYear', false)
                }
            }
        },
        insertedYear: {
            get() {
                return this.getInsertedYear
            }
        }
    },
    components: {
        Datepicker
    },
}
</script>

<style lang="scss">
</style>