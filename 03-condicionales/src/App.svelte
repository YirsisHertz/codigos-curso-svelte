<script lang="ts">
  import Message from "./components/Message.svelte";

  let show = true;

  const handleToggle = () => {
    show = !show;
    console.log(show);
  };
</script>

<main>
  {#if show}
    <Message />
  {:else if !show}
    <div>
      <h1>Active the alert</h1>
    </div>
  {/if}

  <button on:click={handleToggle}>Hidden/Show</button>
</main>

<style>
  main {
    text-align: center;
  }
</style>
