const config = {
  subdomain: "blog1.astrovpn.co",
  root: "astrovpn.co",
  blogPath: "blog",
};

async function handleRequest(request) {
  const url = new URL(request.url);
  const targetPath = url.pathname;

  let response = await fetch(`https://${config.subdomain}${targetPath}`);

  if (
    targetPath.includes(`/${config.blogPath}/favicon.png`) ||
    targetPath.includes(`/${config.blogPath}/sitemap.xsl`) ||
    targetPath.includes(`/${config.blogPath}/assets/`) ||
    targetPath.includes(`/${config.blogPath}/public/`) ||
    targetPath.includes(`/${config.blogPath}/content/`)
  ) {
    return response;
  }

  let body = await response.text();
  body = body.split(config.subdomain).join(config.root);
  response = new Response(body, response);
  return response;
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
