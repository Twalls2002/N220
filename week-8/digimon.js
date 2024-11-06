let currentPage = 0;
let totalPages = 0;

async function getDigimon() {
  const getDigimon = await fetch(`https://digimon-api.vercel.app/api/digimon`);

  const digiData = await digiResponse.json();

  console.log("digiResponse", digiResponse);

  return digiData;
}

async function updateSection() {
  const digimonPage = document.getElemenetsById("digimonPage");

  const allDigimon = await getDigimon();

  totalPages = Math.ceil(allDigimon.length / 10);

  digimonPageRef.innerHTML += `<Page> ${currentPage + 1}of ${totalPages}</h3>`;

  digimonPageRef.innerHTML += `
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Level</th>
            </tr>
        </thead>
        <tbody id="digimonList"></tbody>
    </table>
`;

  digimonPageRef.innerHTML += `

  let pageNumbers = [];

  // for (let i = 0; i < totalPages; i++)

  let i=0;
  while (i < totalPages) {
  pageNumbers += `<option value="${i}" >${i + 1}</option>
  }; 

 

  digimonPageRef.innerHTML += `
<div>
    <botton onclick="goToPage(-1)">Previous Page</botton>
    <select id=`pageNumber` onchange="goToPage(1)">
    ${pageNumbers}
    </select>
    <button onclick="goToPage(1)">Next Page</button>
</div>
`;

updatePage();
}

function changePage(e) {
console.log("e.currentTarget.value", e.currentTarget.value);

updatePage();
}

function getToPage(pageDirection) {
  if (pageDirection > 0) {
    if (currentPage === totalPages - 1) {
      alert("There are no additional pages");
    } else {
      currentPage++;
    }
  } else {
    if (currentPage === 0) {
      alert("This is the first page.");
    } else {
      currentPage--;
    }
  }

  updatePage();
}

async function updatePage() {
  digimonListRef.innerHTML = "";
  for (let i= startingIndex; i < endingIndex; i++) {
    if (i >= allDigimon.length) {
        continue;
    }
  }
 

  const digimon = allDigimon[i];

  digimonListRef.innerHTML += `

  for (let i=0; i < allDigimon.length; i++) {
    const digimon = allDigimon[i];

    digimonListRefinnerHTML +=
    <tr>
        <td>${i}</td>
        <td>${digimon.name}</td>
        <td>
            <img src="${digimon.img}" height="50" />
        </td>
    <td> ${digimon.level}</td>
    </tr>
    `;
  }
}

updateSelection();
