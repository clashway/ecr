import Header from './Header';

const Layout = props => {
  return (
    <div className="container main-container px-24 font-raleway text-base">
      <div className="header">
        <Header />
      </div>
      <main className="main-content flex pl-6 pt-24">
        {props.children}
      </main>
    </div>
  );
};

export default Layout;