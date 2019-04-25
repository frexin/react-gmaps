import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    url: '/markers',
    headers: {'Accept' : 'application/json'},
    transformResponse: [function (data) {
        let rawData = JSON.parse(data);

        if (Array.isArray(rawData.data)) {
            rawData.data.map((item) => {
                if (item.hasOwnProperty('lat')) {
                    item.lat = parseFloat(item.lat);
                }

                if (item.hasOwnProperty('lng')) {
                    item.lng = parseFloat(item.lng);
                }

                return item;
            })
        }

        return rawData.data;
    }],
});
