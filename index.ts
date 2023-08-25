import express from 'express'
import { _WS_PORTA } from './constantes';
import SistemaController from './src/controllers/sistemas';
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./swagger.json"


const app = express();
app.use(express.json())
const port = _WS_PORTA;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/sistemas', SistemaController.listar);
app.post('/setMensalidade', SistemaController.setMensalidade);
app.post('/DeleteSistema', SistemaController.deletarSistema);
app.post('/setVersao', SistemaController.setVersao);
app.post('/liberaVersao', SistemaController.liberaVersao);



app.listen(port, () => {
console.log(`Servidor rodando na porta ${port}`)})
