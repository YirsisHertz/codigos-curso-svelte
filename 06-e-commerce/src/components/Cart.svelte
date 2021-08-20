<script lang="ts">
  import { link } from "svelte-spa-router";
  import { cart } from "../stores/productStore";
</script>

<h3>
  Cart: {$cart.length} Products.
  {#if $cart.length > 0}
    <a use:link href="/cart">Go to Cart</a>
  {/if}
</h3>
