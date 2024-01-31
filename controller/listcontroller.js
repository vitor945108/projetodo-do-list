
const express = require('express');
const router = express.Router();
const dbconnection = require ('../models/dbconnection')

router.get('/',(req,res)=>{
          dbconnection.query('select * from tbtodolist;',(err,result)=>{
                    if(err) throw err;
                    res.json(result)

          })
});   








module.exports = router;