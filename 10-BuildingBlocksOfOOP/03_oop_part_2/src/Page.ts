// a.	property “pageNumber”
// b.	property “pageType” (“with text” for Book, “with article” for Magazine, “with images” for Comics)
// c.	property “pageMaterial” (“simple paper” for Book, “glossy paper” for Magazine and Comics)

export class Page {
    pageNumber: number;
    pageType: string;
    pageMaterial: string;

    constructor(pageNumber: number, pageType: string, pageMaterial: string) {
        this.pageNumber = pageNumber;
        this.pageType = pageType;
        this.pageMaterial = pageMaterial;
    }

    toString(): string {
        return `here is page with ${this.pageType} and it\'s material is ${this.pageMaterial}`;
    }
}
