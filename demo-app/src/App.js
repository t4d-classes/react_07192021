import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { CoveragesPage } from './pages/CoveragesPage';
import { MessageBox } from './components/MessageBox';

export const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <header id="page-header" className="row">
          <div className="col-md-12">
            <Link to="/">
              <img src="/images/LMI_H_BLUE_RGB.png" alt="LM Logo" />
            </Link>
          </div>
        </header>
        <nav id="menu-bar" className="row">
          <div className="col-md-12">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/coverages">Coverages</Link></li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <main id="content" className="col-md-8">
            <Switch>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/coverages">
                <CoveragesPage />
              </Route>
              <Route path="/" exact>
                <HomePage />
              </Route>
            </Switch>
          </main>
          <aside id="sidebar" className="col-md-4">
            <MessageBox headerText="Program Resources">
              Some content
            </MessageBox>
            <MessageBox headerText="​Small Business Appetite Guide">
              Some content
            </MessageBox>
          </aside>
        </div>
        <footer id="page-footer" className="row">
          <div className="col-md-12">
            <small>&copy; {new Date().getFullYear()} LM. All Rights Reserve.</small>
          </div>
        </footer>
      </div>
    </Router>
  );
}
