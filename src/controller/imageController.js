import { promises } from "fs";
import fs from "fs";
let page = 1
export async function renderIndex(req, res) {
let images = await loadImages(page)
res.render('pages/index', {images: images, page:page});  
}

export async function loadImages(currentPage) {
  try {
    var arr = [];
    var files = fs.readdirSync("./public/img");

    for (var i = 0; i < files.length; i++) {
      
      if(i >= (currentPage-1)*12 && i < currentPage*12) {
        console.log(files[i])
      arr.push(files[i])
      }
    }
    return arr;
} catch (err) {
    console.log(err);
}

}

export function renderNextTen(req, res) {
  
  page += 1
  console.log(page)
  renderIndex(req, res)
}

export function renderPrevTen(req, res) {
  page -= 1
  console.log(page)
  renderIndex(req, res)
}
export function reset(req, res) {
  page = 1
  renderIndex(req, res)
}
