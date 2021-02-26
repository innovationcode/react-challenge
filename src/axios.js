import axios from 'axios';

const instance = axios.create({
       baseURL : "https://js.stripe.com/v3/"  
});

export default instance;