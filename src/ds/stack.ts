interface Stackable {
  add: (data: number) => void;
  remove: () => void;
  peek: () => string | number;
}

export default class Stack implements Stackable {
  private items: (number | string)[];

  constructor() {
    this.items = [];
  }

  get stackItems() {
    return this.items;
  }

  add(data: number | string): void {
    this.items.push(data);
  }

  remove() {
    return this.items.pop();
  }

  peek(): number | string {
    return this.items[this.items.length - 1];
  }
}
