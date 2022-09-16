import '../styles/globals.scss';
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app';
import English from '../content/compiled-locales/en.json';
import Spanish from '../content/compiled-locales/es.json';
import German from '../content/compiled-locales/de.json';
// import French from "../content/compiled-locales/fr.json";
// import Hindi from "../content/compiled-locales/hi.json";
import Italian from '../content/compiled-locales/it.json';
// import Turkish from "../content/compiled-locales/tr.json";
import Portuguese from '../content/compiled-locales/pt.json';
import Hungarian from '../content/compiled-locales/hu.json';
import Chinese from '../content/compiled-locales/cn.json';
import Russia from '../content/compiled-locales/ru.json';
// import Romanian from "../content/compiled-locales/ro.json";
// import Slovak from "../content/compiled-locales/sk.json";
// import Chinese from "../content/compiled-locales/zh.json";
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleRouteChange = (url: string) => {
    window.gtag('config', 'G-1XC1836VXN', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const [shortLocale] = router.locale ? router.locale.split('-') : ['en'];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'en':
        return English;
      case 'es':
        return Spanish;
      case 'de':
        return German;
      // case "fr":
      //   return French
      // case "hi":
      //   return Hindi
      case 'it':
        return Italian;
      // case "tr":
      //   return Turkish
      case 'pt':
        return Portuguese;
      case 'hu':
        return Hungarian;
      case 'cn':
        return Chinese;
      case 'ru':
        return Russia;
      // case "zh":
      //   return Chinese;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YFEV1NQGXE" />
      <Script
        id="analytics"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YFEV1NQGXE', { page_path: window.location.pathname });
            `,
        }}
      />
      <ThemeProvider attribute="class">
        <IntlProvider locale={shortLocale} messages={messages} onError={() => null}>
          <NextNProgress color="#e74c3c" />
          <Component {...pageProps} />
        </IntlProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
