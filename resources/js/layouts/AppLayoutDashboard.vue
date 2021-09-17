<template>
  <div>
    <div class="layout layout-dashobard">
        <layout-header></layout-header>
      <slot />
    </div>
  </div>
</template>
<script>
import LayoutHeader from '../common/components/fixed/LayoutHeader.vue'
export default {
  name: "AppLayoutDashboard",
  components: {
    LayoutHeader
  }
}
</script>

<style>
</style>