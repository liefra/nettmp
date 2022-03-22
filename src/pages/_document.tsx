import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html className={'h-full'}>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;600;700;900&display=optional"
                    rel="stylesheet"
                />
            </Head>
            <body className={'h-full'}>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
