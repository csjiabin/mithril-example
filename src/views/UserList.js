import m from 'mithril'
import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
import User from '../models/User'
export default class UserList {
  constructor () {
    this.data = {
      list: [],
      count: Math.ceil(Math.random() * 10)
    }
  }
  async oninit () {
    NProgress.start()
    await User.loadList()
    NProgress.done()
  }
  getUser (user) {
    console.log(user)
  }
  view (vnode) {
    // console.log(vnode.state.data)
    return m('ul.user-list', User.list.map(user => {
      return m('li.user-list-item', { onclick: this.getUser(user) }, user.firstName + ' ' + user.lastName)
    }))
  }
}
