<script lang="ts">
  import { onMount } from "svelte";
  import { link, replace } from "svelte-spa-router";
  import GoogleAuthButton from "../components/GoogleAuthButton.svelte";
  import { firebase, googleAuthProvider } from "../firebase/config";
  import { user } from "../stores/authStore";

  let email: string = "";
  let pass: string = "";

  onMount(() => {
    firebase.auth().onAuthStateChanged((userLog) => {
      if (userLog) {
        replace("/");
      }
    });
  });

  const handleEmailLogin = async () => {
    if (pass.length < 6) {
      return;
    }

    const data = await firebase.auth().signInWithEmailAndPassword(email, pass);
    await user.set(data.user);

    replace("/");
  };

  const handleGoogleLogin = async () => {
    await firebase.auth().signInWithRedirect(googleAuthProvider);
  };
</script>

<div class="container">
  <form on:submit|preventDefault={handleEmailLogin} class="mt-3">
    <h1>Login</h1>
    <hr />
    <div class="mb-3">
      <label class="form-label w-100">
        Email Address: <input
          bind:value={email}
          type="email"
          class="form-control"
          placeholder="example@mail.com"
        />
      </label>
    </div>
    <div class="mb-3">
      <label class="form-label w-100">
        Password: <input
          bind:value={pass}
          type="password"
          class="form-control"
          placeholder="Insert a secure password"
        />
      </label>
    </div>

    <button type="submit" class="btn btn-primary w-100">Login</button>
    <GoogleAuthButton handleLogin={handleGoogleLogin} />

    <div class="text-center mt-3">
      <a use:link class="text-dark fs-5" href="/register">Create Account</a>
    </div>
  </form>
</div>
