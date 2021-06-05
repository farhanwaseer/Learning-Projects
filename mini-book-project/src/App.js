import {books} from "./books";


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


const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt="books" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button onClick={handler}>example button</button>
    </article>
  );
};

export default App;
