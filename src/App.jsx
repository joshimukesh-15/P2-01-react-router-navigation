import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ContactPage from './components/ContactPage.jsx';

export default function App() {
  return <BrowserRouter><div className="shell"><header><p className="eyebrow">UNIT 4 · PRACTICAL 1</p><h1>Campus Connect</h1><p>Three pages, one smooth application.</p><nav><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link></nav></header><main><Routes><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<section className="card"><h2>Page not found</h2><Link to="/">Return home</Link></section>} /></Routes></main><footer>React Router changes the displayed route without reloading the document.</footer></div></BrowserRouter>;
}
