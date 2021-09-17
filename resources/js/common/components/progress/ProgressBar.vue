<template>
    <div class="container" :class="{classA: scrollPosition < 100, classB: scrollPosition > 100}">
        <ul class="progressbar">
            <li class="active" href="#register">
                <span>Create Account</span>
            </li>
            <li class="active" href="#login">
                <span>Sign In</span>
            </li>
            <li class="active" href="#yearly_income">
                <span>Enter Yearly Income</span>
            </li>
            <li class="active" href="#monthly_expenses">
                <span>Determine Your Monthly Expenses</span>
            </li>
            <li class="active" href="#summary">
                <span>Review Summary</span>
            </li>
        </ul>
        <div class="progressbar-content p-t-10">
            <section id="register" class="d-flex">
                <img src="images/account_register.png" alt="Girl in a jacket"/>
            </section>
            <section id="login" class="d-flex">
                <img src="images/account_login.png" alt="Girl in a jacket"/>
            </section>
            <section id="yearly_income" class="d-flex">
                <img src="images/budget_yearly.png" alt="Girl in a jacket"/>
            </section>
            <section id="monthly_expenses" class="d-flex">
                <img src="images/budget_monthly.png" alt="Girl in a jacket"/>
            </section>
            <section id="summary" class="d-flex">
                <img src="images/business-report.png" alt="Girl in a jacket"/>
            </section>
        </div>
        <div class="progressbar-text">
            <section class="d-flex">
                <p class="main-text">Dorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section class="d-flex">
                <p class="main-text">Eorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section class="d-flex">
                <p class="main-text">Borem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section class="d-flex">
                <p class="main-text">Iorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section class="d-flex">
                <p class="main-text">Corem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <span class="main-text">o</span>.
                </p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProgressBar",
    data() {
        return {
            scrollPosition: null
        }
    },
    methods: {
        updateScroll() {
            // let currentPosition = window.scrollY;
            // console.log(currentPosition, 'currentPosition')
            this.scrollPosition = window.scrollY
            // console.log(this.scrollPosition, 'scrollPosition')
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    destroy() {
        window.removeEventListener('scroll', this.updateScroll)
    }
}
</script>
<style lang="scss">
.container {
    display: flex;
    width: 100%;
    margin: 0 auto; 
    .progressbar {
        padding-left: 20px;
        counter-reset: step;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 5%;
    }
    .progressbar-content {
        width: 35%;
        padding-top: 15px;
        section {
            padding: 25px;
            height: 300px;
            img {
                height: 170px;
                width: 170px;
                margin: 30px auto;
            }
        }
    }

    .progressbar-text {
        width: 55%;
        section {
            padding: 25px;
            margin-bottom: 25px;
            height: 300px;
            background-color: #ffffff;
            border-radius: 7px;
            overflow: hidden;
            border-style: none;
            border-left-width: 4px;
            border-left-color: #007AB5;
            margin-right: 0px!important;
            margin-left: 0px!important;
            box-shadow: 0px 2px 18px 0px rgb(0 0 0 / 30%);
            .main-text {
                color: #474747;
            }
        }
    }
    .progressbar li {
        list-style-type: none;
        width: 32px;
        height: 300px;
        float: left;
        font-size: 12px;
        position: relative;
        text-align: left;
        color: #7d7d7d;
        span {
            position: absolute;
            left: 45px;
            width: 300px;
            bottom: 275px;
            font-size: 18px;
            font-weight: bold;
        }
    }
    .progressbar li:before {
        width: 30px;
        height: 30px;
        content: counter(step);
        counter-increment: step;
        line-height: 30px;
        border: 2px solid #7d7d7d;
        display: block;
        text-align: center;
        margin: 0 auto 10px auto;
        border-radius: 50%;
        background-color: white;
        position: relative;
        z-index: 2;
    }
    .progressbar li:after {
        width: 2px;
        height: 100%;
        content: "";
        position: absolute;
        background-color: #7d7d7d;
        // top: -126px;
        bottom: 300px;
        left: 50%;
        z-index: 1;
    }
    .progressbar li:first-child:after {
        content: none;
    }
    .progressbar li.active {
        color: #FFBD49;
    }
    .progressbar li.active:before {
        border-color: #FFBD49;
    }
    .progressbar li.active + li:after {
        background-color: #FFBD49;
    }
}
</style>