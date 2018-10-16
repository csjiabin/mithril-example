import m from 'mithril'
import UserList from './views/UserList'
import MyComponent from './mycomponent'
import Login from './views/Login'
// m.mount(document.body, UserList)
m.route(document.body, '/', {
  '/': MyComponent,
  '/user': UserList, // defines `http://localhost/#!/home`
  '/login': Login
})
