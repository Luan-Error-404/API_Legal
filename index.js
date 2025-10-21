import express from "express";
import pool from './servicos/conexao.js'
const app = express();
const port = 9000;

app.listen(port, async () => {
    const data = new Date();
    console.log(`Servidor iniciado na porta ${port} em: ${data}`);

    // const conexao = await pool.getConnection();

    // console.log(conexao.threadId);

    // conexao.release();
})

