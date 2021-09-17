<template>
  <div>
    <div class="main-dashboard">
      <income></income>
    </div>
  </div>
</template>

<script>
import Income from '../common/components/income/Income.vue';
export default {
  name: 'Dashboard',
  components: {
    Income,
  }
}
</script>