<template>
  <div>
      <p>You have been already submitted income for this year.</p>
          <button @click="changeYear">Change year</button>
          <div v-if="showForm">
            <year-picker></year-picker>
          </div>
  </div>
</template>

<script>
import YearPicker from '../forms/YearPicker.vue'
export default {
    name: 'ConfirmationMessage',
    data: () => {
        return {
            budget: '',
            showForm: false,
        }
    },
    methods: {
        changeYear() {
            this.showForm = true;
        }
    },
    components: {
        YearPicker
    }
}
</script>

<style>

</style>