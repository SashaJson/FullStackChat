export const state = () => ({
  user: {},
  message: []
});

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  clearDate(state) {
    state.user = {}
    state.message = []
  }
}

export const actions = {
  SOCKET_newMessage(ctx, data) {
    console.log('Message received', data);
  }
};

