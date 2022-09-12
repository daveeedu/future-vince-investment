const environment = {
  development: {
   backendUrl: "https://api-vince.onrender.com/v1",
  },
  production: {
   backendUrl: "https://api-vince.onrender.com/v1",
  }
}

export default environment[process.env.NODE_ENV]

