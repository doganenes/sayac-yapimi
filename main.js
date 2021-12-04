var sayac = 0;

var deger = document.getElementById("deger");

var interval;

function Arttir() {
  clearInterval(interval);

  interval = setInterval(function () {
    sayac += 1;
    deger.innerHTML = sayac;
  }, 1000);
}

function Azalt() {
  clearInterval(interval);

  interval = setInterval(function () {
    sayac -= 1;
    deger.innerHTML = sayac; 
  }, 1000);
}

function Sifirla() {
  clearInterval(interval);

  sayac = 0;

  deger.innerHTML = sayac;
}
