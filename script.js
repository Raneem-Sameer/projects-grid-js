(() => {
  const n = 18, name = "youssef";

  const style = `
    *{box-sizing:border-box;margin:0;padding:0}
    body{
      font-family:sans-serif;
      background:linear-gradient(135deg,#f07ad9,#e879f9);
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      height:100vh;overflow:hidden;direction:ltr;
    }
    h1{color:#2e0e6c;text-transform:lowercase;margin-bottom:25px}
    .grid{
      display:grid;
      grid-template-columns:repeat(6,1fr);
      gap:25px;
      width:90%;
    }
    .card{
      background:#fff;
      border-radius:12px;
      padding:35px 0;
      text-align:center;
      box-shadow:0 10px 20px rgba(0,0,0,.2);
      transition:.2s;
    }
    .card:hover{transform:translateY(-5px)}
    .proj{color:#6b21a8;font-weight:700;font-size:18px;margin-bottom:6px}
    .auth{color:#6b21a8;font-size:13px}
  `;
  document.head.innerHTML += `<style>${style}</style>`;

  const grid = document.createElement("div");
  grid.className = "grid";
  for (let i = 1; i <= n; i++) {
    grid.innerHTML += `
      <div class="card">
        <div class="proj">project ${i}</div>
        <div class="auth">${name}</div>
      </div>`;
  }

  document.body.innerHTML = `<h1>projects</h1>`;
  document.body.appendChild(grid);
})();
