<template>
  <div>
    <div class="layout layout-home">
    <header class="header">
    <app-layout-links></app-layout-links>
    </header>
    <!-- <div class="loader">
        <div class="loader__image">
          <div class="loader__coin">
            <img src="images/loader_coin.png" alt="">
          </div>
          <div class="loader__hand">
            <img src="https://www.dropbox.com/s/y8uqvjn811z6npu/loader-hand.png?raw=1" alt="">
          </div>
        </div>
      </div> -->
    <slot />
    <layout-footer></layout-footer>
    </div>
  </div>
</template>

<script>
import AppLayoutLinks from './AppLayoutLinks.vue'
import LayoutFooter from "../common/components/fixed/LayoutFooter.vue"
export default {
  name: "AppLayoutHome",
  components: {
    AppLayoutLinks,
    LayoutFooter
  }
}
</script>

<style lang="scss" scoped>
@keyframes flip {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(-180deg);
  }
}
.loader {
  width: 65px;
  margin: auto;

  .loader__image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .loader__coin {
    animation: flip .5s ease-in-out infinite alternate-reverse both;
  }
  // boja za formu i onu sliku sa pozadinom #4666FF
}
.header {
  //background: inherit;
  box-shadow: 0 0 7px rgb(0 0 0 / 10%);
  background-color: #6a82ff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
}
</style>