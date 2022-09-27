const {Router} = require('express')
const router = Router()

const {signIn, signUp, getAllUsers, getUserById, changePassword, activateAccount, recoveryPOST, recoveryGET, updateUser} = require('../controllers/usersController')
const { userCreateValidator, userLoginValidator } = require('../middlewares/userValidators.js')
const googleAuthRoutes = require('./googleAuth.js')

// /users/...
router.post('/signup', userCreateValidator, signUp)
router.post('/signin', userLoginValidator ,signIn)
router.post('/changePassword', changePassword)
router.post('/recovery', recoveryPOST)
router.get('/recovery/:token', recoveryGET)
router.get('/', getAllUsers)
router.get('/:userId', getUserById)
router.get("/activateAccount/:token", activateAccount)
router.put('/update/:userId', updateUser)

router.use('/google', googleAuthRoutes)


module.exports = router