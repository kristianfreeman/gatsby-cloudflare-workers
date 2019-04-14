addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

const constructResponse = (response, body, headers = {}) =>
  new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers: Object.assign({}, response.headers, headers),
  })

const githubRepo = "signalnerve/gatsby-workers"
const branch = "gh-pages"

async function handleRequest(request) {
  const parsedUrl = new URL(request.url)
  let path = parsedUrl.pathname

  if (path.endsWith("/")) {
    path = "/index.html"
  }

  const response = await fetch(
    `https://cdn.jsdelivr.net/gh/${githubRepo}@${branch}${path}`
  )

  if (path.endsWith("html")) {
    return constructResponse(response, response.body, {
      "Content-Type": "text/html",
    })
  } else {
    return response
  }
}
