import Pow from "../images/pow.png";

function Card({ pokemonData }) {
  if (pokemonData) {
    const pokemonMoves = [];
    for (let i = 0; i < 3; i++) {
      console.log("pokemonData.moves[i]: ", pokemonData.moves[i]);
      if (pokemonData.moves[i]) {
        pokemonMoves.push(pokemonData.moves[i].move.name);
      }
    }

    return (
      <div id="Card">
        <div>
          <span id="title">Name: </span>
          <span id="characterName"> {pokemonData.name}</span>
        </div>
        <img
          src={pokemonData.sprites.front_default}
          alt="Pokemon Pic"
          width="200"
          height="300"
          style={{ margin: "-25px" }}
        />
        <div>
          <span id="title">Type: </span>
          <span>
            {pokemonData.types.map((obj) => {
              let symbol = "";
              switch (obj.type.name) {
                case "normal":
                  symbol = "🥱";
                  break;
                case "electric":
                  symbol = "⚡";
                  break;
                case "ice":
                  symbol = "🧊";
                  break;
                case "psychic":
                  symbol = "🔮";
                  break;
                case "grass":
                  symbol = "🌱";
                  break;
                case "poison":
                  symbol = "☠";
                  break;
                case "bug":
                  symbol = "🐛";
                  break;
                case "fairy":
                  symbol = "🧚‍♀️";
                  break;
                case "fire":
                  symbol = "🔥";
                  break;
                case "rock":
                  symbol = "⛰";
                  break;
                case "water":
                  symbol = "💧";
                  break;
                case "flying":
                  symbol = "🦅";
                  break;
                case "ghost":
                  symbol = "👻";
                  break;
                case "ground":
                  symbol = "🌎";
                  break;
                case "steel":
                  symbol = "🤘";
                  break;
                case "fighting":
                  symbol = "🥊";
                  break;
                default:
                  break;
              }
              return (
                <div className="typeWrapper">
                  {obj.type.name}
                  <span>{symbol}</span>
                </div>
              );
            })}
          </span>
        </div>
        <div>
          <span id="title">Moves: </span>
          <div id="movesWrapper">
            {pokemonMoves.map((pokemonMove) => {
              const isPunch = pokemonMove.includes("punch");
              console.log(isPunch);
              // condition ? true : false;
              const formattedPokemonMove = isPunch ? (
                <>
                  {pokemonMove}
                  <img src={Pow} />
                </>
              ) : (
                pokemonMove
              );
              return <div className="moveWrapper">{formattedPokemonMove}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default Card;
