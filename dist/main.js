(()=>{"use strict";!function(){const t=document.querySelector("#content"),e=document.createElement("header"),n=function(){const t=document.createElement("nav");t.setAttribute("id","navbar");const e=document.createElement("div");e.classList.add("container");const n=document.createElement("ul"),a=document.createElement("li"),c=document.createElement("li"),s=document.createElement("li"),d=document.createElement("a");d.classList.add("current"),d.setAttribute("href","index.html"),d.textContent="Home";const o=document.createElement("a");o.setAttribute("href","about.html"),o.textContent="About";const i=document.createElement("a");i.setAttribute("href","contact.html"),i.textContent="Contact",a.appendChild(d),c.appendChild(o),s.appendChild(i),n.appendChild(a),n.appendChild(c),n.appendChild(s),e.appendChild(n);const l=document.createElement("h1"),m=document.createElement("a");return m.setAttribute("href","index.html"),m.textContent="HBT",l.appendChild(m),e.appendChild(l),t.appendChild(e),t}(),a=function(){const t=document.createElement("div");t.setAttribute("id","showcase");const e=document.createElement("div");e.classList.add("container");const n=document.createElement("div");n.classList.add("showcase-content");const a=document.createElement("h1"),c=document.createElement("span");c.classList.add("text-primary"),c.textContent="Enjoy Your Meal";const s=document.createElement("p");s.classList.add("lead"),s.textContent="orem, ipsum dolor sit amet consectetur adipisicing elit. Omnis vel qui accusantium illum, nam ex";const d=document.createElement("a");return d.classList.add("btn"),d.setAttribute("href","about.html"),d.textContent="About Our Restaurant",a.appendChild(c),n.append(a,s,d),e.appendChild(n),t.appendChild(e),t}(),c=function(){const t=document.createElement("section");t.setAttribute("id","home-info"),t.classList.add("bg-dark");const e=document.createElement("div");e.classList.add("info-img");const n=document.createElement("div");n.classList.add("info-content");const a=document.createElement("h2"),c=document.createElement("span");c.classList.add("text-primary"),c.textContent="The History of Our Restaurant";const s=document.createElement("p");s.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laborum explicabo nobis fugiat fuga praesentium minima dolorum ipsum dolor a.";const d=document.createElement("a");return d.setAttribute("href","about.html"),d.classList.add("btn"),d.classList.add("btn-light"),d.textContent="Read More",a.appendChild(c),n.append(a,s,d),t.appendChild(n),t.appendChild(e),t}(),s=function(){const t=document.createElement("div");t.setAttribute("id","features");const e=document.createElement("div");e.classList.add("box"),e.classList.add("bg-light");const n=document.createElement("i");n.classList.add("fas"),n.classList.add("fa-hotel"),n.classList.add("fa-3x");const a=document.createElement("h3");a.textContent="Great Location";const c=document.createElement("P");c.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laboriosam?";const s=document.createElement("div");s.classList.add("box"),s.classList.add("bg-primary");const d=document.createElement("i");d.classList.add("fas"),d.classList.add("fa-utensils"),d.classList.add("fa-3x");const o=document.createElement("h3");o.textContent="Free Meals";const i=document.createElement("P");i.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laboriosam?";const l=document.createElement("div");l.classList.add("box"),l.classList.add("bg-light");const m=document.createElement("i");m.classList.add("fas"),m.classList.add("fa-dumbbell"),m.classList.add("fa-3x");const r=document.createElement("h3");r.textContent="Fitness Room";const u=document.createElement("P");return u.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laboriosam?",l.append(m,r,u),s.append(d,o,i),e.append(n,a,c),t.append(l,s,e),t}(),d=function(){const t=document.createElement("div");return t.classList.add("clr"),t}(),o=function(){const t=document.createElement("div");return t.setAttribute("id","main-footer"),t}();e.append(n,a),t.append(e,c,s,d,o)}()})();