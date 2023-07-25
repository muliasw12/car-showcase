

export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'b0de6dbd46msh912b27cb830b786p17c420jsnc4f6dc9e5cbb',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  };
  
  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3',
    {
      headers: headers,
    }
  );
  
  const result = await response.json();
  
  return result;
}


