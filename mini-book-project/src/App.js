// CSS

import "./App.css";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51b-JoV-1xS._AC_SX184_.jpg",
}

function App() {
  return (
    <section className="booklist">
      <Book />
      <Book />
     
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
       <img
      src={firstBook.img}
      alt=""
    />
       <h1>The Last Thing He Told Me : A Novel</h1>
       <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Laura Dave</h4>
    </article>
  );
};




export default App;
