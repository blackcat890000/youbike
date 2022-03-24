// 程式碼寫這裡

// 先用filter search  再用APPENDCHILD 家道下面
// const API = "https:/ / data.gov.tw / dataset / 137993"

// const req = new XMLHttpRequest()
// const btn = document.querySelector("btn btn-success fs-3")

// btn.addEventListener("load", function () {
//   const ul = document.createElement("ul")
//   let resp = JSON.parse(req.responseText)
//   const li = document.createElement("li")
//   resp.forEach((ar) => {
//     li.textContent = ar.name
//     ul.appendChild(ar)
//   })
// })

// req.open("Get", API)

// req.send()

// // req.open("Get", API)

// const api =
//   "	https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

// fetch(api)
//   .then(function (resp) {
//     return resp.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })
// const btn = document.querySelector("btn btn-success fs-3")

// btn.addEventListener("click", function () {
//   //   const inputTxt = document.querySelector("searchKeyword")
//   // inputTxt.value = sna.textContext

//   const address = "大安區"
//   console.log(address)
// })
const API =
  "	https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
const req = new XMLHttpRequest()

req.addEventListener("load", function () {
  const ul = document.createElement("ul")
  let resp = JSON.parse(req.responseText)
  resp.forEach((station) => {
    const li = document.createElement("li")
    li.textContent = station.sna
    ul.appendChild(li)
  })

  console.log(ul)
})

req.open("Get", API)

req.send()
