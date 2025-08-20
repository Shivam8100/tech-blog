import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import ArticleHeader from "./components/ArticleHeader";
import TableOfContents from "./components/TableOfContents";
import CodeBlock from "./components/CodeBlock";
import InteractiveDemo from "./components/InteractiveDemo";
import RelatedArticles from "./components/RelatedArticles";
import CommentSection from "./components/CommentSection";
import AuthorBio from "./components/AuthorBio";
import NewsletterSignup from "./components/NewsletterSignup";
import ReadingProgress from "./components/ReadingProgress";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";

const ArticleDetail = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeHeading, setActiveHeading] = useState("");
  const [comments, setComments] = useState([]);

  // Mock article data
  const article = {
    id: 1,
    title:
      "Building Scalable React Applications with Modern Architecture Patterns",
    subtitle:
      "A comprehensive guide to implementing clean architecture, state management, and performance optimization in large-scale React applications.",
    category: "React",
    difficulty: "Advanced",
    tags: ["React", "Architecture", "Performance", "State Management"],
    publishDate: "December 15, 2024",
    readTime: 12,
    views: 15420,
    author: {
      name: "Shivam Ranjan",
      title: "Frontend Engineer at Truemeds",
      avatar: "https://github.com/Shivam8100.png",
      verified: true,
      bio: "Passionate frontend developer with 8+ years of experience building scalable web applications. I love sharing knowledge about React, TypeScript, and modern web development practices.",
      articlesCount: 47,
      followers: 8500,
      location: "San Francisco, CA",
      socialLinks: [
        { platform: "Twitter", url: "https://x.com/shivamr8100" },
        { platform: "Github", url: "https://github.com/Shivam8100" },
        {
          platform: "Linkedin",
          url: "https://www.linkedin.com/in/shivam-ranjan-b57a28150/",
        },
      ],
    },
  };

  // Mock table of contents
  const headings = [
    { id: "introduction", text: "Introduction", level: 1 },
    { id: "architecture-overview", text: "Architecture Overview", level: 1 },
    { id: "folder-structure", text: "Folder Structure", level: 2 },
    { id: "component-patterns", text: "Component Patterns", level: 2 },
    { id: "state-management", text: "State Management", level: 1 },
    { id: "redux-toolkit", text: "Redux Toolkit Setup", level: 2 },
    { id: "context-api", text: "Context API Usage", level: 2 },
    {
      id: "performance-optimization",
      text: "Performance Optimization",
      level: 1,
    },
    { id: "code-splitting", text: "Code Splitting", level: 2 },
    { id: "memoization", text: "Memoization Strategies", level: 2 },
    { id: "conclusion", text: "Conclusion", level: 1 },
  ];

  // Mock related articles
  const relatedArticles = [
    {
      title: "Advanced TypeScript Patterns for React Developers",
      thumbnail:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      readTime: 8,
      category: "TypeScript",
    },
    {
      title: "Optimizing React Performance with Profiler and DevTools",
      thumbnail:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      readTime: 10,
      category: "Performance",
    },
    {
      title: "Testing Strategies for Modern React Applications",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      readTime: 15,
      category: "Testing",
    },
    {
      title: "Building Design Systems with React and Storybook",
      thumbnail:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
      readTime: 12,
      category: "Design Systems",
    },
  ];

  // Mock comments data
  const mockComments = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content:
        "Excellent article! The architecture patterns you've outlined here are exactly what we've been implementing at our company. The folder structure approach has really helped us scale our team.",
      timestamp: new Date(Date.now() - 3600000),
      replies: [
        {
          id: 2,
          author: "Mike Rodriguez",
          avatar: "https://randomuser.me/api/portraits/men/22.jpg",
          content:
            "I agree! We've seen similar benefits. How do you handle shared components across different feature modules?",
          timestamp: new Date(Date.now() - 1800000),
        },
      ],
    },
    {
      id: 3,
      author: "David Kim",
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
      content:
        "The Redux Toolkit section was particularly helpful. I've been hesitant to migrate from plain Redux, but your examples make it look much more manageable.",
      timestamp: new Date(Date.now() - 7200000),
      replies: [],
    },
  ];

  useEffect(() => {
    setComments(mockComments);
  }, []);

  useEffect(() => {
    const observerOptions = {
      rootMargin: "-20% 0px -35% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHeading(entry.target.id);
        }
      });
    }, observerOptions);

    headings?.forEach((heading) => {
      const element = document.getElementById(heading?.id);
      if (element) observer?.observe(element);
    });

    return () => observer?.disconnect();
  }, []);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleAddComment = (comment) => {
    setComments([comment, ...comments]);
  };

  return (
    <>
      <Helmet>
        <title>{article?.title} - TechBlog Hub</title>
        <meta name="description" content={article?.subtitle} />
        <meta name="keywords" content={article?.tags?.join(", ")} />
        <meta property="og:title" content={article?.title} />
        <meta property="og:description" content={article?.subtitle} />
        <meta property="og:type" content="article" />
      </Helmet>
      <ReadingProgress />
      <Header />
      <div className="min-h-screen bg-background pt-16">
        <ArticleHeader
          article={article}
          onBookmark={handleBookmark}
          isBookmarked={isBookmarked}
        />

        <TableOfContents headings={headings} activeId={activeHeading} />

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-3 space-y-8">
              {/* Introduction */}
              <section id="introduction" className="prose prose-lg max-w-none">
                <p className="text-lg text-text-primary leading-relaxed">
                  Building scalable React applications requires more than just
                  knowing the framework—it demands a deep understanding of
                  architectural patterns, performance optimization techniques,
                  and maintainable code structures. In this comprehensive guide,
                  we'll explore proven strategies for creating React
                  applications that can grow with your team and user base.
                </p>

                <p className="text-text-primary leading-relaxed">
                  Whether you're working on a small startup project or a large
                  enterprise application, the principles and patterns covered in
                  this article will help you build more maintainable,
                  performant, and scalable React applications.
                </p>
              </section>

              {/* Architecture Overview */}
              <section id="architecture-overview" className="space-y-6">
                <h2 className="text-3xl font-bold text-text-primary">
                  Architecture Overview
                </h2>

                <p className="text-text-primary leading-relaxed">
                  A well-architected React application follows the principles of
                  separation of concerns, single responsibility, and dependency
                  inversion. Let's explore the key architectural patterns that
                  make this possible.
                </p>

                <div id="folder-structure" className="space-y-4">
                  <h3 className="text-2xl font-semibold text-text-primary">
                    Folder Structure
                  </h3>

                  <p className="text-text-primary leading-relaxed">
                    A consistent folder structure is the foundation of any
                    scalable application. Here's the structure we recommend for
                    large React applications:
                  </p>

                  <CodeBlock
                    language="text"
                    title="Recommended Folder Structure"
                    code={`src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (Button, Input, etc.)
│   └── common/         # Shared business components
├── features/           # Feature-based modules
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   └── dashboard/
├── hooks/              # Shared custom hooks
├── services/           # API and external service integrations
├── store/              # State management (Redux/Zustand)
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── constants/          # Application constants`}
                  />
                </div>

                <div id="component-patterns" className="space-y-4">
                  <h3 className="text-2xl font-semibold text-text-primary">
                    Component Patterns
                  </h3>

                  <p className="text-text-primary leading-relaxed">
                    Implementing consistent component patterns helps maintain
                    code quality and makes it easier for team members to
                    understand and contribute to the codebase.
                  </p>

                  <CodeBlock
                    language="jsx"
                    title="Component Pattern Example"
                    code={`// UserCard.jsx - Following consistent patterns
import React from 'react';
import { useUser } from '../hooks/useUser';
import Button from '../../components/ui/Button';
import { Avatar } from '../ui/Avatar';

interface UserCardProps {
  userId: string;
  onEdit?: (user: User) => void;
  className?: string;
}

export const UserCard: React.FC<UserCardProps> = ({
  userId,
  onEdit,
  className = ''
}) => {
  const { user, loading, error } = useUser(userId);

  if (loading) return <UserCardSkeleton />;
  if (error) return <ErrorMessage error={error} />;
  if (!user) return null;

  return (
    <div className={\`card \${className}\`}>
      <Avatar src={user.avatar} alt={user.name} />
      <div className="card-content">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        {onEdit && (
          <Button onClick={() => onEdit(user)}>
            Edit User
          </Button>
        )}
      </div>
    </div>
  );
};`}
                  />
                </div>
              </section>

              {/* Interactive Demo */}
              <InteractiveDemo
                title="Component Composition Example"
                description="See how component composition works in practice with this interactive example."
                initialCode={`const App = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <UserCard userId="123" />
      </Main>
      <Footer />
    </Layout>
  );
};`}
                liveCode={`// Interactive demo code would go here
const InteractiveExample = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};`}
              />

              {/* State Management */}
              <section id="state-management" className="space-y-6">
                <h2 className="text-3xl font-bold text-text-primary">
                  State Management
                </h2>

                <p className="text-text-primary leading-relaxed">
                  Effective state management is crucial for scalable React
                  applications. We'll explore both Redux Toolkit and Context API
                  approaches, and when to use each.
                </p>

                <div id="redux-toolkit" className="space-y-4">
                  <h3 className="text-2xl font-semibold text-text-primary">
                    Redux Toolkit Setup
                  </h3>

                  <p className="text-text-primary leading-relaxed">
                    Redux Toolkit simplifies Redux usage and eliminates much of
                    the boilerplate code. Here's how to set it up effectively:
                  </p>

                  <CodeBlock
                    language="javascript"
                    title="Redux Toolkit Store Configuration"
                    code={`// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../features/auth/authSlice';
import { dashboardSlice } from '../features/dashboard/dashboardSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    dashboard: dashboardSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;`}
                  />
                </div>

                <div id="context-api" className="space-y-4">
                  <h3 className="text-2xl font-semibold text-text-primary">
                    Context API Usage
                  </h3>

                  <p className="text-text-primary leading-relaxed">
                    For simpler state management needs, the Context API provides
                    a lightweight solution:
                  </p>

                  <CodeBlock
                    language="jsx"
                    title="Context API Implementation"
                    code={`// contexts/ThemeContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, isDark: !state.isDark };
    case 'SET_THEME':
      return { ...state, isDark: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { isDark: false });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};`}
                  />
                </div>
              </section>

              {/* Performance Optimization */}
              <section id="performance-optimization" className="space-y-6">
                <h2 className="text-3xl font-bold text-text-primary">
                  Performance Optimization
                </h2>

                <p className="text-text-primary leading-relaxed">
                  Performance optimization is critical for user experience and
                  application scalability. Let's explore key techniques for
                  optimizing React applications.
                </p>

                <div id="code-splitting" className="space-y-4">
                  <h3 className="text-2xl font-semibold text-text-primary">
                    Code Splitting
                  </h3>

                  <p className="text-text-primary leading-relaxed">
                    Code splitting allows you to split your code into smaller
                    chunks, which can be loaded on demand:
                  </p>

                  <CodeBlock
                    language="jsx"
                    title="Route-based Code Splitting"
                    code={`// App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from '../../components/ErrorBoundary';
import { LoadingSpinner } from './components/LoadingSpinner';

// Lazy load route components
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Settings = React.lazy(() => import('./pages/Settings'));

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}`}
                  />
                </div>

                <div id="memoization" className="space-y-4">
                  <h3 className="text-2xl font-semibold text-text-primary">
                    Memoization Strategies
                  </h3>

                  <p className="text-text-primary leading-relaxed">
                    Proper use of React.memo, useMemo, and useCallback can
                    significantly improve performance:
                  </p>

                  <CodeBlock
                    language="jsx"
                    title="Memoization Best Practices"
                    code={`// UserList.jsx
import React, { memo, useMemo, useCallback } from 'react';

const UserList = memo(({ users, onUserSelect, searchTerm }) => {
  // Memoize expensive computations
  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  // Memoize event handlers
  const handleUserClick = useCallback((userId) => {
    onUserSelect(userId);
  }, [onUserSelect]);

  return (
    <div className="user-list">
      {filteredUsers.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onClick={() => handleUserClick(user.id)}
        />
      ))}
    </div>
  );
});

// Only re-render if props actually change
const UserCard = memo(({ user, onClick }) => (
  <div className="user-card" onClick={onClick}>
    <h3>{user.name}</h3>
    <p>{user.email}</p>
  </div>
));`}
                  />
                </div>
              </section>

              {/* Conclusion */}
              <section id="conclusion" className="space-y-4">
                <h2 className="text-3xl font-bold text-text-primary">
                  Conclusion
                </h2>

                <p className="text-text-primary leading-relaxed">
                  Building scalable React applications requires careful
                  consideration of architecture, state management, and
                  performance optimization. The patterns and techniques covered
                  in this article provide a solid foundation for creating
                  maintainable and performant applications that can grow with
                  your needs.
                </p>

                <p className="text-text-primary leading-relaxed">
                  Remember that scalability isn't just about handling more
                  users—it's also about making your codebase maintainable for
                  larger development teams and more complex feature
                  requirements. By following these architectural patterns and
                  best practices, you'll be well-equipped to build React
                  applications that stand the test of time.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Lightbulb"
                      size={24}
                      className="text-primary flex-shrink-0 mt-1"
                    />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">
                        Key Takeaways
                      </h4>
                      <ul className="space-y-2 text-sm text-text-primary">
                        <li>
                          • Implement a consistent folder structure based on
                          features
                        </li>
                        <li>
                          • Use appropriate state management solutions for your
                          use case
                        </li>
                        <li>
                          • Optimize performance with code splitting and
                          memoization
                        </li>
                        <li>
                          • Follow component patterns for maintainable code
                        </li>
                        <li>
                          • Plan for scalability from the beginning of your
                          project
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Author Bio */}
              <AuthorBio author={article?.author} />

              {/* Comments */}
              <CommentSection
                comments={comments}
                onAddComment={handleAddComment}
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <RelatedArticles articles={relatedArticles} />

              <div className="sticky top-24">
                <NewsletterSignup />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetail;
