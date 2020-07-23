import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    )
}
