import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Platform from './pages/Platform';
import SolutionsIndex from './pages/SolutionsIndex';
import SolutionPage from './pages/SolutionPage';
import Implementation from './pages/Implementation';
import Roles from './pages/Roles';
import About from './pages/About';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import { PRIVACY_POLICY_APPROVED } from './config/site';

// Every path here must also be listed in src/content/pages.js so it is prerendered.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="platform" element={<Platform />} />
        <Route path="solutions" element={<SolutionsIndex />} />
        <Route path="solutions/:slug" element={<SolutionPage />} />
        <Route path="implementation" element={<Implementation />} />
        <Route path="roles" element={<Roles />} />
        <Route path="about" element={<About />} />
        {PRIVACY_POLICY_APPROVED && <Route path="privacy" element={<Privacy />} />}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
