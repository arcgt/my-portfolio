
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import ContactPage from './pages/contact/ContactPage';
import Layout from './ components/Layout';
import UnknownPage from './pages/unknown/UnknownPage';
import RedBadgerBlog2017 from "./pages/portfolio/components/RedBadgerBlog2017";
import RedBadgerBlog2018 from "./pages/portfolio/components/RedBadgerBlog2018";

function App() {
  return (
    <>
      <BrowserRouter basename={"/my-portfolio/"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="portfolio/rb-blog-2017" element={<RedBadgerBlog2017 />} />
            <Route path="portfolio/rb-blog-2018" element={<RedBadgerBlog2018 />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<UnknownPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
