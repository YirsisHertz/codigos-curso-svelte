<script lang="ts">
  export let initialValue: number = 0;

  const handleClick = () => {
    initialValue++;
  };
</script>

<div>
  <h2>Counter: {initialValue}</h2>
  <button class="btn" on:click={handleClick}>+1</button>
</div>

<style>
  h2 {
    color: snow;
  }

  .btn {
    cursor: pointer;
  }
</style>
