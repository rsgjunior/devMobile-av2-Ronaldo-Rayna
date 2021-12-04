import db
import json

def listTarefasForPessoa(pessoa_id):
    jsonTarefas = {
        "tarefas": []
    }

    with db.connection.cursor() as cursor:
        sql = "SELECT * FROM tarefas WHERE pessoa_id = %s"
        cursor.execute(sql, (pessoa_id))
        result = cursor.fetchall()

        for tarefa in result:
            dictTarefa = {}

            for key, value in tarefa.items():
                dictTarefa[key] = value

            jsonTarefas["tarefas"].append(dictTarefa)
        
        print(jsonTarefas)
    
    return json.dumps(jsonTarefas, default=str)

