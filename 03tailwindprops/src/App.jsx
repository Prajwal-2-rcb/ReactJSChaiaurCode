import Card from "./components/Card";
function App() {

  let myObj={
    username:"John Doe",
    age:30,
  }

  let myArr=[1,2,3,4,5];

  return (
    <center>
      <h1 className="bg-green-500 text-black p-4 rounded-xl">Hello Tailwind</h1>
      <Card channel="My Channel"  someObject={myObj} someArray={myArr} btnText="Click Me"/>
      <Card  channel="Another Channel" btnText="Read More"/>
    </center>
  );
}

export default App;
