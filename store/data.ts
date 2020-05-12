import { MutationTree, ActionTree } from 'vuex'

export const state = () => ({
  data: {} as any,
  news: {} as any
})

export type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
  setData(state, data) {
    state.data = data
  },
  setNews(state, news) {
    state.news = news
  }
}

export const actions: ActionTree<State, State> = {
  async fetchData({ commit }) {
    const dataUrl = process.env.DATA_URL + 'data.json'

    const data = await this.$axios.$get<State['data']>(dataUrl)
    commit('setData', data)

    const newsUrl = process.env.DATA_URL + 'news.json'
    const news = await this.$axios.$get<State['news']>(newsUrl)
    commit('setNews', news)
  }
}
