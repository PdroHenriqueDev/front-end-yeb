<template>
  <div>
    <v-app-bar
      dense
      color="#5C646D"
      height="60"
      class="app_bar"
    > 
      <div class="logo" @click="goToHome()">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==" 
        alt="logo">
        <p>Github <span>profiles</span></p>
      </div>
      
      <button v-if="this.showChangeUser" class="logoBar_btn" @click="goToHome()">CHANGE USERNAME</button>
    </v-app-bar>
    
  </div>
</template>

<script>
export default {
  props: ['showChangeUser'],
  data() {
    return {
      
    }
  },
  methods: {
    goToHome() {
      this.$router.push({
          name: 'home',
          params: { searchText: '' }
      });
    },
  }
}
</script>

<style lang="scss" scoped>
::v-deep .v-toolbar__content {
  width: 100%;
  display: flex !important;
  justify-content: space-between !important;
}
.logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
img { 
  filter: invert(1);
  margin-right: 10px;
}
  p {
  font-size: 23px;
  font-weight: 700;
  color: #ffff;
  letter-spacing: 1px;
  margin: 0;
  span {
    font-size: 21px;
    font-weight: 400;
  }
}
.logoBar_btn {
  background-color: #5c646d;
  color: #fff;
  border: 1px solid;
  border-radius: 7px;
  letter-spacing: 1px;
  padding: 0.5rem;
  font-size: 7px;
  font-weight: 500;
  text-transform: uppercase;
  transition: .3s;
  &:hover {
    color: #e36209;
    cursor: pointer;
    font-size: 8px;
    transition: .3s;
  }
}
</style>
