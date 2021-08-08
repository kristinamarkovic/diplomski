<template>
  <div>
    <h1>Income Form</h1>
    <div class="form">
        <form>
            <div class="form-group">
                <label>Choose Year</label>
                <datepicker
                    type="year"
                    value="2018"
                    minimum-view="year"
                    calendar-button-icon
                >
                </datepicker>
            </div>
            
        </form>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
export default {
    name: 'Income',
    components: {
        Datepicker
    }
}
</script>

<style lang="scss">

</style>

</style>