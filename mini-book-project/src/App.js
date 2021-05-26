function App() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
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

export default App;
