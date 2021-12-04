from flask import Flask
from flask_cors import CORS, cross_origin
import pessoasController
import tarefasController

app = Flask(__name__)
CORS(app)

@app.route('/pessoas')
def pessoas():
    return pessoasController.listAllPessoas()

@app.route('/pessoas/create/<nome>')
def criarPessoa(nome):
    return pessoasController.createPessoa(nome)

@app.route('/tarefas/<pessoa_id>')
def tarefasForPessoa(pessoa_id):
    return tarefasController.listTarefasForPessoa(pessoa_id)

if __name__ == '__main__':
    app.run(debug=True)