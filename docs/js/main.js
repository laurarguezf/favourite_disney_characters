const m=document.querySelector(".js_cards-container"),g=document.querySelector(".js_favourites-container"),_=document.querySelector(".js_searchButton"),h=document.querySelector(".js_characterInput"),C=document.querySelector(".js_clearButton"),S=document.querySelector(".js_resetButton"),p=document.querySelector(".js_logButton"),o=document.querySelector(".js_num-of-favourites");let c=[],r=[];const L="https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";function v(e){return`<article class="characters_card js_characters_card" data-id="${e._id}">
                    <div class="card_img_container">
                        <img class="card_img" src=${e.imageUrl?e.imageUrl:L} alt="">
                    </div>
                    <h2 class="card_text">${e.name}</h2>
                    
                 </article>`}function l(){let e="";for(const a of c)e+=v(a);m.innerHTML=e;const t=document.querySelectorAll(".js_characters_card");for(const a of t)a.addEventListener("click",y)}function d(){let e="";for(const t of r)e+=v(t);g.innerHTML=e,o.innerHTML=""}function k(){const e=document.querySelectorAll(".js_characters_card");for(const t of e)t.classList.remove("favourite")}function s(){const e=document.querySelectorAll(".js_characters_card");for(const t of e){const a=parseInt(t.dataset.id);r.find(n=>n._id===a)&&t.classList.add("favourite")}}function y(e){const t=e.currentTarget;t.classList.toggle("favourite");const a=parseInt(t.dataset.id),u=c.find(i=>i._id===a),n=r.findIndex(i=>i._id===a);n===-1?r.push(u):r.splice(n,1),localStorage.setItem("favourites",JSON.stringify(r)),d(),s()}function j(e){e.preventDefault();const t=h.value;fetch(`//api.disneyapi.dev/character?name=${t}`).then(a=>a.json()).then(a=>{c=a.data,l(),s()})}function I(e){r=[],localStorage.removeItem("favourites"),o.innerHTML="",d(),k()}function q(e){e.preventDefault(),h.value="",fetch("//api.disneyapi.dev/character?pageSize=50").then(t=>t.json()).then(t=>{c=t.data,l(),s()})}function F(e){e.preventDefault(),r.length===0?o.innerHTML="There's no favourite characters":o.innerHTML=`You've got ${r.length} favourite characters`}_.addEventListener("click",j);C.addEventListener("click",I);S.addEventListener("click",q);p.addEventListener("click",F);fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{c=e.data,l(),s()});const f=JSON.parse(localStorage.getItem("favourites"));f!==null&&(r=f,d());
//# sourceMappingURL=main.js.map
