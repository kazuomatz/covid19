import axios from 'axios'
import Data from '@/data/data.json'

export const state = () => ({
  data: {}
})

export const mutations = {
  getData(state, payload) {
    state.data = payload.data
  }
}

export const actions = {
  async getDataAction(context) {
    const payload = {
      data: Data
    }
    await axios.get(process.env.dataUrl).then(res => {
      payload.data = res.data
    })
    context.commit('getData', payload)
  }
}
