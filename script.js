// ← ← ← ČIA REDAGUOK SKANDUOTES
const scandals = [
  
{
  title: `Kai žaidžia šis žaidėjas`,
  content: `Kai žaidžia šis žaidėjas
Vėl skamba jo daina
Budėnas mylimiausias nugalės jisai bet ką
Pakilsime į kovą
Šiandien visa jėga
Visi mes šiandien tikim Mato Budėno jėga
Olė olė olė
Olė olė olė
Visi mes šiandien tikim Mato Budėno jėga`
},
{
  title: `Tik Budėnas mano širdy`,
  content: `Tik Budėnas mano širdy
Jis stipriausias, žino visi
ŽIV tribūnai nėra lygių
Visada mes būsim kartu
Lai lai lai lai lai…`
},
{
  title: `Jeigu myli Budėną`,
  content: `Jeigu myli tu Budėną, tai suplok
Jeigu myli tu Budėną, tai suplok
Jeigu myli tu Budėną
Jeigu myli tu Budėną
Jeigu myli tu Budėną, tai suplok!`
},
{
  title: `Budzė - visagalis`,
  content: `Budzės nesustabydsi
Tik pirmyn ne atgal
Prieš Budzę lenkiasi visi
Budzė – visagalis`
},
{
  title: `Dėl Budėno`,
  content: `Budėną aš myliu galbūt labiau
Galbūt labiau, nei jis Godą myli
Lai lai lai lai lai lai
Budėną aš myliu galbūt labiau
Galbūt labiau, nei jis Godą myli`
},
{
  title: `Atsistokite visi visi`,
  content: `Atsistokite visi visi
Kas palaikot VKM penki
Rezultatas mums nėra svarbus
Matas Budzė patvarkys visus`
},
{
  title: `Matas Budėnas`,
  content: `Matas Budėnas
Pasikūręs visada
Matas Budėnas
Mergos jam tik galvoje
Matas Budėnas
Proto išvis nebėra
Matas Budėnas
La la la la la la la la la…`
},
{
  title: `Budzės diena`,
  content: `Šiandien yra Budzės diena
Goda jam tik ranka pasiekiama
Skamba linksmai Budzės daina
Matas Budėnas mūsų širdyse`
},
{
  title: `Budzė`,
  content: `Budzė
Žinau, kad gali
Jis priekabiauti
O visą kitą tik detalės
Lai lai lai lai lai lai lai...`
},
{
  title: `Ei, Budzės fanai`,
  content: `Ei, Budzės fanai,
Visi rankas į viršų
Budzė aikštelėj
Aplink viską pamirškim
Šitam žaidėjui
Tiktai mergos terūpi
Garbė didžiausia
Budzėi su merga būti
La lai lai lai lai la la...`
},
{
  title: `Ten, kur stovi miestas`,
  content: `Ten, kur stovi miestas
Didis nuo senų laikų
Žaidžia ten čiuvakas
Įdomiausias iš visų
Budzė, Budzė, Budzė
Jis visom rašys drauge
Matas, Matas, Matas
Paprastekas visada
Lai la lai la lai la…`
}
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
