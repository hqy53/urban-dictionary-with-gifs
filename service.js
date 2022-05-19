const axios = require("axios");
const URLS = {
  DEFINITION: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
  GIF: 'https://giphy.p.rapidapi.com/v1/gifs/search'
}

const getDefinitionOfTerm = (term) => {
  return axios.get(URLS.DEFINITION, {
    params: {
      term
    },
    headers: {
      'X-RapidAPI-Host': process.env.RapidAPI_Host,
      'X-RapidAPI-Key': process.env.RapidAPI_Key
    }
  })
};

const getGif = (term) => {
  return axios.get(URLS.GIF, {
    params: {
      api_key: 'zpqRFMJyqubJUEKiS4WejVeabbU8MQb8',
      q: term,
      limit: 3
    },
    headers: {
      'X-RapidAPI-Host': 'giphy.p.rapidapi.com',
      'X-RapidAPI-Key': "f0361ce1a6mshece9932520e35c8p186ed6jsncb766261f9ed"
    }
  })
};

module.exports = {
  getGif,
  getDefinitionOfTerm
}
