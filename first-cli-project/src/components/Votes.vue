<template>
  <div>
    <h2>👍🏽Puntuate the games</h2>
    <ul>
      <li :key="game.id" v-for="(game, index) of games">
        <button @click="incrementLikes(index)">
          <span>❤️</span> {{game.name}}
          <span class="badge">{{game.likes}}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Votes',

  computed: {
    ...mapState(['games'])
  },

  methods: {
    ...mapMutations(['incrementLikes'])
  }
}
</script>

<style scoped>
  ul {
    display: flex;
    flex-wrap: wrap;
  }

  ul li {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }

  ul li:last-child {
    margin-right: 0px;
  }

  button {
    padding: 0.25rem 0.5rem;
    border: 1px solid rgb(0, 162, 255);
    font-size: .75rem;
    color:rgb(0, 162, 255);
    position: relative;
  }

  /* This badge shows the current game likes. I know that the design doesn't
     fit with the app, but it's just a place where put the likes and practice
     with the store. */
  button .badge {
    position: absolute;
    top: -.5rem;
    right: -.5rem;
    background-color: rgb(0, 162, 255);
    color: #FFFFFF;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .5rem;
    font-weight: 700;
  }

  button:hover {
    background-color: rgba(0, 162, 255, .1);
  }

  button span {
    /* margin-right: 0.25rem; */
  }
</style>
