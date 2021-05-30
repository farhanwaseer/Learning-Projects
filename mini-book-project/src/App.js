// CSS
import "./App.css";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51b-JoV-1xS._AC_SX184_.jpg",
  title: "The Last Thing He Told Me: A Novel",
  author: "Laura Dave",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51U2mcE5iXL._AC_SX184_.jpg",
  title: "Second Place: A Novel ",
  author: "Rachel Cusk",
};

function App() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

export default App;
