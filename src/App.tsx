
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import ContactPage from './pages/contact/ContactPage';
import Layout from './ components/Layout';
import UnknownPage from './pages/unknown/UnknownPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<UnknownPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
