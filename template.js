function pagina(titulo, conteudo){

return `
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">

<style>

body{
    margin:0;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

    font-family:'Segoe UI', sans-serif;

    background: linear-gradient(135deg,#ff9ecf,#ff6fb5,#ff3f9f);
}

.card{
    background: rgba(255,255,255,0.25);
    backdrop-filter: blur(12px);

    padding:40px 60px;
    border-radius:18px;

    text-align:center;

    box-shadow:0 20px 40px rgba(0,0,0,0.2);
}

h1{
    margin-bottom:20px;
    color:#7a004f;
}

p{
    font-size:22px;
    font-weight:600;
    color:#4b0030;
}

</style>

</head>

<body>

<div class="card">
<h1>${titulo}</h1>
<p>${conteudo}</p>
</div>

</body>
</html>
`
}

export default pagina