import {books } from "./books";
import {Book} from "./Book";

// CSS
import "./App.css";


function App() {
  return (
    <section className="booklist">
      {
        books.map((book) => {
          return <Book key={books.id} book={book}/>
        })
      }
    </section>
  );
}

const handler = () => {
  alert("helloWorld")
};



export default App;
