import Card from "../../../components/card";
import { cards } from "./data";

export default function Overview() {
  return (
    <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {/* Card */}
      {cards.map((card) => (
        <Card {...card} key={card.name} />
      ))}
    </div>
  );
}
