const peopleController = {};
const axios = require('axios');
const mongoose = require('mongoose');
const Person = require('../models/Person');

const MONGO_URL = "mongodb://root:root@mongodb:27017/starDb";
const API_URL = "https://swapi.dev/api/people";

console.log(MONGO_URL);

mongoose.connect(
  MONGO_URL, 
  { useNewUrlParser: true, useUnifiedTopology: true }
);

peopleController.list = (req, res) => {
 
};

/**
 * Método para importar pessoas da API.
 * Ele percorre todas as páginas da API, obtém os dados de cada pessoa
 * e salva esses dados no banco de dados.
 *
 * @param {Object} req - O objeto de solicitação express.
 * @param {Object} res - O objeto de resposta express.
 */
peopleController.import = async (req, res) => {
  let nextPage = API_URL;

  while (nextPage !== null) {
    const data = await axios.get(nextPage);
    const people = data.data.results;

    people.forEach(person => {
      console.log(person);
      return;

      try {
        const newPerson = new Person({ 
          name: "ub",
          height: 177,
          gender: 'female'
        });
  
        newPerson.save();
      } catch (error) {
        res.json({ success: true });
      }
    });

    console.log(data.data.next);

    nextPage = data.data.next;
  }

  res.json({ success: true });
};

module.exports = peopleController;
