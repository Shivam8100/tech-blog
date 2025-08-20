import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ArticleDetail from './pages/article-detail';
import LearningPaths from './pages/learning-paths';
import ProjectShowcase from './pages/project-showcase';
import SearchDiscovery from './pages/search-discovery';
import About from './pages/about';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<About />} />
        <Route path="/article-detail" element={<ArticleDetail />} />
        <Route path="/learning-paths" element={<LearningPaths />} />
        <Route path="/project-showcase" element={<ProjectShowcase />} />
        <Route path="/search-discovery" element={<SearchDiscovery />} />
        <Route path="/about" element={<About />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
