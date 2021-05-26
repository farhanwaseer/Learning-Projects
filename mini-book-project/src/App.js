
function App() {
  return (
    <section >
    <Book />
    </section>
  );
}

const Book = () => {
  return <article> <Image /></article>;
}

const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/51pu2NIKVvL._AC_SX184_.jpg" alt=""/>
}


export default App;
