const axios = require('axios');
const Person = require('../models/Person');

const importPeople = async (apiUrl) => {
  let nextPage = apiUrl;

  while (nextPage !== null) {
    const data = await axios.get(nextPage);
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
