import axios from "axios";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "753b019dbbmsh40edf69dd826fe1p1e52dbjsn20dcf19aa970",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await axios.get(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
      {
        headers,
        params: { model: "corolla" },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
