const peopleController = {};
const apiConfig = require("../../config/api.config");
const peopleService = require('../services/peopleService');
const Person = require("../models/Person");

/**
 * Método para importar pessoas da API.
 *
 * @param {Object} req - O objeto de solicitação express.
 * @param {Object} res - O objeto de resposta express.
 */
peopleController.import = async (req, res) => {
  try {
    await peopleService.importPeople(apiConfig.url);
    res.json({ success: true });
  } catch (error) {
    console.error("Erro na importação de pessoas:", error);
    res
      .status(500)
      .json({ success: false, error: "Erro na importação" });
  }
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
    res.status(500).json({ error: "Erro ao buscar." });
  }
};

module.exports = peopleController;
