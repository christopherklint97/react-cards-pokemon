import { useFlip } from "./hooks";
import backOfCard from "./back.png";
import "./PlayingCard.css";

export interface PlayingCardProps {
  front?: string;
  back?: string;
}

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }: PlayingCardProps) {
  const [isFacingUp, flip] = useFlip();
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
