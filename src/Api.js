import axios from 'axios';

export default axios.create({
    baseURL: 'http://medwing/',
    url: '/markers',
    headers: {'Accept' : 'application/json'},
    transformResponse: [function (data) {
        let rawData = JSON.parse(data);

        return data.data;
    }],
});
