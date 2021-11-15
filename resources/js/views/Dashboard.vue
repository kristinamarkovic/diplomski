<template>
  <div>
    <div class="main-dashboard">
      <ul class="nav-tabs" id="nav-tab" role="tablist">
          <li class="nav-item" :class="[ tab.active ? 'active' : '']" v-for="tab in tabs" :key="tab.id">
            <a role="tab" class="nav-link" :class="[ tab.active ? 'active' : '']" data-toggle="tab" href="#yearlySavings ">{{ tab.name }}</a>
          </li>
      </ul>
      <div class="tab-content">
        <div id="yearlySavings" class=" tab-pane active">
          <div class="widget">
            <income></income>
          </div>
        </div>
      </div>
      <div class="tab-content">
        <div id="monthlySavings" class=" tab-pane active">
          <div class="widget">
            <monthly-expenses></monthly-expenses>
          </div>
          <div class="widget">
            <savings-recommendation></savings-recommendation>
          </div>
        </div>
      </div>
<!--       

      <div class="widget">
        <monthly-expenses></monthly-expenses>
      </div>

      <div class="widget">
        <savings-recommendation></savings-recommendation>
      </div> -->
      
    </div>
  </div>
</template>

<script>
import MonthlyExpenses from '../common/components/expenses/MonthlyExpenses.vue';
import Income from '../common/components/income/Income.vue';
import SavingsRecommendation from '../common/components/savings/SavingsRecommendation.vue';
export default {
  name: 'Dashboard',
  data() {
    return {
      tabs: [
        {
          id: 1,
          name: 'Yearly Savings',
          active: true
        },
        {
          id: 2,
          name: 'Monthly Savings',
          active: false
        },
      ]
    }
  },
  components: {
    Income,
    MonthlyExpenses,
    SavingsRecommendation
  }
}
</script>