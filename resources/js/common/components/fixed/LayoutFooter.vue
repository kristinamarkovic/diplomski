<template>
  <div>
    <footer>
      <div class="w-30">
        <h4>ABOUT</h4>
        <p class="text-about">
          By using these budget templates, you will get much closer to achieving your financial goals.
          Finally, use the Yearly Budget spreadsheet to get a bird’s eye view of your overall spending.
          I hope sharing my personal system was helpful to you.
        </p>
      </div>
      <div class="w-30 d-flex-column">
        <h4>TALK WITH US</h4>
        <span class="text-about">(+381)(0) 69 999 999</span>
        <span class="text-about p-t-10">sayhi@debico.com</span>
        <span class="text-about p-t-10">support@debico.com</span>
      </div>
      <div class="w-30 d-flex-column">
        <h4>SOCIAL</h4>
      </div>
    </footer>
    <div class="footer-bottom text-center">
        <p class="text-about copyright">
          Copyright <span>&copy;</span> 2021 <span class="text-author">Kristina Markovic.</span> All rights reserved.
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutFooter',
}
</script>
<style lang="scss">
footer {
  display: flex;
  justify-content: space-between;
  padding: 40px;
  color: #605E85;
  background-color: white;
  height: 200px;
  box-sizing: border-box;

  h4 {
    font-size: 18px;
    padding-bottom: 20px;
  }
  .text-about {
    font-size: 16px;
    width: 80%;
  }
}
.footer-bottom {
  height: 40px;
  background-color: #FFBD49;
  color: #fff;
  box-sizing: border-box;
  padding: 15px;

  .copyright {
    font-size: 14px;
    .text-author {
      color: #605E85;
    }
  }
}
</style>