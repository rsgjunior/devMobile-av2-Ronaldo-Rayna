import db
import json

def listAllPessoas():
    jsonPessoas = {
        "pessoas": []
    }

    with db.connection.cursor() as cursor:
        sql = "SELECT * FROM pessoas"
        cursor.execute(sql)
        result = cursor.fetchall()

        for pessoa in result:
            jsonPessoas["pessoas"].append({
                "id": pessoa["id"],
                "nome": pessoa["nome"]
            })

        print(result)
    
    return json.dumps(jsonPessoas)

def createPessoa(nome):
    with db.connection.cursor() as cursor:
        sql = "INSERT INTO pessoas (nome) VALUES (%s)"
        cursor.execute(sql, (nome))
        db.connection.commit()
    
    return json.dumps({"message": "OK"})