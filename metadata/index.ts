import "reflect-metadata";

const plane = {
  color: "red",
};

Reflect.defineMetadata("note", "hi there", plane);

console.log(plane);

const note = Reflect.getMetadata("note", plane);

console.log(note);

Reflect.defineMetadata("note2", "hi there", plane, "color");

const note2 = Reflect.getMetadata("note2", plane, "color");

console.log(note2);

const shouldBeUndefined = Reflect.getMetadata("note2", plane);

console.log(shouldBeUndefined);
