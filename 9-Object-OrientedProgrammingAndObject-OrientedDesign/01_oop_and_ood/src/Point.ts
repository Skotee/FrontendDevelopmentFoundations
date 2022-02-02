export class Point {
  x: number;
  y: number;

  // constructor(); //it works without overloading, I think I don't need overloading
  constructor(x?: number, y?: number) {
    if (x !== undefined && y !== undefined) {
      this.x = x;
      this.y = y;
    } else {
      this.x = 0;
      this.y = 0;
    }
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  distance(other: Point): number;
  distance(x?: number, y?: number): number;
  distance(x?: Point | number, y?: number): number {
    if (arguments.length == 2 && typeof x == 'number' && (x !== undefined && y !== undefined)) {
      return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
    } else if (arguments.length == 1 && arguments[0] !== undefined) {
        return Math.sqrt(
          Math.pow(this.x - arguments[0].x, 2) + Math.pow(this.y - arguments[0].y, 2)
        )
    } else if (arguments.length == 0) {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    return 0;
  }
};


//testing section
const point = new Point(2, 3);
const secondPoint = new Point(3, 4);
// console.log(point);
// console.log(secondPoint);
// console.log(point.distance());
// console.log(point.distance(secondPoint));
// console.log(point.distance(5,8));

// console.log('tostring', point.toString());
