import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(
        "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
      );
      const data = await response.json();
      console.log("data = " + data);
      setPokemon(data);
    }
    getPokemon();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>
    </div>
  );
}
