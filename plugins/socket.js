import Vue from 'vue';
import io from 'socket.io-client'
import VueSocketIOExt from 'vue-socket.io-extended';

export default ({store}) => {
  Vue.use(VueSocketIOExt, io('http://localhost:3000'), {
      store,
      debug: false,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    });
};
