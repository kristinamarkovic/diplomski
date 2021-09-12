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
        <div class="progressbar-content">
            <section id="register">
                <h3>City Config</h3>
                <p>…</p>
            </section>
            <section id="login">
                <h3>City Config</h3>
                <p>…</p>
            </section>
            <section id="yearly_income">
                <h3>City Config</h3>
                <p>…</p>
            </section>
            <section id="monthly_expenses">
                <h3>City Config</h3>
                <p>…</p>
            </section>
            <section id="summary">
                <h3>City Config</h3>
                <p>…</p>
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
    margin: 50px auto; 
    .progressbar {
        padding-left: 15px;
        counter-reset: step;
        display: flex;
        flex-direction: column;
        height: 800px;
        width: 40%;
    }
    .progressbar-content {
        width: 60%;
        padding-top: 15px;
        section {
            //padding-top: 10px;
            height: 160px;
        }
    }
    .progressbar li {
        list-style-type: none;
        width: 32px;
        height: 20%;
        float: left;
        font-size: 12px;
        position: relative;
        text-align: left;
        color: #7d7d7d;
        span {
            position: absolute;
            left: 45px;
            width: 300px;
            bottom: 130px;
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
        //   width: 100%;
        //   height: 2px;
        width: 2px;
        height: 100%;
        content: "";
        position: absolute;
        background-color: #7d7d7d;
        top: -126px;
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