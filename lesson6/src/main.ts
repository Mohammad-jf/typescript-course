class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string
  ) {}
}

const mohammad = new Coder('mohammad', 'pop', 22, 'typeScript');
