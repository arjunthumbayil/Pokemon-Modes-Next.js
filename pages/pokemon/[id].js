/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Details.module.css";
import { useRouter } from "next/router";

export default function Details() {
  const {
    query: { id },
  } = useRouter();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function getPokemonDetails() {
      const response = await fetch(
        `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`
      );
      const data = await response.json();
      //   console.log("data = " + data);
      setPokemon(data);
    }
    if (id) {
      getPokemonDetails();
    }
  }, [id]);

  if (!pokemon) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>Pokemon List</title>
      </Head>
    </div>
  );
}
