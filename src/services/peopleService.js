const axios = require('axios');
const Person = require('../models/Person');

/**
 * Importa pessoas de uma API externa 
 * e as salva no banco de dados se ainda não existirem localmente.
 *
 * @param {string} apiUrl - A URL da API de onde as pessoas serão importadas.
 * @throws {Error} Se houver um problema ao acessar a API ou salvar os dados.
 * @returns {Promise<void>} Uma promessa que se resolve quando todas as pessoas foram importadas.
 */
const importPeople = async (apiUrl) => {
  let nextPage = apiUrl;

  while (nextPage !== null) {
    const data = await axios.post(nextPage);
    const people = data.data.results;

    for (const person of people) {
      const count = await Person.countDocuments({ name: person.name });

      if (count === 0) {
        await Person.create({
          name: person.name,
          height: person.height,
          gender: person.gender,
        });
      } else {
        console.log("Pessoa já cadastrada");
      }
    }

    nextPage = data.data.next;
  }
};

module.exports = {
  importPeople,
};
