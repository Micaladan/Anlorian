import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import Nav from '../components/Nav';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// TODO: Swap with our own
import '../components/styles/nprogress.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Nav />
      <Component {...pageProps} />
    </Page>
  );
}
