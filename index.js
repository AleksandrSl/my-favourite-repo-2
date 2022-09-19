// Import stylesheets
import './style.css';
import ghUrlParse from 'git-url-parse';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

console.log(
  ghUrlParse('AleksandrSl/js-c3zt9p0000-ggk81dgggg/edit/main/кабачок.txtвввввв')
);
