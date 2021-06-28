import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

const Layout = props => {
  return (
    <div className="flex flex-col h-screen font-raleway font-base">
      <div className="header">
        <Header />
      </div>
      <Banner title="Contact" />
      <main className="main-content">
        {props.children}
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;