<template>
  <div>
    <div class="layout layout-dashobard">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>
      <slot />
    </div>
  </div>
</template>
<script>
import LayoutHeader from '../common/components/fixed/LayoutHeader.vue'
import LayoutSidebar from '../common/components/fixed/LayoutSidebar.vue'
export default {
  name: "AppLayoutDashboard",
  components: {
    LayoutHeader,
    LayoutSidebar
  }
}
</script>

<style>
</style>