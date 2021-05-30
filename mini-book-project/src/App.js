// CSS
import "./App.css";

const books = [
  { 
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51b-JoV-1xS._AC_SX184_.jpg",
    title: "The Last Thing He Told Me: A Novel",
    author: "Laura Dave",
  },

  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/51U2mcE5iXL._AC_SX184_.jpg",
    title: "Second Place: A Novel ",
    author: "Rachel Cusk",
  },

  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51U2mcE5iXL._AC_SX184_.jpg",
    title: "Second Place: A Novel ",
    author: "Rachel Cusk",
  },

  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/51U2mcE5iXL._AC_SX184_.jpg",
    title: "Second Place: A Novel ",
    author: "Rachel Cusk",
  }
];
function App() {
  return (
    <section className="booklist">
      {
        books.map((book)=> {
          return <Book  key={book.id} book={book} ></Book>
        })
      }
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default App;
