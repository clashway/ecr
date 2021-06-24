import Head from 'next/head';

const Layout = props => {
  return (
    <div className="flex justify-center align-center pt-24 mx-30">
      <main className="main-content">{props.children}</main>
    </div>
  );
};

export default Layout;