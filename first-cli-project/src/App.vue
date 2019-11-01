<template>
  <div id="app" class="app">
    <Header/>
    <List/>
    <Votes/>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Votes from './components/Votes'

export default {
  name: 'app',
  components: {
    Header,
    List,
    Votes
  }
}
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background-color: #E2E2E2;
  }

  .app {
    max-width: 300px;
    margin: 2rem auto;
    background-color: #FFFFFF;
    padding: 1.5rem 1.5rem 1rem 1.5rem; /** 1rem because the vote list buttons' margin botton */
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .25);
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    color: #121212;
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
  }

  button {
    appearance: none;
    border: none;
    cursor: pointer;
    border-radius: 3px;
  }

  button:focus {
    outline: none;
  }
</style>
