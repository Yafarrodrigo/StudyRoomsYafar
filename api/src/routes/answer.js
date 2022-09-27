const { Router } = require('express');
const router = Router();
const { createAnswer, getAnswer, updateAnswer, likeAnswer, deleteVotesXAnswer, deleteAnswer, updateRating } = require('../controllers/answersController.js')


// /asnwers/...
router.post('/', createAnswer);
router.get('/:questionId', getAnswer);
router.put('/:answerId', updateAnswer);
router.delete('/:answerId', deleteAnswer);
router.post('/vote/:answerId', likeAnswer)
router.delete('/vote/:answerId', deleteVotesXAnswer)
router.put('/rating/:answerId', updateRating)

module.exports = router;
