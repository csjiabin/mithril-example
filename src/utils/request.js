import m from "mithril"
export default {
  async get(url,params){
    try {
      const result = m.request({
        method: "GET",
        url,
        withCredentials: true,
      })
      return result
    } catch (error) {
      throw error
    }
  }
}