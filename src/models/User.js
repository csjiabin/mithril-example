import { request } from 'mithril'
export default {
  list: [],
  async loadList () {
    // TODO: make XHR call
    try {
      const result = await request({
        method: 'GET',
        url: 'https://rem-rest-api.herokuapp.com/api/users',
        withCredentials: true
      })
      this.list = result.data || []
    } catch (error) {
      throw error
    }
  }
}

