class TNode {
    public symbol?: string;
    public probability?: number;
    public left: TNode | null = null;
    public right: TNode | null = null;

    constructor(symbol?: string, probability?: number) {
        this.symbol = symbol;
        this.probability = probability;
    }
}

function shannonFanoTree(data: [string, number][]): TNode | null {
    if (data.length === 1) {
        return new TNode(data[0][0], data[0][1]);
    }

    const total_probability: number = data.reduce((sum, item) => sum + item[1], 0);
    

    return null;
}