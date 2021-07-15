import * as React from "react";
import { Helmet } from "react-helmet";

export default class Layout extends React.Component<{}, {}> {
  override render() {
    return (
      <>
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
          title={((s: string): string =>
            [""].includes(s)
              ? !!s
                ? `${s[0]?.toUpperCase()}${s.slice(1)} | Rapid JAMPlate`
                : "Rapid JAMPlate | askjag07"
              : "Not Found | Rapid JAMPlate")(
            window.location.pathname.replace(/\//g, "")
          )}
          defer={false}
        >
          <meta charSet="utf-8" />
          <meta name="robots" content="index" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="Rapid JAMPlate" />
          <meta
            name="keywords"
            content="askjag07, akshaj jagarapu, rapid jamplate, gatsby starter, rapid gatsby starter, jamplate gatsby starter"
          />
          <meta name="author" content="Akshaj Jagarapu" />
          <meta name="image" content="https://yourdomain.tld/i.png" />
          <script type="application/ld+json">
            {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://yourdomain.tld",
          "name": "Rapid JAMPlate",
          "url": "https://yourdomain.tld",
          "logo":
            "https://yourdomain.tld/i.png",
          "telephone": "+11234567890",
          "description": "Rapid JAMPlate",
          "speakable": {
            "@type": "SpeakableSpecification",
            "xpath": [
              "/html/head/title",
              "/html/head/meta[@name='description']/@content"
            ]
          }
        }
      `}
          </script>
        </Helmet>
        <div>{this.props.children}</div>
      </>
    );
  }
}
