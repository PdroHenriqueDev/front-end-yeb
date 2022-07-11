<template>
  <div class="">
    <div class="input_container mb-4">
        <v-icon height="24" width="24">fas fa-search</v-icon>
        <input 
            placeholder="Filter by name" 
            class="input" type="text" 
            v-model="filterText" v-on:keyup.enter="search()"
        >
    </div>

    <ul class="reposList_item" v-for="(starred, index) in search()" :key="index">
        <li>
            <a :href="starred.html_url" target="_blank">{{ starred.name }}</a>
            <p>{{ starred.description }}</p>
            <div class="icons_container d-flex flex-row">
                <div class="d-flex flex-row icon">
                    <img 
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgLjI4OGwyLjgzMyA4LjcxOGg5LjE2N2wtNy40MTcgNS4zODkgMi44MzMgOC43MTgtNy40MTYtNS4zODgtNy40MTcgNS4zODggMi44MzMtOC43MTgtNy40MTYtNS4zODloOS4xNjd6Ii8+PC9zdmc+"
                        alt="icon"
                    >
                    <p>{{ starred.stargazers_count }}</p>
                </div>
                <div class="d-flex flex-row icon">
                    <img 
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjEgNGgtMnYyaC0ydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2MnptLTQuMTMgNGMtLjU3NyAyLjMxNy0yLjQ0NSAyLjcyMy00LjgxNyAzLjIyMy0xLjcxLjM2LTMuNjQzLjc3NS01LjA1MyAyLjA4NXYtNy40OTJjMS4xNjItLjQxMyAyLTEuNTExIDItMi44MTYgMC0xLjY1Ny0xLjM0My0zLTMtM3MtMyAxLjM0My0zIDNjMCAxLjMwNS44MzggMi40MDMgMiAyLjgxNnYxMi4zNjdjLTEuMTYyLjQxNC0yIDEuNTEyLTIgMi44MTcgMCAxLjY1NyAxLjM0MyAzIDMgM3MzLTEuMzQzIDMtM2MwLTEuMjk1LS44MjQtMi4zODgtMS45NzMtMi44MDguMjctMy45MjIgMi41Ny00LjQwOCA1LjQzOC01LjAxMiAyLjYxMS0uNTUgNS43MzMtMS4yMyA2LjQzNS01LjE4aC0yLjAzem0tMTIuNjctNWMwLS45OTMuODA4LTEuOCAxLjgtMS44czEuOC44MDcgMS44IDEuOC0uODA4IDEuOC0xLjggMS44LTEuOC0uODA3LTEuOC0xLjh6bTMuNiAxOGMwIC45OTMtLjgwOCAxLjgtMS44IDEuOHMtMS44LS44MDctMS44LTEuOC44MDgtMS44IDEuOC0xLjggMS44LjgwNyAxLjggMS44eiIvPjwvc3ZnPg==" 
                        alt="icon"
                    >
                    <p>{{ starred.forks }}</p>
                </div>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import gitHubService from '../../service/github';
export default {
    props: ['userName'],
    data() {
        return {
            starred: [],
            filterText: ''
        }
    },
    async mounted() {
        this.starred = await gitHubService.getStarred(this.userName);
    },
    methods: {
        search() {
            return this.starred.filter(starred => starred.name.toLowerCase().includes(
                this.filterText.toLowerCase()
            ))
        }
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
    @media (max-width: 1080px) {
        margin-left: 40px;
    }
    .input {
        height: 40px;
        width: 90%;
        font-weight: 700;
        margin-left: 5px;
        border: none;
        outline: none;
    }
}

.reposList_item {
    border-bottom: 1px solid #E1E4E8;
    padding: .5rem 0;
    width: 95%;
    @media (max-width: 1080px) {
        margin-left: 40px;
    }
    li {
        list-style-type: none;
    }
    a {
        font-size: 21px;
        text-decoration: none;
    }
    p {
        font-size: 13px;
        line-height: 18px;
        color: #586069;
    }
    .icons_container {
        .icon {
            margin: auto 40px 0 0;
        }
        img {
            width: 15px;
            height: 15px;
            margin-right: 5px;
        }
    }
    
}
</style>
