document.addEventListener('DOMContentLoaded', function() {
  const headContent = `
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="images/lmo-logo-icon.png" rel="icon" type="image/png">
    <link href="css/all.min.css" rel="stylesheet">
    <link href="css/output.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/Vazirmatn-Variable-font-face.css" rel="stylesheet">
    <script defer src="https://unpkg.com/tailwindcss-intersect@2.x.x/dist/observer.min.js"></script>
    <title>Libre Mobile Os</title>
  `;
  
  document.head.insertAdjacentHTML('afterbegin', headContent);
});