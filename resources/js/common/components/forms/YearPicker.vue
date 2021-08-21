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
        ]),
        currentYear: {
            get() {
                //ovde sam dodala ovo moment(new Date(this.getCurrentYear)).year() umesto this.getCurrentYear
                //i sad mi radi lepo datum u DatePicker samo mi ne update-uje ovu poruku na confirmationmessage..tu je bug sad
                //SAMO PORUKU CITAV OSTALI FLOW RADI, IMA NEGDE NEKI BUGIC
                return this.getCurrentYear ? moment(new Date(this.getCurrentYear)).year() : moment(new Date()).format()
            },
            set(val) {
                console.log(val, 'vals')
                this.$store.commit('setCurrentYear', moment(val).year())
                this.$store.commit('setUserDataIncome', moment(val).year());
                console.log(this.getInsertedYear, 'insertedYear');
                if(this.currentYear == this.getInsertedYear) {
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

<style>

</style>