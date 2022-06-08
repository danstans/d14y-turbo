import "../styles/globals.css";
import "../styles/output.css";
import Script from "next/script";
import { useEffect } from "react";

import { VisionProvider } from "vision";

function MyApp({ Component, pageProps }) {
  const updateEmoji = () => {
    const emojis = ["🚀", "👋", "🔥", "🤣", "✨", "🎉"];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    document
      .getElementById("favicon")
      .setAttribute(
        "href",
        `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>`
      );
  };

  useEffect(() => {
    updateEmoji();
  }, []);

  return (
    <VisionProvider>
      {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
        process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="lazyOnload"
          />
        )}
      <Component {...pageProps} />
    </VisionProvider>
  );
}

export default MyApp;
