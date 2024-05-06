/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from 'firebase-functions';
import * as express from 'express';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();

app.put('/tasaOperacion', (req, res) => {
  res.status(200).send('Respuesta de la API REST para tasaOperacion (PUT)');
});
app.use((req, res) => {
  res.status(404).send('Not Found');
});

export const api = functions.https.onRequest(app);