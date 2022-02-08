// 7.	class Comics (should be Iterable):
// a.	properties: “pages”, “title”, “author”, “artist”
// b.	setters and getters for “title”, “author” and “artist”
// c.	“toString” -> “Comics: {title} by {author}, the artist is {artist}, number of pages: {number}”
// d.	pages” property keeps instance of Pages class

import { Item } from './Item';
import { Pages } from './Pages';

export class Comics extends Item {
    title: string;
    author: string;
    artist: string;
    pages: Pages;

    constructor(title: string, author: string, artist: string, pages: Pages) {
        super(pages);
        this.title = title;
        this.author = author;
        this.artist = artist;
        this.pages = pages;
    }

    public set setTitle(title: string) {
        this.title = title;
    }

    public get getTitle(): string {
        return this.title;
    }

    public set setAuthor(author: string) {
        this.author = author;
    }

    public get getAuthor(): string {
        return this.author;
    }

    public set setArtist(artist: string) {
        this.artist = artist;
    }

    public get getArtist(): string {
        return this.artist;
    }

    toString(): string {
        return `“Comics: ${this.getTitle} by ${this.getAuthor}, the artist is ${
            this.getArtist
        }, number of pages: ${this.pages.getLength()}`;
    }
}
