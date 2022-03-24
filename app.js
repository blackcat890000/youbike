// 程式碼寫這裡
const API =
  "	https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

const ul = document.querySelector(".siteList")
const form = document.querySelector("#searchForm")
const txtinput = document.querySelector("#searchKeyword")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  getPost(txtinput.value)
  ul.innerHTML = ""
})

async function getPost(txtinput) {
  if (txtinput.value !== "") {
    const rawData = await fetch(API)
    const stops = await rawData.json()
    const lists = stops.filter(function (data) {
      return data.ar.includes(txtinput)
    })

    lists.forEach((e) => {
      const item = ` <li class="list-group-item fs-5">
     <i class="fas fa-bicycle"></i>
    ${e.sna.replace("YouBike2.0_", "")}(${e.sbi})
    <br>
    <small class="text-muted">${e.ar}</small>
    </li>`

      ul.insertAdjacentHTML("afterbegin", item)
    })
  }
}
