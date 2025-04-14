import home2Section1 from "../components/home2Section1.js";
import sectionDetail from "../components/sectionDetail.js";
import page404 from "./page404.js";

const home2 = async () => {
  const url = new URL(window.location.href);

  const id = url.searchParams.get("id");
  const dataa = await getAPi(id);
  console.log(dataa.data);
  if (dataa.status === "success") {
    console.log("ok");
    const div = document.createElement("div");
    div.append(home2Section1(dataa.data), sectionDetail(dataa.data));
    return div;
  } else {
    return page404();
  }
};

const getAPi = async (id) => {
  try {
    const url = "http://localhost:9000/destinasi";
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {}
};
export default home2;
