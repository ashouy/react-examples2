import "./App.css";
import Example1 from "./components/example1/Example1";

function App() {
  return (
    <div className="App">
      <section id="first-example">
        <p>
          In this example we learn how to add a custom modal an reuse it at any
          component
        </p>
        <Example1 />
      </section>
      <hr/>
    </div>
  );
}

export default App;
