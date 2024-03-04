export class tag{
    static readonly ANGULAR = new tag('Angular', 'red');
    static readonly TYPESCRIPT = new tag('TypeScript', 'blue');
    static readonly PYTHON = new tag('Python', '#306998');
    static readonly FLASK = new tag('Flask', 'darkred');
    static readonly CSHARP = new tag('C#', 'purple');
    static readonly NODEJS = new tag('Node.js', 'orange');
    static readonly VUE = new tag('Vue', 'teal');
    static readonly JAVASCRIPT = new tag('JavaScript', 'gold');
    static readonly REACT = new tag('React', 'blue');
    static readonly C = new tag('C', 'lightblue');
    static readonly CPP = new tag('C++', 'lightblue');

    
    private constructor(private readonly key: string, public readonly color: string){

    }
    toString(){
        return this.key;
    }
}