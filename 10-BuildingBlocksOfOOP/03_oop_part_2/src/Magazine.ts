// 6.	class Magazine (should be Iterable):
// a.	properties: “pages”, “title”
// b.	setters and getters for “title”
// c.	“toString” -> “Magazine: {title} with number of pages: {number}”
// d.	“pages” property keeps instance of Pages class

import { Item } from './Item';
import { Pages } from './Pages';

export class Magazine extends Item {
    title: string;
    pages: Pages;

    constructor(title: string, pages: Pages) {
        super(pages);
        this.title = title;
        this.pages = pages;
    }

    public set setTitle(title: string) {
        this.title = title;
    }

    public get getTitle(): string {
        return this.title;
    }

    toString(): string {
        return `Magazine: ${this.getTitle} with number of pages: ${this.pages.getLength()}`;
    }
}
