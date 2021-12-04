import pymysql.cursors

connection = pymysql.connect(host='localhost',
                             user='root',
                             password='',
                             database='devmobileav2',
                             cursorclass=pymysql.cursors.DictCursor)