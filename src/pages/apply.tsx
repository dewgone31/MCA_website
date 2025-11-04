import React from "react";
import { useEffect } from "react";
import Head from "next/head";

export default function ApplyPage() {
useEffect(() => {
  // ✅ Prevent double-injection in dev / StrictMode
  if (document.getElementById("mauticScriptLoaded")) return;

  const script = document.createElement("script");
  script.id = "mauticScriptLoaded";
  script.src = "https://app.brenthaus.com/form/generate.js?id=4";
  script.async = true;

  const container = document.getElementById("formContainer");
  if (container) {
    container.appendChild(script);
  }
}, []);


  return (
    <>
      <Head>
        <title>LYEVEX | Application</title>
      </Head>

      <div
        id="formContainer"
        style={{
          padding: "24px",
          maxWidth: "650px",
          margin: "0 auto",       // centers form nicely
          boxSizing: "border-box" // keeps padding sane
        }}
      />
    </>
  );
}
