const axios = require('axios')

module.exports.getTatooineResidents = () => {  
    return axios.get('https://swapi.co/api/planets/1/')
        .then(response => response.data.residents)
}

module.exports.promiseMeAString = (string) => {
    return new Promise((resolve, reject) => {
        if (typeof string === 'string') {
            resolve('You kept the Promise!')
        } else {
            reject('You have failed me!')
        }
    })
}