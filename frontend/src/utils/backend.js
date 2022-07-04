import API from './axios'
import Alert from "./alert"

class BACKEND {
  constructor() {
    this._API = API;
  }

   send({type, to, payload}) {
    return this._API[type](to, payload).then(function (response) {

      if ([200, 201].includes(response.status)) {
        Alert({
          type: 'success',
          message: response.data.message
        })
        return response.data
      } else {
        Alert({
          type: 'error',
          message: response.data.message
        })
        return false
      }
    }).catch(function (e) {
       const err = "error"
      const message = e.message || e[err] || "Something went wrong";

      Alert({
        type: err,
        message
      })
      return false
    })
  }

  login(payload) {
    Alert({
      type: "info",
      message: "Signing in...",
      timer: 5000
    })

    return this.send({
      to: '/auth/login',
      type: "post",
      payload
    })

  }

  isAuthenticated() {
    return this._API.get('/user').then(function (response) {
      if (response?.status === 200) {
        return response.data
      } else {
        return false
      }
    }).catch(function (error) {
      console.log(error)
      return false
    })
  }


  getUser() {

    return this._API.get('/user').then(function (response) {
      if (response.status === 200) {
        return response.data
      } else {
        return false
      }
    }).catch(function (error) {
      return false
    })
  }

}

export default BACKEND;