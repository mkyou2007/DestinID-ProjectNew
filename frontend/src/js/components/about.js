//  ================ ini untuk halaman about ================
const createEl = (tag, className = "", text = "") => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
};

const sectionAbout = () => {
  const section = createEl(
    "section",
    "py-20 bg-gradient-to-br from-white via-sky-50 to-blue-100"
  );
  section.id = "about";

  const container = createEl("div", "max-w-5xl mx-auto px-4 text-center");

  const heading = createEl(
    "h2",
    "text-3xl md:text-4xl font-bold text-gray-800 mb-6 tracking-tight",
    "About DestinID"
  );

  const paragraph = createEl(
    "p",
    "text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto",
    "DestinID memanfaatkan teknologi digital untuk memperkenalkan destinasi tersembunyi di Indonesia kepada dunia. Melalui tur virtual yang imersif, kami menjembatani budaya tradisional dengan inovasi teknologi, melestarikan warisan budaya sekaligus mendukung pertumbuhan ekonomi lokal."
  );

  container.append(heading, paragraph);
  section.appendChild(container);

  return section;
};

export default sectionAbout;
