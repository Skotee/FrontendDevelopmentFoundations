import { state } from "./State";

export function log(target: any, name: string, descriptor: any) {
  const { marks } = state;
  if (marks) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      let result = originalMethod.apply(this, args);
      return `${result}\n${marks
        .map((mark) => `**${mark.toUpperCase()}**`)
        .join("\n")}`;
    };
  }
}