const questionModel = require("../models/question_model");
class QuizController {
    async getAllQuizs(req, res) {
        let data = await questionModel.find();
        console.log(data);
        res.json(data);
    }
    async getQuiz(req, res){
        let quizId = req.params.id;
        let data = await questionModel.findById(quizId);
        req.json(data);
    }
    async createQuiz(req, res){
        const data = req.body;
        await questionModel.create(data);
        res.json("Thêm Thành công!");
    }
}
module.exports = new QuizController;