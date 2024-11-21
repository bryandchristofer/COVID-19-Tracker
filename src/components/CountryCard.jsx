const CountryCard = ({ country }) => {
    return (
      <div className="border rounded-md shadow-md p-4">
        <h2 className="text-lg font-bold">{country.country}</h2>
        <p>Cases: {country.cases}</p>
        <p>Deaths: {country.deaths}</p>
        <p>Recovered: {country.recovered}</p>
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white p-2 rounded-md">
            See Details
          </button>
          <button className="bg-orange-500 text-white p-2 rounded-md">
            Add to Notes
          </button>
        </div>
      </div>
    );
  };
  
  export default CountryCard;
  