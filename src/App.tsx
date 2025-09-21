import "./App.css";
import UserCard from "./components/UserCard";
export type Person = {
  user: string;
  email: string;
  fatheName: string;
};
function App() {
  const person2: Person = {
    user: "ioais",
    email: "wle@gmail.com",
    fatheName: "nxc",
  };
  const person3: Person = {
    user: "ioais",
    email: "wle@gmail.com",
    fatheName: "nxc",
  };

  return (
    <>
      <UserCard person={person2} age = {2}/>
      <UserCard person={person3}  age={22}/>
    </>
  );
}

export default App;