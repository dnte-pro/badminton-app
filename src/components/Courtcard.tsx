interface CourtProps {
  name: string;
  location: string;
  price: number;
}

const CourtCard: React.FC<CourtProps> = ({ name, location, price }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border hover:shadow-lg">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{location}</p>
      <p className="text-green-600 font-semibold">Ksh {price} / hour</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Book Now
      </button>
    </div>
  );
};
export default CourtCard;
