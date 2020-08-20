/**
 * @description 实现这个方法，能够删除指定文件夹下的所有 `.map` 文件。
 * @param {string} p
 * @return {void}
 */
const fs = require('fs')
const path = require('path')
const deleteMapFiles = (p) => {
  // 请实现……
  let files = fs.readdirSync(path.join(__dirname,p))
  files.forEach((file)=>{
    const itemPath = path.join(__dirname,p,file)
    let itemState = fs.statSync(itemPath)
    if(itemState.isDirectory()){
      deleteMapFiles(p+'/'+file)
    }
    if(path.extname(itemPath)==='.map'){
      fs.unlinkSync(itemPath)
    }
  })
};
deleteMapFiles('./playground')
// * ------------------------------------------------

// * playground 文件夹目前的目录结构如下：

/*
playground
├── index.html
├── index.js
├── index.js.map
└── static
    ├── main.js
    ├── main.js.map
    ├── style.css
    └── style.css.map
*/

// * 调用 deleteMapFiles('./playground') ，将删除所有 map 文件
// * 然后文件结构应该如下：

/*
playground
├── index.html
├── index.js
└── static
    ├── main.js
    └── style.css
*/
