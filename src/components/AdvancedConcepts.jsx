import '../../src/Home.css';
const AdvancedConcepts = () => {
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
        <section className="advanced-right">
            <h2>Advanced Concepts</h2>
            <div className='core-concepts'>
                <a href="/lifecycle-methods">Lifecycle Methods</a>
                <a href="/hooks">React Hooks</a>
            </div>
        </section>
      </section>
    </>
  )
}

export default AdvancedConcepts