const express = require("express");
const QuestionsRoute = express.Router();
const quizController = require("../controllers/quiz_controller");

QuestionsRoute.get("/", quizController.getAllQuizs);
QuestionsRoute.get("/:id", quizController.getQuiz)
QuestionsRoute.post("/create", quizController.createQuiz);
module.exports = QuestionsRoute;
