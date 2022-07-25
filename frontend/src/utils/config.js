const environment = {
  development: {
   backendUrl: "http://localhost:7000/v1",
  },
  production: {
   backendUrl: "https://api-vince.onrender.com",
  }
}

export default environment[process.env.NODE_ENV]

