export default ({ meta, body, data }) => {
  return process.env.NODE_ENV === 'production' ? `
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        ${meta}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css">
        <link rel="stylesheet" href="/assets/styles.css">
      </head>
      <body>
        <div id="root">${body}</div>
        <script>window.__INITIAL_STATE__ = { data: ${data} }</script>
        <script defer src="/assets/app.bundle.js"></script>
      </body>
    </html>
  ` : `
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        ${meta}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css">
      </head>
      <body>
        <div id="root"></div>
        <script>window.__INITIAL_STATE__ = { data: ${data} }</script>
        <script defer src="/assets/app.bundle.js"></script>
      </body>
    </html>
  `
}
