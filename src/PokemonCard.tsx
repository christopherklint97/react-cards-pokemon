import { useFlip } from "./hooks";
import "./PokemonCard.css";

export interface PokemonCardProps {
  id?: number;
  front?: string;
  back?: string;
  name?: string;
  stats?: Stats[];
}

interface Stats {
  name?: string;
  value?: string;
}

/* Renders a single pokemon card. */
function PokemonCard({ front, back, name, stats }: PokemonCardProps) {
  const [isFacingUp, flip] = useFlip();
  return (
    <div onClick={flip} className="PokemonCard Card">
      {isFacingUp && stats ? (
        <div className="PokemonCard-front">
          <img src={front} alt={`{name} front`} />
          <div>
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map((stat) => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="PokemonCard-back">
          <img src={back} alt={`{name} back`} />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
