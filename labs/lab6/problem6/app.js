fetch("https://restcountries.com/v3.1/name/thailand")
  .then((response) => response.json())
  .then((data) => {
    const countryName = data[0].name.common;
    console.log(countryName); 
  });