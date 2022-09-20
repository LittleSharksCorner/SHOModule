# !pip install psycopg2
# !pip install pandas
import psycopg2 as pg2
import pandas as pd
import os

conn = pg2.connect(dbname="energymodule", user="jeremy", password="1195Eldorado")
curr = conn.cursor()

tables = ["Force_HLG_pretestedu","Force_HLG_energyedu","Force_HLG_posttestedu"]

for table in tables:

        curr.execute(f'SELECT * FROM "{table}"')

        df = pd.DataFrame(curr.fetchall())
        
        curr.execute(f"SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '{table}'")

        df.columns = [x[0] for x in curr.fetchall()]

        df.drop(['id'],axis=1,inplace=True)

        df.to_csv(f'{table}.csv',index=False)

