import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
  {
    name: "Satish Prajapati",
    email: "satish@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },
  {
    name: "Client User",
    email: "client@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },
];

export default users;
