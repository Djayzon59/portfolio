export class Tag{

  static readonly ANGULAR= new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
  static readonly JAVA = new Tag('Java', 'orange');
  static readonly JAVAFX = new Tag('Java FX', 'yellow');
  static readonly JSF = new Tag('JSF', 'darkorange');
  static readonly QUARKUS = new Tag('Quarkus', 'purple');
  static readonly SQLSERVER = new Tag('SQL Server', 'green');
  static readonly DOCKER = new Tag('Docker', 'darkblue');
  private constructor(private readonly key: string, public readonly color: string){

  }

  toString(){
    return this.key;
  }
}
