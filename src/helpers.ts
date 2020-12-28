import { v4 as uuid } from "uuid";

/* Select a random element from values array. */
function choice(values: string[]) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

interface DeckOfCardsAPI {
  success: boolean;
  cards: Cards[];
  deck_id: string;
  remaining: number;
}

export interface Cards {
  image: string;
  value: string;
  suit: string;
  code: string;
}

/* Format response data from the Deck of Cards API,
 * extracting just the image url. */
function formatCard(data: DeckOfCardsAPI) {
  return {
    image: data.cards[0].image,
    id: uuid(),
  };
}

export interface PokemonAPI {
  sprites: Sprites;
  name: string;
  stats: StatsAPI[];
}

interface Sprites {
  front_default: string;
  back_default: string;
}

interface StatsAPI {
  base_stat: number;
  stat: { name: string };
}

/* Format response data from the Pokemon API,
 * extracting the front image, back image,
 * and array of relevant stat information. */
function formatPokemon(data: PokemonAPI) {
  return {
    id: uuid(),
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    name: data.name,
    stats: data.stats.map((stat) => ({
      value: stat.base_stat,
      name: stat.stat.name,
    })),
  };
}

export { choice, formatCard, formatPokemon };
