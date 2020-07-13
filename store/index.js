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
  },
  SOCKET_newMessage(state, message) {
    state.messages.push(message)
  }
}

