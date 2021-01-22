const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=> {
    res.json({
        mensaje: "Hola guapo!"
    })
})

module.exports = router;