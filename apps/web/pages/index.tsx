import Head from "next/head";
import { Button } from "ui";

export default function Web() {
  return (
    <div className="transition duration-500 ease-in-out h-screen flex flex-col justify-center md:items-end md:justify-end lg:pb-40 2xl:pb-80 bg-white dark:bg-gray-800 dark:text-white">
      <Head>
        <title>d14y</title>
        <link
          rel="icon"
          id="favicon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'></text></svg>"
        />
      </Head>

      <div className="container mx-auto px-4 lg:px-8 lg:leading-relaxed">
        <span className="font-bold text-3xl lg:text-5xl">
          Hey!
          <span className="pl-4 wave">👋</span>
        </span>
        <br />
        <span className="font-bold text-3xl lg:text-5xl">
          I&lsquo;m Daniel Stansberry.
        </span>
        <br />
        <span className="hidden md:block text-center md:text-left lg:text-2xl">
          Software engineer based in Santa Monica.
        </span>
        <span className="hidden md:block text-center md:text-left lg:text-2xl">
          Currently at Capable Health.
        </span>
        <div className="hidden md:block lg:text-2xl">
          <span>Previously at Odin Labs, Renew Health and G.E Digital.</span>
        </div>
        <Button>asdf</Button>
      </div>
    </div>
  );
}
