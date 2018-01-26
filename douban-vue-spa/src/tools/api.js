import axios from 'axios'

const HOST = process.env.NODE_ENV === 'development' ? 'api' : 'http://localhost:8080'

function fetch (url) {
  return new Promise(function (resolve, reject) {
    axios.get(HOST + url).then(response => {
      resolve(response.data)
    })
  })
}
