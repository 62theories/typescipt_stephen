import { User } from "./models/User";

const user = new User({ name: "test" });

user.on("change", () => {
  console.log("test");
});

user.trigger("change");
