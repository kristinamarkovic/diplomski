<template>
    <div>
        <div class="wrapper">
            <div class="left-side w-40">
                <h1 class="title">Manage Savings & Budget</h1>
                <p class="main-text">
                Do you wish you didn’t have to struggle so much with money?  Much of your financial journey is emotional.
                It has more to do with your money mindset than numbers.
                Find out how to change your money mindset to have a more positive relationship with money.
                Start by determining your take-home pay and your monthly expenses. 
                Then determine how much of your money you want to allocate to each spending category. 
                Finally, you can use my templates to track and review your spending. 
                By using these budget templates, you will get much closer to achieving your financial goals.</p>
                <!-- <div class="image-savings-2"></div> -->
            </div>
            <div class="right-side w-60">
                <div class="image-savings-2"></div>
            </div>
        <!-- </div>
        <div class="wrapper">
            <div class="left-side w-50">
            </div>
            <div class="right-side w-50">
                 <span>First Step</span>
                <ul>
                    <li>
                        This list is designed to cover as many personal budget categories as possible. 
                        Don’t get overwhelmed by this list, because not every category will apply to you. Go through the checklist, 
                        and put a check next to each item you spend money on. Then include those categories in your budget.
                        Once you make your list, start writing how much you normally spend in that area. 
                        Unfortunately, you will not be able to account for the areas where you spent cash. 
                        However, it will provide you with a rough outline of your spending.
                        If there are any spending categories that you can’t figure out how much you spent, 
                        just take a guess of what you think you spend. Make sure to include a other category as a catch-all 
                        for any expenses you may have forgotten to list.
                    </li>
                </ul> 
                
            </div>  -->
        </div>
        <div class="wrapper">
            <progress-bar></progress-bar>
        </div>
    </div>
</template>

<script>
import ProgressBar from '../common/components/progress/ProgressBar.vue';
export default {
  name: "Home",
  components: {
    ProgressBar
  }
}
</script>

