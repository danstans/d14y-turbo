import "../styles/globals.css";
import "../styles/output.css";
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
      <Component {...pageProps} />
    </VisionProvider>
  );
}

export default MyApp;
