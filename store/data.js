import axios from 'axios'

export const state = () => ({
  data: {}
})

export const mutations = {
  setData(state, data) {
    state.data = data
  }
}

export const actions = {
  async fetchData(context) {
    // TODO: URLを環境変数で切り替える
    const fetchUrl =
      'http://stop-covid19-shizuoka-data-staging.s3-website-ap-northeast-1.amazonaws.com/data.json'
    const res = await axios.get(fetchUrl)
    /* eslint-disable camelcase */
    const { contacts, inspections, inspections_summary, lastUpdate } = res.data
    context.commit('setData', {
      contacts,
      inspections,
      inspections_summary,
      lastUpdate
    })
    /* eslint-enable camelcase */
  }
}
