// CSS

import "./App.css";

function App() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/51b-JoV-1xS._AC_SX184_.jpg"
      alt=""
    />
  );
};

const Title = () => <h1>The Last Thing He Told Me : A Novel</h1>;
const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Laura Dave</h4>

export default App;
