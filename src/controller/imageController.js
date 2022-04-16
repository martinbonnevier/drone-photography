import { promises } from "fs";
import fs from "fs";
let numberOfPages = 0
let page = 1
export async function renderIndex(req, res) {
let images = await loadImages(page)
res.render('pages/index', {images: images, page:page, numberOfPages: numberOfPages});  
}

export async function loadImages(currentPage) {
  try {
    let arr = [];
    let files = fs.readdirSync("./public/img");
    numberOfPages =Math.ceil(files.length/12) 
    console.log(numberOfPages)
    for (let i = 0; i < files.length; i++) {
      
      if(i >= (currentPage-1)*12 && i < currentPage*12) {
        // console.log(files[i])
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
