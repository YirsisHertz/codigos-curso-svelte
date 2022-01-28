<script lang="ts" context="module">
  export async function load({ params }) {
    return {
      props: {
        id: params.id,
      },
    };
  }
</script>

<script lang="ts">
  export let id: number;
</script>

<svelte:head>
  <title>SvelteKit - {id}</title>
</svelte:head>

<center>
  <h2>El ID de tu peticion es: {id}</h2>
</center>
