import axios from "axios";
import "./Movie.css";

import { useState,useEffect } from "react";
import { Card } from "../components/UI/Card";

export const Movie = () =>{
    const [data,setData] = useState([]);
    const API = "http://www.omdbapi.com/?s=anime&apikey=57d29f21";
    const getMovieData = async() =>{
        try {
        const res= await axios.get(API);
        console.log(res.data.Search);
        setData(res.data.Search);        
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getMovieData();
    },[])

    return <ul>
      {data.map((movie) => (
        <Card key={movie.imdbID} movieData={movie} />
      ))}
    </ul>
}