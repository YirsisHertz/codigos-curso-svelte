<script lang="ts">
  export let weather;
</script>

<div class="animate__animated animate__fadeInUp col-12 col-md-6 mt-3">
  <h1>
    <img
      class="bg-secondary"
      src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      alt={weather.name}
    />
    {weather.main.temp}°C
  </h1>
  <h4>
    City: <span class="fw-bold">{weather.name}, {weather.sys.country}</span>
  </h4>
  <h4>
    Weather: <span class="fw-bold">{weather.weather[0].description}</span>
  </h4>
</div>
<div class="animate__animated animate__fadeInUp col-12 col-md-6">
  <h4>
    Maximium Temperature: <span class="fw-bold text-danger"
      >{weather.main.temp_max}°C</span
    >
  </h4>
  <h4>
    Minimium Temperature: <span class="fw-bold text-primary"
      >{weather.main.temp_min}°C</span
    >
  </h4>
</div>
