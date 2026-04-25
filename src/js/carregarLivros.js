const token = localStorage.getItem("token");

if (!token) {
    alert("Você precisa logar!");
    window.location.href = "../../index.html";
}

async function carregarLivros() {
    const res = await fetch("https://babel-backend.onrender.com/api/livros", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await res.json();

    const grid = document.getElementById("gridLivros");
    grid.innerHTML = "";

    // ⚠️ Ajuste aqui dependendo do retorno da sua API
    const livros = data.dados || data;

    livros.forEach(livro => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
    <div class="img">📚</div>
    <h3>${livro.titulo}</h3>
    <p>${livro.autor}</p>
    <p><strong>${livro.tipo}</strong></p>
    `;

        grid.appendChild(card);
    });
}

// carregar ao abrir página
carregarLivros();

