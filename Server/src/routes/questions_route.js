const express = require("express");
const QuestionsRoute = express.Router();
const quizController = require("../controllers/quiz_controller");
const requireAuth = require("../middleware/requireAuthAdmin");

QuestionsRoute.get("/", quizController.getAllQuizs);
QuestionsRoute.get("/:id", quizController.getQuiz);
QuestionsRoute.post("/create", requireAuth, quizController.createQuiz);
module.exports = QuestionsRoute;
