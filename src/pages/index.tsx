import Head from 'next/head';
import SignIn from './signin';

export default function Home() {
  return (
    <>
      <Head>
        <title>Quiz App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SignIn />
      </main>
    </>
  );
}
