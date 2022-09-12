import React, { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
// styles
import './main.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// i18n
import './i18n/i18n';
const Home = lazy(() => import('./pages/home/home'));
import Head from './components/head/head';
import Post from './pages/post/post';

const rootElement = document.getElementById('app') as Element;
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="container">
                    <Head>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/post">
                            <Post />
                        </Route>
                    </Head>
                </div>
            </Suspense>
        </Router>
    </StrictMode>,
);
