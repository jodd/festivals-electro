export default ({ status, meta, body, data }) => {
  const PROD = process.env.NODE_ENV === 'production'
  return PROD ? `
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>${meta.title}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta property="og:title" content="${meta.title}">
        <meta property="og:url" content="${meta.url}">
        <meta property="og:image" content="${meta.image}">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css">
        <link rel="stylesheet" href="/assets/styles.css">
      </head>
      <body>
        <div id="root">${body}</div>
        <script>window.__INITIAL_STATE__ = { status: ${status}, data: ${data} }</script>
        <script defer src="/assets/app.bundle.js"></script>
      </body>
    </html>
  ` : `
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>${meta.title}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta property="og:title" content="${meta.title}">
        <meta property="og:url" content="${meta.url}">
        <meta property="og:image" content="${meta.image}">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css">
      </head>
      <body>
        <div id="root"></div>
        <script>window.__INITIAL_STATE__ = { status: ${status}, data: ${data} }</script>
        <script defer src="/assets/app.bundle.js"></script>
      </body>
    </html>
  `
}
