import { Shape } from "./Shape";
import { Point } from "./Point";

export class Triangle extends Shape {
  p1: Point;
  p2: Point;
  p3: Point;

  constructor(p1:Point, p2: Point, p3: Point)
  constructor(p1: Point, p2: Point, p3: Point, color?: string, filled?: boolean) {
    super([p1, p2, p3], color, filled);
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }

  toString(): string {
    return `Triangle[v1=(${this.p1.x}, ${this.p1.y}),v2=(${this.p2.x}, ${this.p2.y}),v3=(${this.p3.x}, ${this.p3.y})]`;
  }

  getType(): string {
    const distancesArray = [this.p1.distance(this.p2), this.p2.distance(this.p3), this.p1.distance(this.p3)];
    const roundedDistancesArray = distancesArray.map(distance => Math.round(distance))
    const allEqual = (arr: number[]) => arr.every(distance => distance === roundedDistancesArray[0])
    if (allEqual(roundedDistancesArray)) {
      return "equilateral triangle";
    } else if (
      this.p1.distance(this.p2) === this.p2.distance(this.p3) ||
      this.p2.distance(this.p3) === this.p1.distance(this.p3) ||
      this.p1.distance(this.p2) === this.p1.distance(this.p3)
    ) {
      return "isosceles triangle";
    } else {
      return "scalene triangle";
    }
  }
}

const equilateral = new Triangle(new Point(0, 0), new Point(6, 0), new Point(3, 5.196))
const isosceles = new Triangle(new Point(0, 0), new Point(6, 0), new Point(3, 8))
const scalene = new Triangle(new Point(0, 0), new Point(7, 0), new Point(3, 8))

equilateral.getType()
isosceles.getType()
scalene.getType()