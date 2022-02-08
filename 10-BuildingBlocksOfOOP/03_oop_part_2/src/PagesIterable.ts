// 3.	PagesIterable mixin:
// a.	You can use 3rd library or Symbol.iterator to implement PagesIterable mixin
// b.	the “for..of”, spread operator (“…”) and other data consumers should work with your iterables (Book, Magazine, Comics)

import { Item } from './Item';
import { Page } from './Page';
import { Pages } from './Pages';

export class PagesIterable {
    item: Item;
    page: Page;

    constructor(item: Item, page: Page) {
        this.item = item;
        this.page = page;
    }

    toString(): string {
        return this.item.toString() + ', ' + this.page.toString();
    }
}

export class ItemIterator implements Iterator<PagesIterable> {
    pages: Pages;
    item: Item;
    currentIndex = 0;

    constructor(pages: Pages, item: Item) {
        this.pages = pages;
        this.item = item;
    }

    next(): IteratorResult<PagesIterable> {
        if (this.pages.getLength() - 1 === this.currentIndex) {
            return new PageIteratorReturnResult(this.pages.pages[this.currentIndex], this.item, true);
        }

        let item = new PageIteratorYieldResult(this.pages.pages[this.currentIndex], this.item, false);
        this.currentIndex++;
        return item;
    }
}

export class PageIteratorYieldResult implements IteratorYieldResult<PagesIterable> {
    done?: false;
    value: PagesIterable;

    constructor(page: Page, item: Item, done: false) {
        this.value = new PagesIterable(item, page);
        this.done = done;
    }
}

export class PageIteratorReturnResult implements IteratorReturnResult<PagesIterable> {
    done: true;
    value: PagesIterable;

    constructor(page: Page, item: Item, done: true) {
        this.value = new PagesIterable(item, page);
        this.done = done;
    }
}
