'use strict';

const valNum =((req, res, next) => {
  if (!isNaN(+req.query.num)) {
    res.json({ num: req.query.num * req.query.num });
  } else {
    next(`${req.query.num} is not a Number`);
  }
  next();
});

module.exports = valNum;