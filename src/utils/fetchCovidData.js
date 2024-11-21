const fetchCovidData = async () => {
  try {
    const response = await fetch("https://disease.sh/v3/covid-19/countries");
    if (!response.ok) throw new Error("Failed to fetch COVID-19 data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default fetchCovidData;
