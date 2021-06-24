import Header from './Header';

const Layout = props => {
  return (
    <div className="container main-container">
      <div className="header">
        <Header />
      </div>
      <main className="main-content flex justify-center align-center pt-24 mx-30">
        {props.children}
      </main>
    </div>
  );
};

export default Layout;