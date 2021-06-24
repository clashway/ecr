import Header from './Header';
import Footer from './Footer';

const Layout = props => {
  return (
    <div className="flex flex-col h-screen font-raleway font-base">
      <div className="header px-24">
        <Header />
      </div>
      <main className="flex-grow main-content px-24 pt-12">
        {props.children}
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;