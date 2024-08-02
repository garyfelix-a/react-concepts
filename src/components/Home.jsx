// import Button from 'react-bootstrap/Button';
import '../../src/Home.css';

const Home = () => {
  return (
    <>
      <section className="main-section">
        <section className="left">
            <div>
                <h2>React Concepts</h2>
                <p>This is a simple React application.</p>
                <div className="nav-menu">
                    <a href="/">Home</a>
                    <a href="/core-concepts">Core Concepts</a>
                    <a href="/advanced-concepts">Advanced Topics</a>
                    <a href="/routing-concepts">Routing Topics</a>
                </div>
            </div>
        </section>
        <section className="right">
            Dashboard
        </section>
      </section>
    </>
  );
};

export default Home;
