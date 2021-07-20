import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { CoveragesPage } from './pages/CoveragesPage';
import { MessageBox } from './components/MessageBox';
import { MenuBar } from './components/MenuBar';

const pages = [
  { id: 1, to: "/home", label: "Home", component: HomePage },
  { id: 2, to: "/coverages", label: "Coverages", component: CoveragesPage },
];

export const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <header id="page-header" className="row">
          <div className="col-md-4">
            <Link to="/">
              <img src="/images/LMI_H_BLUE_RGB.png" alt="LM Logo" />
            </Link>
          </div>
          <MenuBar menuItems={pages} />
        </header>
        <div className="row">
          <main id="content" className="col-md-8">
            <Switch>
              {pages.map(page =>
                <Route key={page.id} path={page.to} component={page.component} />)}
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
            <small>&copy; {new Date().getFullYear()} LM. All Rights Reserved.</small>
          </div>
        </footer>
      </div>
    </Router>
  );
}
