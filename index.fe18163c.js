var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=e.parcelRequire2bae;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var i=a[e];delete a[e];var t={id:e,exports:{}};return n[e]=t,i.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},e.parcelRequire2bae=i);var t=i("cyIMT"),r=i("37v9V");(new(0,t.default)).fetchPopularMovie().then((e=>{console.dir(e.results),function(e){const n=e.map((e=>{const{id:n,backdrop_path:a,genre_ids:i,original_title:t,overview:r,popularity:o,poster_path:s,release_date:l,title:c,vote_average:m}=e;return`<li class="card card-js" data-id="${n}">\n      <div>\n        <button data-id="${n}" class="button-youtube" type="button" aria-label="watch movie trailer"></button>\n      </div>\n      <div class="card__wrap">\n      <img class="card__img" src='${s?`https://image.tmdb.org/t/p/w500${s}`:"https://ik.imagekit.io/rqegzjddo/no-poster-avalible.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661766934161"}' alt="${t||c}" width="395" height="574">\n      <h3 class="card__name lng-cardName">${t||c}</h3>\n      <p class="card__info lng-cardInfo"> ${function(e,n){const a=[];for(const i of n)for(const n of e)n.id===i&&a.push(n.name);return a.length>3?a.slice(0,2).join(", ")+", Other":a.join(", ")}(d,i)} | ${l.split("-")[0]||"Coming soon"}<span class="card__rating"> ${m} </span></p></div>\n  </li>`})).join("");o.card.insertAdjacentHTML("beforeend",n),(0,r.addListenerBtnYouTube)()}(e.results)}));const o={card:document.querySelector(".film-list")};const d=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];
//# sourceMappingURL=index.fe18163c.js.map
