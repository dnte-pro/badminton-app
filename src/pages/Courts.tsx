import CourtCard from "../components/Courtcard.tsx";

const Courts = () => {
  const courts = [
    { name: "Nairobi Sports Club", location: "Nairobi", price: 1000 },
    { name: "Westlands Court", location: "Westlands", price: 800 },
    { name: "Karen Badminton Hall", location: "Karen", price: 1200 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Courts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courts.map((court, index) => (
          <CourtCard key={index} {...court} />
        ))}
      </div>
    </div>
  );
};
export default Courts;
