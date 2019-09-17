import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Zb9lwE7pBMJfWW_vGEjLVkOmILaKD9r5rN7AviUVQrOBmqo1iumon9R3TQLZNgB5eMSaBhR_S6-h-M6U4oujupS0ej23C8jYD2NGQtRShj5UtCulz_lif_5zV258XXYx'
    }
});