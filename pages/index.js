import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Quiz from "@/components/Quizlanding/index"
import Header from "@/components/header";
import { useState, useEffect } from "react";
import { axios } from "axios";
import Chart from "@/components/Chart/chart"


export default function Home() {
  const [data, setData] = useState([]);


  let apiKey = `ab04b7cb9f4949ff934bbc4515e7b078`;
  let type = `mental health`
  let date = `2022-01-01`
  let sortBy = `publishedAt`
  
  const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&apiKey=${apiKey}`;

const GrabNews = async() => {
  const response = await axios.get();
  console.log(response);
}


  return (
    <>
     <Header/>
    <main className={`${styles.main}`}>
      {
        data.map((i, index) => {
          return(
            <div key={index}>
              {i.author}
            </div>
          )
        })
      }
    <div>
      <Quiz/>
    </div>
      <button onClick={() => GrabNews()}>Grab Info</button>
        {
          data && data?.articles?.map((d, index) => {
            return(
              <div key= {index}>
              <div>{d.author}</div>
              <div>{d.author}</div>
              </div>
            )
          })
        }
    </main>
    </>
  );
}
