window.addEventListener("load", () => {
  let longitude;
  let latitude;
  const countryRegion = document.querySelector(".country-region");
  const degree = document.querySelector(".degree");
  const description = document.querySelector(".description");
  const times = document.querySelector(".localtime");
  const weatherIcon = document.querySelector(".icon");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Mendapatkan koordinat si pengguna
      longitude = position.coords.longitude;
      latitude = position.coords.latitude;

      const api = `http://api.weatherapi.com/v1/current.json?key=111f232ff5624823bf4124932221503&q=${latitude},${longitude}`;

      // Fetch API WeatherAPI
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const current = data.current;
          const location = data.location;

          // Current
          const { temp_c, temp_f } = current;
          const { text, icon } = current.condition;
          // Location
          const { country, localtime, region } = location;

          countryRegion.innerHTML = `${country}, ${region}`;
          degree.innerHTML = `${temp_c}`;
          description.innerHTML = `${text}`;
          times.innerHTML = localtime;
          weatherIcon.src = icon;
        });
    });
  }
});
