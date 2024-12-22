import NavLinks from "../../components/Navlinks/NavLinks.jsx";

function Homepage() {







    return (
        <main>
            <header>
                <h1>Homepage</h1>
            </header>
            <nav className="nav-class">
                <NavLinks to="/movies" text="Movies"/>
                <NavLinks to="/games" text="Games"/>
            </nav>
            <section className="section-container">

            </section>
            <footer>
                <p>footer area</p>
            </footer>
        </main>
    )
}

export default Homepage;