import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import '@fortawesome/fontawesome-free/css/all.css';


const theme = {
  colors: {
    primary: '#0070f3',
  },
}


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

        <style jsx global>{`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
        Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      line-height: 1.6;
      font-size: 18px;
      background: #F4F4F4;
    }

    * {
      box-sizing: border-box;
    }

    a {
      color: #0070f3;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    img {
      max-width: 100%;
      display: block;
    }

    main {
      display: flex;
    }

    article{
      background: white;
      padding: 1rem;
    }
    `}</style>

      </ThemeProvider>

    )
  }
}

