import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";


const config: DocsThemeConfig = {
  logo: (
    <>
      <img src={"https://www.worqhat.com/resources/WorqHat%20TM%20Logo.png"} width={130}
           height={130} alt={"WorqHat Logo"}></img>
    </>
  ),
  project: {
    link: "https://github.com/WorqHat/WorqHat-API-Docs"
  },
  chat: {
    link: "https://discord.com/invite/KHh9mguKBx"
  },
  docsRepositoryBase: "https://github.com/WorqHat/WorqHat-API-Docs",
  footer: {
    text: "© 2023. Winlysis Pvt. Ltd., India All rights reserved."
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – WorqHat API Docs",
      themeColor: "#00071B",
      openGraph: {
        type: "website",
        locale: "en_US",
        site_name: "WorqHat API Docs"
      },
      twitter: {
        handle: "@worqhat",
        site: "@worqhat",
        cardType: "summary_large_image"
      },
      additionalMetaTags: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        },
        {
          name: "author",
          content: "WorqHat"
        }, {
          name: "keywords",
          content: "WorqHat, WorqHat API, WorqHat API Docs, WorqHat API Documentation, WorqHat" +
            " API Reference, WorqHat API Reference Docs, WorqHat API Reference Documentation, WorqHat API"
        }
      ],
      additionalLinkTags: [
        {
          rel: "icon",
          href: "https://www.worqhat.com/resources/favicon/favicon-32x32.png",
          type: "image/png",
          size: "32x32"
        },
        {
          rel: "icon",
          href: "https://www.worqhat.com/resources/favicon/favicon-16x16.png",
          type: "image/png",
          size: "16x16"
        }
      ]
    };
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://developers.worqhat.com" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return <>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || "WorqHat API Docs"} />
      <meta property="og:description"
            content={frontMatter.description || "WorqHat is a powerful and easy-to-use “No-Code drag & drop Workspace” powered by Generative AI Technologies that lets you build your own brandable Custom Apps, Workflows, and Automation for every part of your business. Whether you are a Solopreneur; a Start-up; Micro, Small or Medium Businesses or a Large Scale Enterprise, you can build workflows and automation for every part of your business functions — Sales and Marketing, Finance, Human Resource Management and Operations. It allows you to automate workflows so that your team can focus on what really matters: growing the business. Benefit from a global ecosystem of creators and Industry Experts that work together with our team of Developers, we make sure that each application is easy to use and works seamlessly with your existing data."} />
    </>;
  },
  banner: {
    key: "1.0-release",
    text: <a href="https://playground.worqhat.app/worqbot" target="_blank">
      🎉 Our Conversational Language Model WorqBot is now live for Beta use! Try out Now. 🤖
    </a>
  }
};

export default config
