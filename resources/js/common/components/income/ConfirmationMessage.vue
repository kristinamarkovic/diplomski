<template>
  <div>
      <div class="message-income">
        <form class="form">
        <div class="form-group p-0">
            <p class="message-income-paragraph">You have been already submitted income for this year.</p>
                <button @click="changeYear" type="button" class="form-button">Change year</button>
            <div v-show="showForm" class="m-t-40">
                <label class="form-label">Year</label>
                <year-picker></year-picker>
            </div>
        </div>
        </form>
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