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
}
.photo-card {
  flex-basis: 100px;
}
img {
    width: 40%;
}`;
document.getElementsByTagName('head')[0].appendChild(style);