export const actions = {
  async nuxtClientInit({ dispatch }) {
    // code
    await dispatch('data/getDataAction')
  }
}
