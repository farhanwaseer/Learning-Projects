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
    title: "The Four Agreements: A Practical Guide to Person ",
    author: "Don Miguel Ruiz",
  },

  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51FcSSKpJBL._AC_SX184_.jpg",
    title: "Second Place: A Novel ",
    author: "Rachel Cusk",
  },

  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/51U2mcE5iXL._AC_SX184_.jpg",
    title: "Second Place: A Novel ",
    author: "Rachel Cusk",
  },

  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/41+2DiWeWAS._AC_SX184_.jpg",
    title: "The Premonition: A Pandemic Story ",
    author: "Michael Lewis",
  },

  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/51xRyKzMMQL._AC_SX184_.jpg",
    title: "2022 Large Scale Road Atlas (Rand McNally Large Scale Road Atlas USA)  ",
    author: "Rand McNally ",
  }
];
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

const handler => ({alert("helloWorld")});


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
