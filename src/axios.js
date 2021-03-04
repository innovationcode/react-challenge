import axios from 'axios';

const instance = axios.create({
      // baseURL : "https://js.stripe.com/v3/"  
      baseURL: "http://localhost:5001/react-challenge-a52f9/us-central1/api",
      // baseURL: "https://us-central1-react-challenge-a52f9.cloudfunctions.net/api"
});

export default instance;