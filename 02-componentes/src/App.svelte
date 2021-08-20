<script lang="ts">
  import Counter from "./components/Counter.svelte";
  import Saludo from "./components/Saludo.svelte";

  let initialValue = 50;
</script>

<Saludo title="Counter App" />
<Counter initialValue={90} />
<Counter {initialValue} />
