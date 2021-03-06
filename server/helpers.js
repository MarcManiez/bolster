const jwt = require('jsonwebtoken');
const unless = require('express-unless');

module.exports = {
  checkUser: (req, res, next) => {
    const headerAuth = req.get('Authorization').slice(7);
    jwt.verify(headerAuth, process.env.JWT_SECRET || 'super secret', (err, decoded) => {
      if (err) {
        res.status(401).end('YOU SHALL NOT PASS!!');
      } else {
        next();
      }
    });
  },
  createJWT: (newUser) => {
    const userToken = jwt.sign(newUser, process.env.JWT_SECRET || 'super secret');
    return userToken;
  },

  jwtRedirect: (req, res, userInstance) => {
    const userToken = module.exports.createJWT(userInstance);
    res.json({ userToken, userInstance });
  },

  findOrCreate: (model, criteria) => new Promise((resolve, reject) => {
    model.forge(criteria).fetch().then((category) => {
      resolve(category || model.forge(criteria).save(null, { method: 'insert' }));
    });
  }),

  formatUser: (userInstance) => {
    delete userInstance.attributes.password;
    delete userInstance.attributes.publicToken;
    delete userInstance.attributes.accessToken;
    delete userInstance.attributes.created_at;
    delete userInstance.attributes.updated_at;
    return userInstance.attributes;
  },
};
