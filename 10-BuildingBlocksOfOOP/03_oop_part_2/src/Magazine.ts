// 6.	class Magazine (should be Iterable):
// a.	properties: “pages”, “title”
// b.	setters and getters for “title”
// c.	“toString” -> “Magazine: {title} with number of pages: {number}”
// d.	“pages” property keeps instance of Pages class //TODO jak?

import { Item } from './Item';
import { Pages } from './Pages';

export class Magazine extends Item {
    title: string;
    pages: Pages;

    constructor(title: string, pages: Pages) {
        super();
        this.title = title;
        this.pages = new Pages([]);
    }

    public set setTitle(title: string) {
        this.title = title;
    }

    public get getTitle(): string {
        return this.title;
    }

    // [Symbol.iterator]() {
    //   let values = Object.values(this);
    //   let index = 0;
    //   return {
    //     next() {
    //       if (index < values.length) {
    //         let val = values[index];
    //         index++;
    //         return { value: val, done: false };
    //       } else return { done: true };
    //     }
    //   };
    // }

    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages}`;
    }
}
