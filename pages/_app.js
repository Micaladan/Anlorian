import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import Nav from '../components/Nav';
import Cart from '../components/Cart';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// TODO: Swap with our own
import '../components/styles/nprogress.css';
import { CartStateProvider } from '../lib/cartState';

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <CartStateProvider>
        <Page>
          {/* <Nav />
          <Cart /> */}
          <Component {...pageProps} />
        </Page>
      </CartStateProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
