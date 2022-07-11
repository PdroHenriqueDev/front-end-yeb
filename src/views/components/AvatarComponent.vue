<template>
  <div class="avatar_container">
    <img :src="image" alt="avatar image">
    <div class="mt-3">
        <h1 class="mb-1">{{ name }}</h1>
        <h2>{{ bio }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'name', 'bio']
}
</script>

<style lang="scss" scoped>
.avatar_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    @media (min-width: 1080px) {
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }
    img {
        border-radius: 50%;
        margin-right: 10px;
        height: 50px;
        width: 50px;
        @media (min-width: 768px) {
            height: 70px;
            width: 70px;
        }
        @media (min-width: 1080px) {
            height: 210px;
            width: 210px;
        }
    }
    h1 {
        font-weight: 700;
        font-size: 23px;
        color: #586069;
    }
    h2 {
        font-size: 14px;
        color: #586069;
    }
}
</style>
