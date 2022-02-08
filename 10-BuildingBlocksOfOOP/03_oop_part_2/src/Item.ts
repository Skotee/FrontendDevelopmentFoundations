// 4.	abstract class Item with abstract toString method.
// Make Book, Magazine and Comics inherited from Item class.
// Mix Iterable behavior into Item’s prototype


// An object becomes an iterable if it implements a function whose key is Symbol.iterator and returns an iterator.
// The iterator itself is an object with a function called next inside it. next should return an object with two keys value and done. value contains the next element of the iteration and done a flag saying if the iteration has finished.

// An iterable is an object that implements a function whose key is Symbol.iterator and returns an iterator.
// An iterator is an object with a function called next inside it. next is an object with two keys value and done.
// value contains the next element of the iteration and done a flag saying if the iteration has finishe

import { Pages } from './Pages';
import { PagesIterable, ItemIterator } from './PagesIterable';

export abstract class Item implements Iterable<PagesIterable> {
    pages: Pages;

    constructor(pages: Pages) {
        this.pages = pages;
    }

    [Symbol.iterator](): Iterator<PagesIterable> {
        return new ItemIterator(this.pages, this);
    }

    abstract toString(): string;
}
