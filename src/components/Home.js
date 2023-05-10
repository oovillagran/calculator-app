import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to our page!</h1>
      <p className="home-text">
        Hello Friends! &quot;Math magicians&quot; is a website for all fans of mathematics.
        It is a Single Page App (SPA) that allows users to:
      </p>
      <ul className="lists">
        <li>
          Make simple calculations.
        </li>
        <li>
          Read a random math-related quote.
        </li>
      </ul>
      <p className="home-text">
        By building this application, I learned how to use React.
        <br />
        This application includes three subpages:
      </p>
      <ul>
        <li>
          Home Page.
        </li>
        <li>
          Calculator Page.
        </li>
        <li>
          Quote Page.
        </li>
      </ul>
      <p className="home-text">
        By building this application I was able to further strengthen my knowledge in JavaScript and
        had the opportunity to start working using React.
        <br />
        <br />
        React is a really wonderfull library that allows developers working in a more efficient way.
        <br />
        Among the main features used for the creation of this application are:
      </p>
      <ul>
        <li>
          Setting up the environment and tools needed to develop a React application.
        </li>
        <li>
          Develop React components.
        </li>
        <li>
          Connect to an API within a functional component.
        </li>
      </ul>
    </div>
  );
}
