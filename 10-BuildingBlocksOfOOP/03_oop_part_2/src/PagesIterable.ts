// 3.	PagesIterable mixin:
// a.	You can use 3rd library or Symbol.iterator to implement PagesIterable mixin
// b.	the “for..of”, spread operator (“…”) and other data consumers should work with your iterables (Book, Magazine, Comics)

import { Item } from "./Item";


// To get started, we need a type which we'll use to extend
// other classes from. The main responsibility is to declare
// that the type being passed in is a class.
 
// type Constructor = new (...args: any[]) => {};
 
// This mixin adds a scale property, with getters and setters
// for changing it with an encapsulated private property:
 
// function PagesIterable<TBase extends Constructor>(Base: TBase) {
//   return class Scaling extends Base {
//     // Mixins may not declare private/protected properties
//     // however, you can use ES2020 private fields
//     _scale = 1;
 
//     setScale(scale: number) {
//       this._scale = scale;
//     }
 
//     get scale(): number {
//       return this._scale;
//     }
//   };
// }


type Constructor<T = {}> = new (...args: any[]) => T;

function PagesIterableMixin<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    [Symbol.iterator](): Iterator<number>  {
      return {
        next: function () {
            return {
              value: 1,
              done: true
            };
        }
    };
  }
  };
}


// let counter = 0;
// let nextIndex = 0;
// return  {
//   next: () => {
//       if ( nextIndex <= 0 ) {
//           let result = { value: nextIndex,  done: false }
//           nextIndex += 1;
//           counter++;
//           return result;
//       }
//       return { value: counter, done: true };
//   }
// }