const {
    glob,
    globSync,
    globStream,
    globStreamSync,
    Glob,
} = require('glob')
const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, "public/projects");
const modelsPath = path.join(__dirname, "public/Models_3D");

const htmlFiles = globSync(`${htmlPath}/*.html`);

let htmlObj = []
for (let i = 0; i < htmlFiles.length; i++) {
    let obj = {
        "titre": path.parse(htmlFiles[i]).name.replaceAll("_"," "),
        "contenu": htmlFiles[i].replace("public\\", "")
    }
    htmlObj.push(obj);
}

const modelsFolder = globSync(`${modelsPath}/*.glb`);
let modelsObj = [];
for (let i = 0; i < modelsFolder.length; i++) {
    let img = path.format({ ...path.parse(modelsFolder[i]), base: '', ext: '.png' });
    if (!fs.existsSync(img)) {
        img = "";
    }
    let obj = {
        "path": modelsFolder[i].replace("public\\",""),
        "image": img
    }
    modelsObj.push(obj);
    modelsObj.push(obj);
    modelsObj.push(obj);
    modelsObj.push(obj);
    modelsObj.push(obj);
    modelsObj.push(obj);
    modelsObj.push(obj);
    modelsObj.push(obj);
    modelsObj.push(obj);
    modelsObj.push(obj);
    modelsObj.push(obj);
    modelsObj.push(obj);
    modelsObj.push(obj);
}

fs.writeFileSync("src/modelslist.json", JSON.stringify(modelsObj));
fs.writeFileSync("src/projects.json", JSON.stringify(htmlObj));