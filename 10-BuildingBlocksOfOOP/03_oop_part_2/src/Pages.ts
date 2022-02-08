// 2.	class Pages which is wrapper for array of Page instances
// a.	should provide appropriate methods to communicate with iterator

//https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/

import { Page } from './Page';

export class Pages {
    constructor(page: Page[]) {
        page = [];
    }
    iteratorDriver() {}
}

// let PagesIterableMixin = {
//     [Symbol.iterator](): Iterator<number>  {
//         let counter = 0;
//         let nextIndex = 0;
//         return  {
//             next: () => {
//                 if ( nextIndex <= 0 ) {
//                     let result = { value: nextIndex,  done: false }
//                     nextIndex += 1;
//                     counter++;
//                     return result;
//                 }
//                 return { value: counter, done: true };
//             }
//         }
//     }
//   };

// Object.assign(Pages.prototype, PagesIterableMixin);
