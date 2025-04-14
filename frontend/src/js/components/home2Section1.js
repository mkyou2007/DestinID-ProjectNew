// fungsi untuk membuat section utama di detail destinasi bagian atas
const home2Section1 = (data) => {
  const section = document.createElement("section");

  const div = document.createElement("div");
  div.className = `w-full h-80 md:h-[32rem] flex flex-col justify-center items-center text-center gap-5 p-4 md:p-8`;

  // menambahkan background gambar ke div
  div.style.backgroundImage = `url('${data.ImageUrl}')`;
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "center";

  const title = document.createElement("h1");
  title.className =
    "text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow";
  title.textContent = `${data.Name}`;

  const button = document.createElement("button");
  button.className =
    "bg-white text-black px-6 py-2 rounded-full text-sm md:text-base font-semibold shadow hover:bg-gray-200 transition hover:cursor-pointer";
  button.textContent = "View 360";

  // aksi saat tombol diklik
  button.addEventListener("click", () => {
    Swal.fire({
      title: "Fitur 360",
      text: "Fitur ini sedang dalam tahap pengerjaan.",
      icon: "info",
      confirmButtonText: "OK",
    });
  });

  // menambahkan title dan button ke dalam div
  div.append(title, button);
  section.append(div); // menambahkan div ke section

  return section; // mengembalikan section
};

export default home2Section1;
