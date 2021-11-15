<template>
  <div>
    <div class="sidebar-links">
      
    </div>
      <!-- <div class="sidebar">
        <section class="app">
            <aside class="sidebar">
                  <header>
                   <div class="logo">
        <span class="logo-text">Debico</span>
        <span class="logo-image"></span>
      </div>
                </header>
              <nav class="sidebar-nav">
          
                <ul class="sidebar-nav-ul">
                  <li>
                    <a href="#"><span class="image-analytics"></span></a>
                    <ul class="nav-flyout">
                      <li>
                        <a href="#">Analytics</a>
                      </li>
                      <li>
                        <a href="#">Forms</a>
                      </li>
                      <li>
                        <a href="#">Summary</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"><span class="image-forms"></span></a>
                    <ul class="nav-flyout">
                     <li>
                        <a href="#">Analytics</a>
                      </li>
                      <li>
                        <a href="#">Forms</a>
                      </li>
                      <li>
                        <a href="#">Summary</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"><span class="image-summary"></span></a>
                    <ul class="nav-flyout">
                      <li>
                        <a href="#">Analytics</a>
                      </li>
                      <li>
                        <a href="#">Forms</a>
                      </li>
                      <li>
                        <a href="#">Summary</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </aside>
        </section>
      </div> -->
  </div>
</template>

<script>
export default {
    name: 'LayoutSidebar',
}
</script>

<style lang="scss">
// .sidebar {
//   position: absolute;
//   width: 200px;
//   // height: 100%;
//   height: 1000px;
//   top: 0;
//   overflow:hidden;
//   background-color: #031116;
//   -webkit-transform: translateZ(0);
//   visibility: visible;
//   -webkit-backface-visibility: hidden;
//   header{
//     background-color: #031116;
//     width: 100%;
//     height: 80px;
//     display:block;
//     padding: 0.75em	1em;

//     .logo {
//       margin-top: 15px;
//     }
//   }
// }
// .sidebar-nav {
//   position: fixed;
//   background-color: #031116;
//   height: 1000px;
//   width: 200px;
//   font-weight: 400; 
//   font-size: 1.2em;
//   overflow: auto;
//   padding-bottom: 6em;
//   z-index: 1;
//   overflow: hidden;
//   -webkit-overflow-scrolling: touch;
//   ul {
//     list-style:none;
//     display: block;
//     padding: 0;
//     margin: 0;
//     &.sidebar-nav-ul {
//       display: flex;
//       flex-direction: column;
//       li {
//         width: 60px;
//         height: 60px;
//         background-color: #031116;
//         a {
//           height: 60px;
//         }
//       }
//     }
    
//     li {
//       margin-left: 0;
//       padding-left: 0;
//       display:inline-block;
//       width: 100%;
      
//       a {
//         color: rgba(129, 35, 35, 0.9);
//         font-size: 0.75em;
//         padding: 1.05em	1em;
//         position: relative;
//         display:block;
//         width: 50px;
        
//         &:hover{
//           background-color: rgba(0,0,0,0.9);
//           transition: all 0.6s ease-in;
//         }
//       } 
//     }
//   }
//   & .nav-flyout {
//     position: absolute;
//     background-color: #031116;
//     z-index: 2;
//     left: 2.5em;
//     top: 0;
//     height: 100vh;
//     // transform: translateX(100%);
//     transition: all 0.5s ease-in-out;
//     width: 155px;

//     li {
//       width: 100% !important;
//       padding: 5px;
//     }

//     a {
//       color: #fff;
//       text-decoration: none;
//     }
    
//     a:hover{
//       background-color: rgba(255,255,255, 0.05)
//     }
//   }
//   & ul.sidebar-nav-ul > li:hover{
//       .nav-flyout{
//       transform: translateX(0);
//       transition: all 0.5s ease-in-out;
//     }
//   }
// }
</style>