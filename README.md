# Gatsby.js + Cloudflare Workers 🌥👷‍♀️

This is an example project showing how you can build a website with [Gatsby.js](https://www.gatsbyjs.org/), and serve it at the edge using [Cloudflare Workers](http://bit.ly/gatsby-example-cf-workers-landing), managed via the [Serverless framework](https://serverless.com/).

[![header](./media/header.png)](http://bit.ly/gatsby-example-cf-workers-landing)

## Why?

Cloudflare Workers allows developers to write and deploy applications at the edge. When a user requests your site, your Worker will serve it directly from one of our [175+ data centers](http://bit.ly/gatsby-example-cf-network) around the world. Static sites are perfect fit for building extremely fast, high availability sites, and Cloudflare's default caching behavior will result in a high cache rate for the bulk of your site. The result is an easy-to-manage site, hosted [at the edge](http://bit.ly/gatsby-example-cf-edge-server), with the ability for further customization via editing the provided [worker script](https://github.com/signalnerve/gatsby-cloudflare-workers-example/blob/master/worker.js), [Serverless config file](https://github.com/signalnerve/gatsby-cloudflare-workers-example/blob/master/serverless.yml), and [deploy process](https://github.com/signalnerve/gatsby-cloudflare-workers-example/blob/master/package.json#L62).

## How it works

1. The website is built locally using Gatsby (for development instructions, see [`GATSBY_README.md`](https://github.com/signalnerve/gatsby-cloudflare-workers/blob/master/GATSBY_README.md))
2. The site is published to GitHub on the `gh-pages` branch - see the "Setup" section
3. A Cloudflare Worker script runs at your domain, and takes the requested path (e.g. `/about`) and requests it from the static version of your site on GitHub, via [jsDelivr](https://www.jsdelivr.com/). (Quick note: jsDelivr is powered by Cloudflare, so you'll get a speed boost by staying within Cloudflare's DNS + caching!)

## Development

Begin by installing the dependencies for this project (and additionally, install `serverless` and `gatsby` globally if you don't already have them):

```
npm install -g serverless gatsby
npm install
```

Fill out your Cloudflare API and zone details in [`.env`](https://github.com/signalnerve/gatsby-cloudflare-workers/blob/master/.env), using [`.env.example`](https://github.com/signalnerve/gatsby-cloudflare-workers/blob/master/.env) as a reference:

```
cp .env.example .env
```

Develop your site locally:

```
gatsby develop
```

When you're ready to deploy, build and deploy to GitHub:

```
npm run deploy
```

This builds the site (`gatsby build`) and pushes it to the `gh-pages` branch on GitHub (using [`gh-pages`](https://github.com/tschaub/gh-pages)).

Deploy your worker to your Cloudflare account:

```
serverless deploy
```

Go to your configured URL to confirm that your website is being served with Cloudflare Workers!

