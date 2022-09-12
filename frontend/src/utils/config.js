const environment = {
  development: {
   backendUrl: "https://03e0-102-67-21-240.ngrok.io/v1",
  },
  production: {
   backendUrl: "https://03e0-102-67-21-240.ngrok.io/v1",
  }
}

export default environment[process.env.NODE_ENV]

