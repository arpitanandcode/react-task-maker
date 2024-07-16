import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  return (
    <div>
      <Input />
      <Button title="Submit" myClick={() => console.log('Arpit')} />
    </div>
  )
}


export default App;