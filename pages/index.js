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
        <Image
          src="/images/movtech2030.png"
          width="855px"
          height="439px"
          alt="Movimento Tech 2030"
        />

        <div className="max-w-xl text-base">
          <p className="mt-0 max-w-md mx-auto">
            Em 2030, nós transformamos o Brasil em um dos líderes globais de{" "}
            <span style={{ color: "#0097a7" }}>
              inclusão produtiva por meio da tecnologia.
            </span>
          </p>
          <p className="mt-3 max-w-md mx-auto">
            Atendemos a demanda por profissionais de tecnologia e{" "}
            <span style={{ color: "#0097a7" }}>aceleramos um ecossistema</span>{" "}
            que forma talentos em escala.
          </p>
          <p className="mt-3 max-w-lg mx-auto">
            Somos um grupo de pessoas comprometidas com o futuro do Brasil que{" "}
            <span style={{ color: "#0097a7" }}>
              vai além das suas empresas e organizações,{" "}
            </span>
            trabalhando de forma coordenada para incluir talentos em tecnologia
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            target="_blank"
            href="https://join.slack.com/t/movimentotech/shared_invite/zt-1271m6lao-HxobjZezt_RRjSlY8PQicQ"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Slack &rarr;</h3>
            <p className="mt-4 text-xl">
              Fique informado e contribua diretamente para nosso movimento.
            </p>
          </a>

          <a
            target="_blank"
            href="https://drive.google.com/drive/folders/1DHTU-6CNcYOU56bUv3skH5AcBd9IXiQ2?usp=sharing"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Atas e Drive &rarr;</h3>
            <p className="mt-4 text-xl">
              Acompanhe o progresso da taskforce do Movimento.
            </p>
          </a>

          <a
            target="_blank"
            href="https://docs.google.com/document/d/1i42fBe9VSYfPe_w26_cuVjHRmIKsUS8vlf7kUebCj2Y/edit"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Declaração 2030 &rarr;</h3>
            <p className="mt-4 text-xl">
              Conheça o futuro com o qual estamos comprometidos.
            </p>
          </a>

          <a
            target="_blank"
            href="https://docs.google.com/presentation/d/1sgFDVCdtK6LKz9KXOMS8HZa9VVu4Q0azDs5bQpOCQW4/edit#slide=id.geaa7285690_0_82"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Causadores &rarr;</h3>
            <p className="mt-4 text-xl">
              Conheça o grupo de pessoas e projetos dispostos a serem causas
              desse futuro.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://movtech.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito por pessoas de · iFood · XP · Fundação Behring · Descomplica ·
          Arco Instituto · VTEX · desde 2021
          {/* <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /> */}
        </a>
      </footer>
    </div>
  );
}
