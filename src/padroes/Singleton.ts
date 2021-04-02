//singleton - GoF
/*Singleton permite criação de uma Instância do Objeto*/
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ){}

  connect(): void{
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDataBase(host: string, user: string, password: string): Database{
    if(Database.database) {
      console.log("criando instância já criada");
      return Database.database;
    }
    console.log('criando nova instância');
    Database.database = new Database(host, user, password);
    return Database.database
  }
}

const db1 = Database.getDataBase('localhost', 'root', '1234');
db1.connect();

const db2 = Database.getDataBase('localhost', 'root', '1234');
db2.connect();

const db3 = Database.getDataBase('localhost', 'root', '1234');
db3.connect();

const db4 = Database.getDataBase('localhost', 'root', '1234');
db4.connect();

console.log(db1);
console.log(db2);
console.log(db3);
console.log(db4);
