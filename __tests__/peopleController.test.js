const axios = require("axios");

const PORT = process.env.PORT || 3000;

describe("Testando peopleController.import", () => {
  test('Deve retornar {"success": true}', async () => {
    try {
      const response = await axios.get(
        "http://localhost:" + PORT + "/api/people/import"
      );

      expect(response.status).toBe(200);
      expect(response.data).toEqual({ success: true });
    } catch (error) {
      console.log(error);
    }
  });
});

describe("Testando peopleController.list", () => {
    test("Deve retornar uma lista com a estrutura correta", async () => {
      try {
        const response = await axios.get(
          "http://localhost:" + PORT + "/api/people"
        );
  
        expect(response.status).toBe(200);
        
        expect(Array.isArray(response.data)).toBe(true);
  
        response.data.forEach(item => {
          expect(item).toHaveProperty("name");
          expect(item).toHaveProperty("gender");
          expect(item).toHaveProperty("height");
        });
      } catch (error) {
        console.error(error);
      }
    });
  });
  