const peopleController = {};
const axios = require('axios');
const mongoose = require('mongoose');
const Person = require('../models/Person');
const dbConfig = require('../../config/db.config.js');
const apiUrl = "https://swapi.dev/api/people";

mongoose.connect(
  dbConfig.url, 
  { useNewUrlParser: true, useUnifiedTopology: true }
);

/**
 * Método para importar pessoas da API.
 *
 * @param {Object} req - O objeto de solicitação express.
 * @param {Object} res - O objeto de resposta express.
 */
peopleController.import = async (req, res) => {
  let nextPage = apiUrl;

  while (nextPage !== null) {
    const data = await axios.get(nextPage);
    const people = data.data.results;

    people.forEach(person => {
      Person.countDocuments({ name: person.name }).then(count => {
        if (count === 0) {
          const newPerson = new Person({
            name: person.name,
            height: person.height,
            gender: person.gender,
          });
        
          newPerson.save();
        } else {
          console.log("Pessoa já cadastrada");
        }
      });
    });

    nextPage = data.data.next;
  }

  res.json({ success: true });
};

/**
 * Lista todas as pessoas em ordem alfabética.
 *
 * @param {Object} req - O objeto de solicitação HTTP.
 * @param {Object} res - O objeto de resposta HTTP.
 * @returns {Promise} Resolve para uma resposta HTTP.
 * @throws {Error} Se ocorrer um erro ao buscar pessoas.
 */
peopleController.list = async (req, res) => {
  try {
    const people = await Person.find().sort({ name: 1 });

    res.status(200).json(people);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar pessoas.' });
  }
};

module.exports = peopleController;
