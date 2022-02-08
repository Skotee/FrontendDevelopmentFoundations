// 2.	class Pages which is wrapper for array of Page instances
// a.	should provide appropriate methods to communicate with iterator

//https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/

import { Page } from './Page';

export class Pages {
	pages: Page[]
    constructor(pages: Page[]) {
        this.pages = pages;
    }

		getLength(): number {
			return this.pages.length;
		}
}
