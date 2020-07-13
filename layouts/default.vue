<template>
  <v-app app dark>
    <v-navigation-drawer app v-model="drawer">
      <v-card max-width="800">
        <v-toolbar color="dark" dark>
          <v-toolbar-title class="title">New Chat</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list subheader>
          <v-subheader>List people in room</v-subheader>
          <v-list-item v-for="item in users" :key="item.id" @click="">
            <v-list-item-content>
              <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon :color="item.id === 2 ? 'primary' : 'grey'">mdi-message-text</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list subheader>
          <v-subheader>Previous chats</v-subheader>
          <v-list-item v-for="item in items2" :key="item.title" @click="">
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <v-app-bar app color="dark" dark :collapse-on-scroll=true :hide-on-scroll=true>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn icon @click="exit" color="dark" dark>
        <v-icon dark>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Chat room {{user.room}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <div>
        <nuxt/>
      </div>
    </v-main>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    data: () => ({
      drawer: true,
      users: [
        {id: 1, name: 'User1'},
        {id: 2, name: 'User2'}
      ]
    }),
    computed: mapState(['user']),
    methods: {
      ...mapMutations(['clearData']),
      exit() {
        this.$router.push('/?message=leftChat');
        this.clearDate();

      }
    }
  };
</script>

<style>
  .title {
    text-align: center;
    margin: 0 auto;
    width: 100%;
  }
</style>
