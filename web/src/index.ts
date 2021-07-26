import { User } from "./models/User";

const user = new User({ id: 1 });
user.set({ name: "test2" });
user.save();
