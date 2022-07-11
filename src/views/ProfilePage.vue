<template>
  <div>    
      <HeaderComponent :showChangeUser="true"/>

      <div class="content_container">
          <AvatarComponent 
            :image="this.profile.avatar" 
            :name="this.profile.name" 
            :bio="this.profile.bio"
            class="avatar"
        />
        <div class="content">
          <TabComponent :repoQuantity="repoQuantity" :starredQuantity="starredQuantity" class="mb-5"/>
          <keep-alive><router-view :userName="userName"/></keep-alive>
        </div>

      </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import gitHubService from '../service/github';
import AvatarComponent from '../views/components/AvatarComponent.vue';
import TabComponent from '../views/components/TabComponent.vue';

export default {
    components: {
        HeaderComponent,
        AvatarComponent,
        TabComponent
    },
    data() {
        return {
            userName: '',
            data: {},
            profile: {
                avatar: '',
                bio: '',
                name: ''
            },
            repoQuantity: '',
            starredQuantity: '',
        }
    },
    async mounted() {
        this.userName = this.$route.params.searchText;
        this.data = await gitHubService.getUser(this.userName);
        this.profile.avatar = this.data.avatar_url;
        this.profile.bio = this.data.bio;
        this.profile.name = this.data.name;
        this.repoQuantity = (await gitHubService.getRepos(this.userName)).length ?? 0;
        this.starredQuantity = (await gitHubService.getStarred(this.userName)).length ?? 0;
    }
}
</script>

<style lang="scss" scoped>
.content_container {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    @media (max-width: 1080px) {
        flex-direction: column;
    }
    .content {
        @media (max-width: 1080px) {
            margin-top: 20px;
            width: 100%;
        }
    }
}
.avatar {
    width: 30%;
}
.content {
    width: 70%;
}

</style>
