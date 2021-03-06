// import { UserForm } from "./views/UserForm";
// import { User } from "./models/User";
// import { UserEdit } from "./views/UserEdit";

// const user = User.buildUser({ name: "NAME", age: 20 });

// const root = document.getElementById("root");
// if (root) {
//   const userEdit = new UserEdit(root, user);

//   userEdit.render();
// } else {
//   throw new Error("root not found");
// }
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserList } from "./views/UserList";

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.fetch();

users.on("change", () => {
  const root = document.getElementById("root");

  if (root) {
    new UserList(root, users).render();
  }
});
