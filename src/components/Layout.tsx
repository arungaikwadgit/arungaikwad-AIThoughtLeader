import { Outlet, Link, useLocation } from 'react-router-dom'
import site from '../data/site.json'

export function Layout() {
  const loc = useLocation()
  const isHome = loc.pathname === '/' || loc.pathname === '/index.html'

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <div className="brand">
            <strong>{site.name}</strong>
            <span>
              {site.currentTitle} → {site.targetTitle}
            </span>
          </div>
          <nav className="nav-links" aria-label="Primary">
            {isHome ? (
              <>
                <a className="pill" href="#about">About</a>
                <a className="pill" href="#work">Work</a>
                <a className="pill" href="#articles">Articles</a>
                <a className="pill" href="#contact">Contact</a>
              </>
            ) : (
              <>
                <Link className="pill" to="/">Home</Link>
                <Link className="pill" to="/case-studies">Case Studies</Link>
                <Link className="pill" to="/articles">Articles</Link>
              </>
            )}
            <Link className="pill" to="/operating-manual">Operating Manual</Link>
            <Link className="pill" to="/ai-lab">AI Lab</Link>
            <Link className="pill" to="/now">Now</Link>
            <a className="pill primary" href={site.links.linkedin || '#'} target="_blank" rel="noreferrer">
              Connect
            </a>
          </nav>
        </div>
      </header>

      <main className="container">
        <Outlet />
        <footer className="footer">
          <div className="row">
            <div className="small">© {new Date().getFullYear()} {site.name}. Built for GitHub Pages.</div>
            <div className="small">
              <a href={`${import.meta.env.BASE_URL}admin/`}>Admin</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
