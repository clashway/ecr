import Header from './Header';
import Footer from './Footer';

const Layout = props => {
  return (
    <div className="flex flex-col h-screen font-raleway font-base">
      <div className="header w-full max-w-screen-2xl m-auto pl-8 xl:pl-0">
        <Header />
      </div>
      <main className="flex-grow main-content pt-8 px-8 max-w-screen-2xl m-auto">
        {props.children}
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;