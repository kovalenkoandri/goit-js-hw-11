export const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
.visually-hidden { 
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
.gallery { 
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  display: flex;
  flex-wrap: wrap;
}
@media screen and (min-device-width: 900px) and (max-device-width: 1900px) {a{flex-basis: 20%;}}
@media screen and (min-device-width: 500px) and (max-device-width: 899px) {a{flex-basis: 50%;}}
@media screen and (min-device-width: 200px) and (max-device-width: 499px) {a{flex-basis: 80%;}}
a {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.photo-card {
  
}
img {
    width: 50%;
}`;
document.getElementsByTagName('head')[0].appendChild(style);