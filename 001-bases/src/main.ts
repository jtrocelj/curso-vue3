import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
//import './bases/001-const-let';
//import './bases/002-object';
//import './bases/003-arrays';
//import './bases/004-functions';
//import './bases/005-desestructuracion-obj';
//import './bases/006-desectructuracion-arrays';
//import './bases/007-imp-exp';
//import './bases/008-promises';
//import './bases/009-fecth-api';
//import './bases/010-axios';
import './bases/011-async-await';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
  
  </div>
`
