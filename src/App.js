import "./App.css";
import Example1 from "./components/example1/Example1";
import Example2 from "./components/example2/Example2";

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
      <hr />
      <section id="second-example">
        <p>
          In this example we implement the same past example introducing another
          features. Here we use Fragments to avoid empty divs, useRef to handle
          user input with another way, and Portals to render overlays and modals
          in a diferente lacation, independently where it is used on project
        </p>
        <Example2 />
      </section>
    </div>
  );
}

export default App;
