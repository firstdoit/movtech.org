import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Primary Meta Tags */}
        <title>Movimento Tech — Inclusão produtiva pela tecnologia.</title>
        <meta
          name="title"
          content="Movimento Tech — Inclusão produtiva pela tecnologia."
        />
        <meta
          name="description"
          content="Somos um grupo de pessoas comprometidas com o futuro do Brasil que vai além das suas empresas e organizações, trabalhando de forma coordenada para incluir talentos em tecnologia."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://movtech.org/" />
        <meta
          property="og:title"
          content="Movimento Tech — Inclusão produtiva pela tecnologia."
        />
        <meta
          property="og:description"
          content="Somos um grupo de pessoas comprometidas com o futuro do Brasil que vai além das suas empresas e organizações, trabalhando de forma coordenada para incluir talentos em tecnologia."
        />
        <meta property="og:image" content="/images/movtech2030.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://movtech.org" />
        <meta
          property="twitter:title"
          content="Movimento Tech — Inclusão produtiva pela tecnologia."
        />
        <meta
          property="twitter:description"
          content="Somos um grupo de pessoas comprometidas com o futuro do Brasil que vai além das suas empresas e organizações, trabalhando de forma coordenada para incluir talentos em tecnologia."
        />
        <meta property="twitter:image" content="/images/movtech2030.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        // TODO! :)
      </main>
    </div>
  );
}
