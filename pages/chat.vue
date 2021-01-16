<template>
  <div>
    <ul>
      <li v-for="m in computed" :key="m.text">{{m.text}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    middleware: ['chat'],
    computed: mapState(['user', 'message']),
    head() {
      return {
        title: `Room ${this.user.room}`
      }
    }
  }
</script>
