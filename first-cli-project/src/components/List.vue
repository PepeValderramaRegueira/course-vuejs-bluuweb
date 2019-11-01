<template>
  <section>
    <ul class="list">
      <li :key="game.id" v-for="(game, index) of sortedGamesList">
        <span>{{index + 1}} - {{game.name}}</span>
        <span>{{game.likes}}</span>
      </li>
    </ul>
    <div class="list-actions">
      <button @click="resetLikes">Reset likes</button>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'List',
  
  computed: {
    ...mapState(['games']),
    sortedGamesList({games}) { // Get only the games from the state
      // Copy the games array so the vote buttons list doesn't be affected
      const gamesCopy = [...games]
      return gamesCopy.sort((a, b) => b.likes - a.likes)
    }
  },

  methods: {
    ...mapMutations(['resetLikes'])
  }
}
</script>

<style scoped>
  section {
    margin-bottom: 1.5rem;
  }

  .list {
    margin-bottom: 1rem;
  }

  .list li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #DDDDDD;
    padding: .25rem;
    color: #888888;
  }

  .list li span:last-child {
    background-color: rgb(0, 162, 255);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    color: #FFFFFF;
    font-size: .75rem;
    font-weight: 700;
  }

  .list-actions {
    text-align: right;
  }

  button {
    font-size: .75rem;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0.5rem 1rem;
    background-color:rgb(255, 72, 72);
    color: #FFFFFF;
  }

  button:hover {
    background-color:rgb(212, 58, 58);
  }
</style>
