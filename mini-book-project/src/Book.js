
const handler = () => {
    alert("helloWorld");
  };

export const Book = (props) => {
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
  