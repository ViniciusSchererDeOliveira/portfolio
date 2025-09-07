import { Router, Route } from 'preact-iso';
import Home from '@/screens/home';
import NotFound from '@/screens/404';

export function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route default component={NotFound} />
    </Router>
  );
}
