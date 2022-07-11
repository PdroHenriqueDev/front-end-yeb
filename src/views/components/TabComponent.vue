<template>
  <div class="">
     <v-tabs
        fixed-tabs
        background-color="#ffff"
        color="#586069"
        class="tab w-100"
    >
        <v-tab to="/repos">
          Repos <span class="counter">{{ repoQuantity }}</span>
        </v-tab>
        <v-tab to="/starred">
          Starred <span class="counter">{{ starredQuantity }}</span>
        </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  props: ['repoQuantity', 'starredQuantity'],
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.v-tabs {
  display: flex;
  justify-content: start;
  @media (max-width: 1080px) {
        margin-left: 40px;
  }
  border-bottom: 1px solid #E1E4E8;
}
.v-tab:not(.v-tab--active) {
  font-size: 21px;
  font-weight: 400;
}
.v-tab:hover {
    color: #0000;
}
.v-tab--active {
    font-weight: 900;
    font-size: 21px;
    &:hover {
        color: #0000;
    }
}
.v-tab {
  width: 500px;
}

::v-deep .v-tabs-slider-wrapper {
  border: 3px solid #E36209;
}

.counter {
  background-color: #e3e3e3;
  border: 1px solid transparent;
  font-weight: 900;
  color: #586069;
  border-radius: 40%;
  font-size: 14px;
  margin-left: 3px;
  padding: 2px;
}

</style>
