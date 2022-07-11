<template>
  <div>    
      <HeaderComponent/>

      <div class="w-100 mt-4 d-flex justify-content-center">
            <div class="input_container">
                <v-icon height="24" width="24">fas fa-search</v-icon>
                <input 
                    placeholder="Insert a username" 
                    class="input" type="text" 
                    v-model="searchText" v-on:keyup.enter="submit()"
                >
            </div>
      </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
    components: {
        HeaderComponent,
    },
    data() {
        return {
            searchText: '',
        }
    },
    methods: {
        submit() {
            this.$router.push({
                name: 'profile',
                params: { searchText: this.searchText }
            });
        },
    }
}
</script>

<style lang="scss" scoped>
.input_container {
    border: 2px solid #E3E3E3;
    border-radius: 5px;
    max-width: 350px;
    padding: 0 16px;
    display: flex;
    flex: 1;
    .input {
        height: 40px;
        width: 90%;
        font-weight: 700;
        margin-left: 5px;
        border: none;
        outline: none;
    }
}
</style>
