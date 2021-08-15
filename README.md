# Gatsby.js + Cloudflare Workers 🌥👷‍♀️

This is an example project showing how you can build a website with [Gatsby.js](https://www.gatsbyjs.org/), and serve it at the edge using [Cloudflare Workers](https://workers.cloudflare.com).

## Why?

Cloudflare Workers allows developers to write and deploy applications at the edge. When a user requests your site, your Worker will serve it directly from one of our [hundreds of data centers](http://bit.ly/gatsby-example-cf-network) around the world. Static sites are perfect fit for building extremely fast, high availability sites, and Cloudflare's default caching behavior will result in a high cache rate for the bulk of your site. The result is an easy-to-manage site, hosted [at the edge](http://bit.ly/gatsby-example-cf-edge-server), with the ability for further customization via editing the provided [Workers function](https://github.com/signalnerve/gatsby-cloudflare-workers/blob/master/index.js).

## How it works

1. The website is built locally using Gatsby (for development instructions, see [`GATSBY_README.md`](https://github.com/signalnerve/gatsby-cloudflare-workers/blob/master/GATSBY_README.md))
2. The site is built and uploaded using Workers Sites
3. A Cloudflare Worker script runs at your domain, and takes the requested path (e.g. `/about`) and requests it from Workers KV.

## Setup

Begin by installing the dependencies for this project (and additionally, install `wrangler` and `gatsby` globally if you don't already have them):

```
npm install -g @cloudflare/wrangler gatsby
```

You can use this repository as a template to build your own static site, using the `wrangler generate` command.

```
wrangler generate [Worker Name] https://github.com/signalnerve/gatsby-cloudflare-workers/
```

If you haven't installed Wrangler yet, try our [Quick Start guide](https://workers.cloudflare.com/docs/quickstart/cli-setup/) for installing Wrangler, and getting up and running with Cloudflare Workers!

## Development

Develop your site locally:

```
npm run start
```

Develop your Worker with the Gatsby site locally:

```
npm run start-worker
```

When you're ready to deploy, build and deploy to GitHub:

```
npm run deploy
```
