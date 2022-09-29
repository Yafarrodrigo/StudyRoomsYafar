const { Router } = require('express');
const router = Router();
const { createQuestion, getQuestions, getQuestion, updateQuestion, deleteQuestion, likeQuestion, unlikeQuestion, viewQuestion, logDelete, rateQuestion,getQuestionsByUser, editQuestionR } = require('../controllers/questionsController.js')



// /questions/...
router.post('/', createQuestion);
router.get('/:questionId', getQuestion);
router.get('/', getQuestions);
router.get('/user/:userId', getQuestionsByUser);
router.put('/:questionId', updateQuestion)
router.put('/:questionId', deleteQuestion)
router.post('/review', viewQuestion)
router.post('/like/:questionId',likeQuestion)
router.delete('/like/:questionId',unlikeQuestion)
router.put('/active/:questionId', logDelete)
router.put('/rate/:questionId',rateQuestion)
module.exports = router;