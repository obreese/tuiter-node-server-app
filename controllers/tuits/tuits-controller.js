import * as tuitsDao from "./tuits-dao.js";
import posts from './tuits.js'
let tuits = posts;

const createTuita8 = (req, res) => {
  const newTuit = req.body;
  newTuit._id = new Date().getTime() + "";
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.dislikes = 0;
  newTuit.disliked = false;
  tuits.push(newTuit);
  res.json(newTuit);
};

const findTuitsa8 = (req, res) => {
  res.json(tuits);
};
const updateTuita8 = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const tuitIndex = tuits.findIndex((t) => {
    return t._id == tuitdIdToUpdate;
  });
  tuits[tuitIndex] = { ...tuits[tuitIndex], ...updates };
  res.sendStatus(200);
};

const deleteTuita8 = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter((t) => t._id != tuitdIdToDelete);
  res.sendStatus(200);
};

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.dislikes = 0;
  newTuit.disliked = false;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
};

const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
};
const updateTuit = async (req, res) => {
  const tuitIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);
  res.sendStatus(status);
};

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.sendStatus(status);
};

export default (app) => {
  app.post("/api/a8/tuits", createTuita8);
  app.get("/api/a8/tuits", findTuitsa8);
  app.put("/api/a8/tuits/:tid", updateTuita8);
  app.delete("/api/a8/tuits/:tid", deleteTuita8);
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
