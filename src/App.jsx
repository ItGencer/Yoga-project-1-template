import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FloatingActionButton from './components/FloatingActionButton/FloatingActionButton';
import Home from './pages/Home/Home';
import Yoga from './pages/Yoga/Yoga';
import School from './pages/School/School';
import Contacts from './pages/Contacts/Contacts';
import About from './pages/About/About';
import Certificates from './pages/Certificates/Certificates';
import Rules from './pages/Rules/Rules';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/BlogPost/BlogPost';

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/school" element={<School />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}

export default App;
