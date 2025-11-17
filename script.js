// ← ← ← ČIA REDAGUOK SKANDUOTES
const scandals = [
  
"title": "Kai žaidžia šis žaidėjas",
"content": "Kai žaidžia šis žaidėjas\nVėl skamba jo daina\nBudėnas mylimiausias nugalės jisai bet ką\nPakilsime į kovą\nŠiandien visa jėga\nVisi mes šiandien tikim Mato Budėno jėga\nOlė olė olė\nOlė olė olė\nVisi mes šiandien tikim Mato Budėno jėga"
},
{
"title": "Tik Budėnas mano širdy",
"content": "Tik Budėnas mano širdy\nJis stipriausias, žino visi\nŽIV tribūnai nėra lygių\nVisada mes būsim kartu\nLai lai lai lai lai…"
},
{
"title": "Jeigu myli Budėną",
"content": "Jeigu myli tu Budėną, tai suplok\nJeigu myli tu Budėną, tai suplok\nJeigu myli tu Budėną\nJeigu myli tu Budėną\nJeigu myli tu Budėną, tai suplok!"
},
{
"title": "Budzė - visagalis",
"content": "Budzės nesustabydsi\nTik pirmyn ne atgal\nPrieš Budzę lenkiasi visi\nBudzė – visagalis"
},
{
"title": "Dėl Budėno",
"content": "Budėną aš myliu galbūt labiau\nGalbūt labiau, nei jis Godą myli\nLai lai lai lai lai lai\nBudėną aš myliu galbūt labiau\nGalbūt labiau, nei jis Godą myli"
},
{
"title": "Atsistokite visi visi",
"content": "Atsistokite visi visi\nKas palaikot VKM penki\nRezultatas mums nėra svarbus\nMatas Budzė patvarkys visus"
},
{
"title": "Matas Budėnas",
"content": "Matas Budėnas\nPasikūręs visada\nMatas Budėnas\nMergos jam tik galvoje\nMatas Budėnas\nProto išvis nebėra\nMatas Budėnas\nLa la la la la la la la la…"
},
{
"title": "Budzės diena",
"content": "Šiandien yra Budzės diena\nGoda jam tik ranka pasiekiama\nSkamba linksmai Budzės daina\nMatas Budėnas mūsų širdyse"
},
{
"title": "Budzė",
"content": "Budzė\nŽinau, kad gali\nJis priekabiauti\nO visą kitą tik detalės\nLai lai lai lai lai lai lai..."
},
{
"title": "Ei, Budzės fanai",
"content": "Ei, Budzės fanai,\nVisi rankas į viršų\nBudzė aikštelėj\nAplink viską pamirškim\nŠitam žaidėjui\nTiktai mergos terūpi\nGarbė didžiausia\nBudzėi su merga būti\nLa lai lai lai lai la la..."
},
{
"title": "Ten, kur stovi miestas",
"content": "Ten, kur stovi miestas\nDidis nuo senų laikų\nŽaidžia ten čiuvakas\nĮdomiausias iš visų\nBudzė, Budzė, Budzė\nJis visom rašys drauge\nMatas, Matas, Matas\nPaprastekas visada\nLai la lai la lai la…"
}// kad perkelti i kita eilute galima rasyti teksta per kelias eilutes arba naudoti \n

];
// → → → TIEK

// ----------- AUTOMATINĖ GENERACIJA -----------
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards-container");

  scandals.forEach((scandal, index) => {
    const id = `scandal-${index}`;

    // HTML template
    const cardHTML = `
      <article class="card">
        <button class="card-header scandal-toggle" data-target="${id}">
          <div class="card-title-wrap">
            <h2 class="card-title">${scandal.title}</h2>
          </div>

          <span class="chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>

        <div id="${id}" class="card-body scandal-content">
          <p style="white-space: pre-line;">${scandal.content}</p>
        </div>
      </article>
    `;

    container.insertAdjacentHTML("beforeend", cardHTML);
  });

  // Toggle behavior (galima daug atidaryti vienu metu)
  const toggles = document.querySelectorAll(".scandal-toggle");

  toggles.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const content = document.getElementById(targetId);

      if (!content) return;

      const isOpen = content.classList.contains("open");

      if (isOpen) {
        content.classList.remove("open");
        button.classList.remove("expanded");
      } else {
        content.classList.add("open");
        button.classList.add("expanded");
      }
    });
  });
});
