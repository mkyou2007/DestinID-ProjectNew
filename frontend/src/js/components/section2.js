// ================= bikin elemen HTML biar gak ngulang-ngulang =================
const createEl = (tag, className = "", text = "") => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
};

const section2 = async () => {
  // section utama
  const section = createEl("section", "py-16");
  const container = createEl("div", "max-w-6xl mx-auto px-4");

  // header-nya (judul & deskripsi)
  container.append(headerContent());

  // grid buat nampung semua card destinasi
  const grid = createEl(
    "div",
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  );

  // ambil data dari API lokal
  const res = await fetch("http://localhost:9000/destinasi");
  const json = await res.json();
  const data = json.data.destinasi;

  // loop data & masukin ke grid
  data.forEach((item) => {
    grid.append(cardItem(item));
  });

  container.append(grid);
  section.append(container);
  return section;
};

// ================= header section (judul & deskripsi singkat) =================
const headerContent = () => {
  const wrap = createEl("div", "text-center mb-10");
  const h2 = createEl(
    "h2",
    "text-3xl md:text-4xl font-bold text-gray-800 mb-3",
    "Destinasi Unggulan"
  );
  const p = createEl(
    "p",
    "text-gray-600 max-w-xl mx-auto",
    "Temukan lokasi-lokasi paling menakjubkan di Indonesia melalui pengalaman virtual yang imersif."
  );
  wrap.append(h2, p);
  return wrap;
};

// ================= card per destinasi =================
const cardItem = (data) => {
  const { Name, Province, Regency, Category, Description, ImageUrl } = data;

  // wrapper card-nya
  const card = createEl(
    "div",
    "relative rounded-xl overflow-hidden shadow hover:shadow-xl transition-all text-white min-h-[360px] flex flex-col justify-end"
  );
  card.style.backgroundImage = `url('${ImageUrl}')`;
  card.style.backgroundSize = "cover";
  card.style.backgroundPosition = "center";

  // overlay gelap biar teks kebaca
  const overlay = createEl(
    "div",
    "bg-gradient-to-t from-black/60 via-black/30 to-transparent h-full w-full p-5 flex flex-col justify-end"
  );

  // kategori destinasi (misal: pantai, gunung, dll)
  const genre = createEl(
    "div",
    "mt-auto text-xs md:text-sm font-semibold mb-2"
  );
  const span = createEl(
    "span",
    "bg-[#E94F37] px-3 md:px-4 py-1 rounded-full inline-block",
    Category
  );
  genre.append(span);

  // judul + lokasi + deskripsi singkat
  const h3 = createEl(
    "h3",
    "text-xl md:text-2xl font-bold leading-tight mb-1",
    Name
  );
  const loc = createEl("p", "text-sm mb-1", `${Regency}, ${Province}`);
  const desc = createEl("p", "text-xs mb-3", Description);

  // =============== tombol buat ke detail destinasi ===============
  const btn = createEl(
    "button",
    "bg-blue-600/90 hover:bg-blue-700/90 text-white text-sm px-3 py-1.5 rounded w-fit hover:cursor-pointer",
    "Explore Destination"
  );

  btn.setAttribute("data-id", data.ID);

  // pas diklik, langsung redirect ke detail (dengan query param id)
  btn.addEventListener("click", (e) => {
    const destinationId = e.target.getAttribute("data-id");
    window.location.href = `?id=${destinationId}`;
  });

  // masukin semua ke overlay, terus overlay ke card
  overlay.append(genre, h3, loc, desc, btn);
  card.append(overlay);

  return card;
};

export default section2;
