!function(){var e=["en","ua"],a={webTitle:{ua:"Фільмотека",en:"Filmoteka"},headerTitle:{ua:"Фільмотека",en:"Filmoteka"},homepage:{ua:"Домашня сторінка",en:"Home"},myLibrary:{ua:"Моя бібліотека",en:"My library"},movieSearch:{ua:"Пошук фильмів",en:"Movie search"},languageChoose:{ua:"Мова",en:"Language"}},n=document.querySelector(".jsBgLangOpen"),o=document.querySelector(".jsLangList");function t(){o.classList.add("lang-hidden")}var l=document.querySelector(".jsUA"),c=document.querySelector(".jsUK");function i(){var n=window.location.hash;for(var o in n=n.substr(1),localStorage.setItem("localStorageHash",n),e.includes(n)||(location.href=window.location.pathname+"#en",location.reload()),document.querySelector("title").innerHTML=a.webTitle[n],document.querySelector(".inpt-js").placeholder=a.movieSearch[n],a){var t=document.querySelector(".lng-"+o);t&&(t.textContent=a[o][n])}}n.addEventListener("click",(function(){o.classList.toggle("lang-hidden")})),l.addEventListener("click",(function(){location.href=window.location.pathname+"#ua";localStorage.setItem("localStorageHash","ua");i(),t()})),c.addEventListener("click",(function(){location.href=window.location.pathname+"#en";localStorage.setItem("localStorageHash","en");i(),t()})),i()}();
//# sourceMappingURL=library.5a6e8763.js.map
