const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Models
const User = require('../models/User');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

//json function

function jsonMessage(status, message){
  return {status,message};
};

/* GET home page. */
router.post('/register', (req, res, next) => {
  const {username, password} = req.body;
  
  bcrypt.hash(password, 10).then((hash) => {
    const user = new User({username, password: hash});
    const promise = user.save();

    promise.then((data) => {
      res.json(data);
    }).catch((err) => {
      res.json(err);
    })
  });
});

//authenticate root

router.post('/authenticate', (req, res) => {
  const { username, password } = req.body;

  User.findOne({username}, (err, user) => { //kullanıcıyı arıyoruz.

    if (err)// hata oluşursa hatayı fırlatıyoruz..
      throw err;

    if (!user){ //böyle bir kullanıcı yoksa hata dönderiyoruz.

      res.json(jsonMessage('false', 'Authentication failed, user is not found.'));

    }else{// kullanıcı varsa şifresini karşılaştırıyoruz.

      bcrypt.compare(password, user.password).then((result) => {

        if (!result){//gelen sonuç şifre ile eşleşmiyorsa hata dönderiyoruz.

          res.json(jsonMessage('false', 'Authentication failed, wrong password'));
        
        }else{// kullanıcı şifresi uyuyşuyor ise token oluşturuyoruz.

          //payload ile tokenin kullanıcıya ait hangi bilgileri taşıyacağını belirtiyoruz.
          const payload = { username };
          //jwt modülünü kullanarak token oluşturuyoruz. expiresIn ile 12 saat tokenin geçerli olmasını sağladık.
          const token = jwt.sign(payload, req.app.get('api_secret_key'), { expiresIn: 720 });
          res.json(jsonMessage('true', token));

        }

      });

    } 
  });
});


module.exports = router;
