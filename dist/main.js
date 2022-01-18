(()=>{"use strict";const t=function(){const t=document.querySelector("#content"),e=function(){const t=document.createElement("div");t.setAttribute("id","showcase");const e=document.createElement("div");e.classList.add("container");const n=document.createElement("div");n.classList.add("showcase-content");const a=document.createElement("h1"),c=document.createElement("span");c.classList.add("text-primary"),c.textContent="Enjoy Your Meal";const s=document.createElement("p");s.classList.add("lead"),s.textContent="orem, ipsum dolor sit amet consectetur adipisicing elit. Omnis vel qui accusantium illum, nam ex";const d=document.createElement("a");return d.classList.add("btn"),d.setAttribute("href","about.html"),d.textContent="About Our Restaurant",a.appendChild(c),n.append(a,s,d),e.appendChild(n),t.appendChild(e),t}(),n=function(){const t=document.createElement("section");t.setAttribute("id","home-info"),t.classList.add("bg-dark");const e=document.createElement("div");e.classList.add("info-img");const n=document.createElement("div");n.classList.add("info-content");const a=document.createElement("h2"),c=document.createElement("span");c.classList.add("text-primary"),c.textContent="The History of Our Restaurant";const s=document.createElement("p");s.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laborum explicabo nobis fugiat fuga praesentium minima dolorum ipsum dolor a.";const d=document.createElement("a");return d.setAttribute("href","about.html"),d.classList.add("btn"),d.classList.add("btn-light"),d.textContent="Read More",a.appendChild(c),n.append(a,s,d),t.appendChild(n),t.appendChild(e),t}(),a=function(){const t=document.createElement("div");t.setAttribute("id","features");const e=document.createElement("div");e.classList.add("box"),e.classList.add("bg-light");const n=document.createElement("i");n.classList.add("fas"),n.classList.add("fa-hotel"),n.classList.add("fa-3x");const a=document.createElement("h3");a.textContent="Great Location";const c=document.createElement("P");c.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laboriosam?";const s=document.createElement("div");s.classList.add("box"),s.classList.add("bg-primary");const d=document.createElement("i");d.classList.add("fas"),d.classList.add("fa-utensils"),d.classList.add("fa-3x");const i=document.createElement("h3");i.textContent="Free Meals";const o=document.createElement("P");o.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laboriosam?";const l=document.createElement("div");l.classList.add("box"),l.classList.add("bg-light");const m=document.createElement("i");m.classList.add("fas"),m.classList.add("fa-dumbbell"),m.classList.add("fa-3x");const r=document.createElement("h3");r.textContent="Fitness Room";const u=document.createElement("P");return u.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laboriosam?",l.append(m,r,u),s.append(d,i,o),e.append(n,a,c),t.append(l,s,e),t}();t.append(e,n,a)},e=function(){const t=document.querySelector("#content"),e=function(){const t=document.createElement("section");t.setAttribute("id","about-info"),t.classList.add("bg-light"),t.classList.add("py-3");const e=document.createElement("div");e.classList.add("container");const n=document.createElement("div");n.classList.add("info-left");const a=document.createElement("h1");a.classList.add("l-heading"),a.classList.add("text-primary"),a.textContent="About Restaurant BT",document.createElement("p").textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laborum explicabo nobis fugiat fuga praesentium minima dolorum ipsum dolor a.";const c=document.createElement("div");c.classList.add("info-right");const s=document.createElement("img");return s.setAttribute("src","./img/photo-2.jpg"),c.appendChild(s),n.appendChild(c),n.appendChild(a),e.appendChild(n),t.appendChild(e),t}(),n=function(){const t=document.createElement("div");return t.classList.add("clr"),t}(),a=function(){const t=document.createElement("section");t.classList.add("py-3");const e=document.createElement("div");e.classList.add("container");const n=document.createElement("h2");n.classList.add("l-heading"),n.textContent="What Our Guests Say";const a=document.createElement("div");a.classList.add("testimonial","bg-primary");const c=document.createElement("img");c.setAttribute("src","./img/person-1.jpg");const s=document.createElement("p");return s.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque pariatur assumenda vitae dolor rem quia, odit quam facilis. Illo quia eius reprehenderit non cum officiis minima voluptates aliquid minus dolore vel id, atque quis repellendus sed in error sunt.",a.append(s,c),e.append(a,n),t.appendChild(e),t}();t.textContent="",t.append(e,n,a)};(function(){const t=document.querySelector("#content"),e=document.createElement("header"),n=function(){const t=document.createElement("nav");t.setAttribute("id","navbar");const e=document.createElement("div");e.classList.add("container");const n=document.createElement("ul"),a=document.createElement("li"),c=document.createElement("li"),s=document.createElement("li"),d=document.createElement("a");d.classList.add("current"),d.setAttribute("id","home"),d.textContent="Home";const i=document.createElement("a");i.setAttribute("id","about"),i.textContent="About";const o=document.createElement("a");o.setAttribute("id","contact"),o.textContent="Contact",a.appendChild(d),c.appendChild(i),s.appendChild(o),n.appendChild(a),n.appendChild(c),n.appendChild(s),e.appendChild(n);const l=document.createElement("h1"),m=document.createElement("a");return m.setAttribute("href","index.html"),m.textContent="HBT",l.appendChild(m),e.appendChild(l),t.appendChild(e),t}(),a=function(){const t=document.createElement("div");return t.classList.add("clr"),t}(),c=function(){const t=document.createElement("div");return t.setAttribute("id","main-footer"),t}();e.appendChild(n),t.append(e,a,c)})(),t(),function(){const n=document.getElementById("home"),a=document.getElementById("about");document.getElementById("contact"),n.addEventListener("click",t),a.addEventListener("click",e)}()})();