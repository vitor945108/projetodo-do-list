const express = require('express');
const app = express();
const listroutes = require ('./routes/list')
const port = 3000;

app.use(express.json());
app.use('/list',listroutes)



app.get('/', (req, res) => {
  res.json({message: 'Oba! rodou :)'});
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
