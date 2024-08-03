async function countPage(file) {
  const pdfBytes = await fetch(file).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFLib.PDFDocument.load(pdfBytes);
  const pageCount = pdfDoc.getPageCount();
  window.getNum = pageCount;
  send(10);
}

function send(num) {
  document.cookie = num;
  console.log("pdfS: " + document.cookie.slice(0, 2));
  const data = {
    name: "demo",
    data: num,
  };

  fetch("myData.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then((result) => {
      console.log("phpD:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

const file = "data/new.pdf";
countPage(file);
