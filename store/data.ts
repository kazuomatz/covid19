import { MutationTree, ActionTree } from 'vuex'

export const state = () => ({
  data: {} as any // TODO: dataの型定義ファイルを作る
})

export type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
  setData(state, data) {
    state.data = data
  }
}

export const actions: ActionTree<State, State> = {
  async fetchData({ commit }) {
    const dataUrl =
      'http://stop-covid19-shizuoka-data-staging.s3-website-ap-northeast-1.amazonaws.com/data.json'
    const data = await this.$axios.$get<State['data']>(dataUrl)

    commit('setData', data)
  }
}
