// 5.	class Book (should be Iterable):
// a.	properties: “pages”, “title”, “author”
// b.	setters and getters for “title” and “author”
// c.	“toString” -> “Book: {book title} by {author} with number of pages: {number}”
// d.	“pages” property keeps instance of Pages class

import { Item } from './Item';
import { Pages } from './Pages';

export class Book extends Item {
    title: string;
    author: string;
    pages: Pages[];

    constructor(title: string, author: string, pages: Pages) {
        super();
        this.title = title;
        this.author = author;
        this.pages = [];
    }

    public get getTitle(): string {
        return this.title;
    }

    public get getAuthor(): string {
        return this.author;
    }

    toString(): string {
        return `Book: ${this.title}, by ${this.author}, with number of pages ${this.pages}`;
    }
}
