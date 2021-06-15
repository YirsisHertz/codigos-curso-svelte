<script lang="ts">
  import ErrorAlert from "./ErrorAlert.svelte";
  import Loading from "./Loading.svelte";
  import WeatherData from "./WeatherData.svelte";

  let city = "";
  const key = "9b77f39953907d337bce47fb5fa72c68";

  const getWeatherData = async (city: string = "mexico city") => {
    if (city.trim() === "") {
      throw new Error(
        "It is necessary to fill the fields with valid information"
      );
    }

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
      );
      const data = await res.json();

      return data;
    } catch (error) {
      throw new Error("This place could not found");
    }
  };

  let promise = getWeatherData();

  const handleSubmit = () => {
    promise = getWeatherData(city);
    city = "";
  };
</script>

<div class="container">
  <div class="row">
    <div class="col-12 mb-3">
      <form on:submit|preventDefault={handleSubmit}>
        <label>
          City: <input bind:value={city} type="text" class="form-control" />
        </label>

        <button type="submit" class="btn btn-info">Search</button>
      </form>
    </div>

    {#await promise}
      <Loading />
    {:then weather}
      <WeatherData {weather} />
    {:catch err}
      <ErrorAlert {err} />
    {/await}
  </div>
</div>
