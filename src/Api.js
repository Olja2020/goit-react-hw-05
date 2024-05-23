import axios from "axios";
//import { useEffect } from "react";
//import React from 'react';
import { useEffect, useState } from "react";


const [movieList, setMovieList]= useState([])

axios.defaults.baseURL = "https://65c23f3af7e6ea59682af8d1.mockapi.io";
 
 
 export const getMovie = async () => {
  
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=5b1f17e6248fa63d8137c1f23b00e45e&include_adult=false&language=en-US&page=1';

    const options = {
    headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjFmMTdlNjI0OGZhNjNkODEzN2MxZjIzYjAwZTQ1ZSIsInN1YiI6IjY2NGUxODA3NDMxNjhhODYyOTM0YTA4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8xl0O9U7-9Eursvybh2VWOuMQ_IJiplDyDebO8HstaE'
      
    }
  };
   const response = axios.get(url, options)
   .then (res=res.json())
   .then(json => setMovieList(response.result))
   .catch(err => console.error(err));
   
    
 };
 useEffect(()=> {
  getMovie()
 },[])
 return (
  <div>
movieList.map((item)=>{
<>
`https${Item.poster_path}`
</>
};
  </div>)}