import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Card from "./components/Card";


function App() {
  const [pokemon, setPokemon] = useState();
  console.log(pokemon);

  const onClickHandler = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}`
      // `https://pokeapi.co/api/v2/pokemon/132`
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      setPokemon(jsonResponse);
    }
  };
  return (
    <div className="App">
      <div id="header">Pokémon</div>
      <p>Click the Pokéball</p>
      <div className="container">
        <div className="pokeball poke" onClick={onClickHandler}>
          <div className="pokeball-btn"></div>
        </div>
      </div>
      <Card pokemonData={pokemon}></Card>
      <div id="footer">©Margarita Poole</div>
    </div>
  );
}

export default App;
