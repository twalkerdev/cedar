interface Stackable {
  add: (data: number) => void;
  remove: () => void;
  peek: () => string | number;
}
export default class Stack implements Stackable {
  private items;
  constructor();
  get stackItems(): (string | number)[];
  add(data: number | string): void;
  remove(): string | number;
  peek(): number | string;
}
export {};
//# sourceMappingURL=stack.d.ts.map
