<template>
  <div>
  <component :is="layout">
    <slot />
  </component>
  </div>
</template>

<script>
const defaultLayout = 'AppLayoutDefault'
export default {
  name: "AppLayout",
  computed: {
    layout() {
    // In the template part we added dynamic component. As a content of the dynamic component we're 
    // adding computed property called “layout”. This computed property is looking the current route and check 
    // layout there or use default layout we defined in constant as “AppLayoutDefault”. 
    // If the route is found, computed property tried to find the appropriate 
    // layout and load it to the dynamic component.
    const layout = this.$route.meta.layout || defaultLayout
    return () => import(`@/js/layouts/${layout}.vue`)
    }
  },
}
</script>