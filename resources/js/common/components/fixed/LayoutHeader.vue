<template>
  <div>
      <header class="header header-dashboard d-flex">
        <div class="logo w-30">
          <span class="logo-text">Debico</span>
          <span class="logo-image"></span>
        </div>
        <div class="nav nav-dashboard w-30">
            <div class="nav-year-picker d-flex-column">
                <label class="year-picker-label">Annual Budget for Year</label>
                <year-picker></year-picker>
            </div>
            <div class="nav-helper">
                <div class="shaped-image" @click="logoutUser" v-if="isLogged">
                    <img class="user-image position-relative" @mouseover="userImage = logoutImage" :src="userImage"/>
                </div>
                <!-- <div class="dashboard-links d-flex-column position-absolute">
                    <a class="nav-link-dashboard" @click="logoutUser" v-if="isLogged">Logout</a>
                </div> -->
            </div>
        </div>
      </header>
  </div>
</template>

<script>
import YearPicker from '../forms/YearPicker.vue';
import {mapGetters} from "vuex";
export default {
    name: 'LayoutHeader',
    data() {
        return {
            userImage: "images/user_account.png",
            logoutImage: 'images/logout.png'
        }
    },
    computed: {
    ...mapGetters([
        'isLogged'
    ]),
    },
    methods: {
        async logoutUser () {
            await this.$store.dispatch('logout');
            if(this.$router.currentRoute.path !== '/') {
                await this.$router.push('/');
            }
        },
    },
    components: {
        YearPicker
    }
}
</script>

<style lang="scss">
    .header.header-dashboard {
        justify-content: flex-end;
        height: 70px;
        padding: 15px;
        padding-left: 20px;
        //background: #1ab1de; /* Old browsers */
        // background: -moz-linear-gradient(left, #348fd9 0%, #006e96 96%, #006e96 99%);
        // background: -webkit-linear-gradient(left, #348fd9 0%,#006e96 96%,#006e96 99%); 
        // background: linear-gradient(to right, #348fd9 0%,#006e96 96%,#006e96 99%); 
        background-color: #1ab1de;
        .logo {
            width: 100%;
        }
        .nav-year-picker {
            .year-picker-label {
                position: relative;
                top: -5px;
                font-size: 14px !important;
                font-weight: normal;
                color: white;
            }
        }
        .nav-dashboard {
            width: 30% !important;
        }
        .nav-helper {
            height: 60px;
            &:hover {
                .dashboard-links {
                    height: 28px;
                    visibility: visible;
                    .nav-link-dashboard {
                        height: auto;
                    }
                }
            }
            .shaped-image {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #ccd9ec;
                text-align: center;
                padding: 10px;
                &:hover {
                    opacity: 0.9;
                    cursor: pointer;
                }
                .user-image {
                    width: 16px;
                    height: 16px;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>