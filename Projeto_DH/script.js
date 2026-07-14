(function(){
  "use strict";

  var navToggle = document.getElementById("navToggle");
  var navList   = document.getElementById("navList");
  navToggle.addEventListener("click", function(){
    var isOpen = navList.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navList.querySelectorAll("a").forEach(function(link){
    link.addEventListener("click", function(){
      navList.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  var sections = document.querySelectorAll("main > section[id], main > #topo");
  var navLinks = document.querySelectorAll(".nav-list a");

  var sectionObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting) return;
      var id = entry.target.getAttribute("id");
      navLinks.forEach(function(link){
        link.classList.toggle("active", link.getAttribute("href") === "#" + id);
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  document.querySelectorAll("section[id]").forEach(function(sec){
    sectionObserver.observe(sec);
  });

  var toggles = document.querySelectorAll(".case-toggle");
  toggles.forEach(function(btn){
    btn.addEventListener("click", function(){
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
    });
  });

  var cards = document.querySelectorAll(".article-card");
  var cardObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(function(card){ cardObserver.observe(card); });

  var btnUnaudited = document.getElementById("btnUnaudited");
  var btnAudited    = document.getElementById("btnAudited");
  var fillA = document.getElementById("fillA");
  var fillB = document.getElementById("fillB");
  var pctA  = document.getElementById("pctA");
  var pctB  = document.getElementById("pctB");

  var MODELS = {
    unaudited: { a: 68, b: 29 },
    audited:   { a: 52, b: 49 }
  };

  function renderModel(key){
    var data = MODELS[key];
    fillA.style.width = data.a + "%";
    fillB.style.width = data.b + "%";
    pctA.textContent = data.a + "%";
    pctB.textContent = data.b + "%";
    btnUnaudited.setAttribute("aria-pressed", String(key === "unaudited"));
    btnAudited.setAttribute("aria-pressed", String(key === "audited"));
  }

  btnUnaudited.addEventListener("click", function(){ renderModel("unaudited"); });
  btnAudited.addEventListener("click", function(){ renderModel("audited"); });

  window.requestAnimationFrame(function(){
    setTimeout(function(){ renderModel("unaudited"); }, 300);
  });

})();
