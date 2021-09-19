<template>
  <div>
    <div class="main-dashboard">
      <div class="widget">
        <income></income>
      </div>

      <div class="widget">
        <monthly-expenses></monthly-expenses>
      </div>

      <div class="widget">
        <savings-recommendation></savings-recommendation>
      </div>
      
    </div>
  </div>
</template>

<script>
import MonthlyExpenses from '../common/components/expenses/MonthlyExpenses.vue';
import Income from '../common/components/income/Income.vue';
import SavingsRecommendation from '../common/components/savings/SavingsRecommendation.vue';
export default {
  name: 'Dashboard',
  components: {
    Income,
    MonthlyExpenses,
    SavingsRecommendation
  }
}
</script>