const express = require("express");
const { connection } = require("../conf");
const router = express.Router();

//route pour récuperer tous les modèles
router.get("/:modeles", (req, res) => {
  const modele = req.body;
  connection.query(
    `SELECT id, marque, modele, motorisation, puissance
FROM MODELE_VOITURE`,
    modele,
    (err, results) => {
      if (err) {
        // Si erreur
        res.status(500).send("Error in modèle");
      } else {
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    }
  );
});

router.post("/:id/newcar", (req, res) => {
  const id = req.params.id;
  const newCar = req.body;
  connection.query(
    `INSERT INTO EXEMPLAIRE_VOITURE
      SET ?
    ;`,
    newCar,
    (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.error("Failure! " + err);
        return res.status(500).send("Invalid vehicule registration");
      }

      connection.query(
        `INSERT INTO Exemplaire_voiture_User (id_exemplaire_voiture, id_user) values (${results.insertId},${id})`,
        (err, results2) => {
          if (err) {
            // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
            console.error("Failure! " + err);
            return res.status(500).send("erreur FK");
          }
          results2
            .json(newCar)
            .status(200)
            .send("tu es le boss");
        }
      );
    }
  );
});

module.exports = router;
// const idVéhicule = [];
// results.forEach(vehicule => {
//   vehicule.id;

//   idVéhicule.push({
//     id_exemplaire_voiture: vehicule.id
//   });
// });

// Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
