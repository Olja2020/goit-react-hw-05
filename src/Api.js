import axios from "axios";

// axios.defaults.baseURL = "https://65c23f3af7e6ea59682af8d1.mockapi.io";

// export const getPayments = async () => {
//   const response = await axios.get("/payments");
//   return response.data;
// };

// export const getPaymentById = async (paymentId) => {
//   const response = await axios.get(`/payments/${paymentId}`);
//   return response.data;
// };

const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjFmMTdlNjI0OGZhNjNkODEzN2MxZjIzYjAwZTQ1ZSIsInN1YiI6IjY2NGUxODA3NDMxNjhhODYyOTM0YTA4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8xl0O9U7-9Eursvybh2VWOuMQ_IJiplDyDebO8HstaE'
    
  }
};

axios.get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));