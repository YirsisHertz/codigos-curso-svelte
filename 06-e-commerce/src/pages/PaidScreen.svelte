<script lang="ts">
  import { replace } from "svelte-spa-router";

  import { v4 as uuid } from "uuid";
  import { cart } from "../stores/productStore";

  const id = uuid();

  cart.set([]);
</script>

<div class="text-center">
  <h2>Pedido #{id} - Pedido exitoso</h2>
  <button class="btn btn-dark" on:click={() => replace("/products")}
    >Seguir comprando</button
  >
</div>
