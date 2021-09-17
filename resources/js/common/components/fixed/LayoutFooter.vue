<template>
  <div>
    <footer>
      <div class="w-30">
        <h4>About</h4>
        <p class="text-about">
          By using these budget templates, you will get much closer to achieving your financial goals.
          Finally, use the Yearly Budget spreadsheet to get a bird’s eye view of your overall spending.
          I hope sharing my personal system was helpful to you.
        </p>
      </div>
      <div class="w-30 d-flex-column">
        <h4>Talk with us</h4>
        <span class="text-about">(+381)(0) 69 999 999</span>
        <span class="text-about p-t-10">sayhi@debico.com</span>
        <span class="text-about p-t-10">support@debico.com</span>
      </div>
      <div class="w-30 d-flex-column">
        <h4>Social</h4>
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
  padding: 70px;
  color: #605E85;
  background-color: #3f4b5b;
  box-sizing: border-box;

  h4 {
    font-size: 16px;
    padding-bottom: 20px;
    color: #fff;
  }
  .text-about {
    font-size: 16px;
    width: 80%;
    padding-left: 10px;
    color: #fff;
  }
}
.footer-bottom {
  padding-right: 40px;
  padding-left: 40px;
  height: 40px;
  border-top: 1px solid #5a5a5a;
  color: #fff;
  box-sizing: border-box;
  padding: 15px;
  background-color: #2B333E;

  .copyright {
    font-size: 14px;
    .text-author {
      color: #605E85;
    }
  }
}
</style>