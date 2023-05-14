import { Footer } from './Footer';
import Header from './Header';

const Layout = (Component) => (props) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout_body">
        <Component {...props} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
