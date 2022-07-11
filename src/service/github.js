import axios from 'axios';

export default {
    getUser: async (name) => {
        return await axios.get(`https://api.github.com/users/${name}`).then((res) => {
            return res.data;
        });
    },
    getRepos: async (name) => {
        return await axios.get(`https://api.github.com/users/${name}/repos`).then((res) => {
            return res.data;
        });
    },
    getStarred: async (name) => {
        return await axios.get(`https://api.github.com/users/${name}/starred`).then((res) => {
            return res.data;
        });
    } 
}