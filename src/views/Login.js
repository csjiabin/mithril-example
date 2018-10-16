import m from 'mithril'

let Login = {
  username: '',
  password: '',
  setUsername (value) {
    this.username = value
  },
  canSubmit () {
    return this.username !== '' && this.password !== ''
  },
  login () {
    console.log('login')
  },
  view (vnode) {
    return m('.login', [
      m('input[type=text]', { oninput: m.withAttr('value', this.setUsername), value: this.username }),
      m('input[type=password]', { oninput: m.withAttr('value', this.setPassword), value: this.password }),
      m('button', { disabled: !this.canSubmit(), onclick: this.login }, 'Login')
    ])
  }
}
export default Login
