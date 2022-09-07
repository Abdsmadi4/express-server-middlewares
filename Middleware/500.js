'use strict';

const err500 = (err,req,res,next) =>{
        res.status(500).send({
          code: 500,
          message: `Server Error: ${err.message || err}`,
        });
}
module.exports =err500;
