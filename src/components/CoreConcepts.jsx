import '../../src/Home.css';
const CoreConcepts = () => {
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
        <section className="core-right">
            <h2>Core Concepts</h2>
            <div className='core-concepts'>
                <a href="/lifting-state-up">Lifting State Up</a>
                <a href="/composition-vs-inheritance">Composition vs Inheritance</a>
            </div>
        </section>
      </section>
    </>
  )
}

export default CoreConcepts