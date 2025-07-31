interface Stackable {
    add: (data: number) => void;
    remove: () => void;
    peek: () => string | number;
}
declare class Stack implements Stackable {
    private items;
    constructor();
    get stackItems(): (string | number)[];
    add(data: number | string): void;
    remove(): string | number;
    peek(): number | string;
}
export { Stack };
//# sourceMappingURL=stack.d.ts.map