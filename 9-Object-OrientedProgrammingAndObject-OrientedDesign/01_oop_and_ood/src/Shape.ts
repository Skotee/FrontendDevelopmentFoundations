import { Point } from "./Point";

export abstract class Shape {
  protected color: string = '';
  protected filled: boolean = false;
  points: Point[]=[];

  constructor(points: Point[]); //a constructor that takes a list of `points` and initializes the color to `"green"` and filled to `true` by default
   //it works without overloading, I think I don't need overloading here
  constructor(points: Point[], color?: string, filled?: boolean) {
    //constructor that takes a list of `points`, the `color` and `filled` properties;
    if (points.length < 3) {
      throw new Error("Shape must have at least 3 points, 2 points is just a line");
    } else {
      if (arguments.length == 3 && (color !== undefined && filled !== undefined)) {
        this.color = color;
        this.filled = filled;
        this.points = points;
      } else if (arguments.length == 1) {
        this.color = "green";
        this.filled = true;
        this.points = points;
      }
    }
  }
  // getType(): string;

  toString() {
    return `A Shape with color of ${this.color} and ${
      this.filled ? 'filled' : 'not filled'
    }. Points:${this.points.map((singlePoint) => {
      return ` (${singlePoint.x}, ${singlePoint.y})`;
    })}.`;
  }

  getPerimeter() {
    const distancesArray = [];
    for (let i = 0; i < this.points.length-1; i++) { 
      distancesArray.push(this.points[i].distance(this.points[i+1]))
    }
    distancesArray.push(this.points[0].distance(this.points[this.points.length-1]))
    return distancesArray.reduce((acc,curr) => acc + curr);  
  }
}


//TESTS

// const points = [new Point(2, 4), new Point(0, 0), new Point(2, 2)];
// const points2 = [new Point(1, 4), new Point(23, 0), new Point(6, 2)];

// const shape = new Shape(points)
// const shape2 = new Shape(points2, 'blue', false)

// shape.getPerimeter();
// console.log(shape);
// console.log('perimeter', shape.getPerimeter());
// console.log(shape.toString());

// shape2.getPerimeter();
// console.log(shape2);
// console.log('perimeter 2', shape2.getPerimeter());

// console.log(shape2.toString());

