//From html
let headerCookies = document.getElementById("headerCookies");
let imgCookie = document.getElementById("imgCookie");
let totalProd = document.getElementById("totalProd");
let cookies32k = document.getElementById("cookies32k");
let cookies256k = document.getElementById("cookies256k");
let cookies2m = document.getElementById("cookies2m");
let prod10x = document.getElementById("prod10x");
let p = document.getElementById("p");

//Variables
let cookies = 0;
let factor = 1;
let allFactor = 1;
let factorPrices = 1.2;
let factorPricesLvl = 2;
let xClicker, xBaker, xFarm, xMine, xFactory;

//Objetos productores
class Productor {
    constructor(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
        this.n = a;
        this.producting = b;
        this.namePrice = c;
        this.nameProd = d;
        this.buy = e;
        this.price = f;
        this.prod = g;
        this.nameUpLvl = h;
        this.activeLvl = i;
        this.namePriceLvl = j;
        this.nameProdFactor = k;
        this.buttonLvl = l;
        this.priceLvl = m;
        this.img = n;
        this.prodFactor = 1;
        this.cant = 0;
        this.upLvl = 1;
    }
}

let clicker = new Productor(document.getElementById("htmlClicker"), document.getElementById("htmlProdClicker"), document.getElementById("htmlPriceClicker"), document.getElementById("htmlNameProdClicker"), document.getElementById("buyClicker"), 20, (factor * 2), document.getElementById("lvlClicker"), document.getElementById("activeLvlClicker"), document.getElementById("priceLvlClicker"), document.getElementById("lvlProdClicker"), document.getElementById("lvlButtonClicker"), 40, document.getElementById("imgClicker"));
let baker = new Productor(document.getElementById("htmlBaker"), document.getElementById("htmlProdBaker"), document.getElementById("htmlPriceBaker"), document.getElementById("htmlNameProdBaker"), document.getElementById("buyBaker"), 400, (factor * 16), document.getElementById("lvlBaker"), document.getElementById("activeLvlBaker"), document.getElementById("priceLvlBaker"), document.getElementById("lvlProdBaker"), document.getElementById("lvlButtonBaker"), 800, document.getElementById("imgBaker"));
let farm = new Productor(document.getElementById("htmlFarm"), document.getElementById("htmlProdFarm"), document.getElementById("htmlPriceFarm"), document.getElementById("htmlNameProdFarm"), document.getElementById("buyFarm"), 12000, (factor * 128), document.getElementById("lvlFarm"), document.getElementById("activeLvlFarm"), document.getElementById("priceLvlFarm"), document.getElementById("lvlProdFarm"), document.getElementById("lvlButtonFarm"), 24000, document.getElementById("imgFarm"));
let mine = new Productor(document.getElementById("htmlMine"), document.getElementById("htmlProdMine"), document.getElementById("htmlPriceMine"), document.getElementById("htmlNameProdMine"), document.getElementById("buyMine"), 480000, (factor * 1024), document.getElementById("lvlMine"), document.getElementById("activeLvlMine"), document.getElementById("priceLvlMine"), document.getElementById("lvlProdMine"), document.getElementById("lvlButtonMine"), 960000, document.getElementById("imgMine"));
let factory = new Productor(document.getElementById("htmlFactory"), document.getElementById("htmlProdFactory"), document.getElementById("htmlPriceFactory"), document.getElementById("htmlNameProdFactory"), document.getElementById("buyFactory"), 24000000, (factor * 8192), document.getElementById("lvlFactory"), document.getElementById("activeLvlFactory"), document.getElementById("priceLvlFactory"), document.getElementById("lvlProdFactory"), document.getElementById("lvlButtonFactory"), 48000000, document.getElementById("imgFactory"));


//Actualizacion de datos
headerCookies.innerHTML = cookies + " Cookies";
clicker.namePrice.innerHTML = "Price: " + clicker.price;
baker.namePrice.innerHTML = "Price: " + baker.price;
farm.namePrice.innerHTML = "Price: " + farm.price;
mine.namePrice.innerHTML = "Price: " + mine.price;
factory.namePrice.innerHTML = "Price: " + factory.price;

clicker.nameProd.innerHTML = "Produces: " + (clicker.prod) + " Cookie/s";
baker.nameProd.innerHTML = "Produces: " + (baker.prod) + " Cookie/s";
farm.nameProd.innerHTML = "Produces: " + (farm.prod) + " Cookie/s";
mine.nameProd.innerHTML = "Produces: " + (mine.prod) + " Cookie/s";
factory.nameProd.innerHTML = "Produces: " + (factory.prod) + " Cookie/s";

clicker.namePriceLvl.innerHTML = "Price: " + clicker.priceLvl;
baker.namePriceLvl.innerHTML = "Price: " + baker.priceLvl;
farm.namePriceLvl.innerHTML = "Price: " + farm.priceLvl;
mine.namePriceLvl.innerHTML = "Price: " + mine.priceLvl;
factory.namePriceLvl.innerHTML = "Price: " + factory.priceLvl;

clicker.nameProdFactor.innerHTML = "Production x" + (clicker.prodFactor + 1);
baker.nameProdFactor.innerHTML = "Production x" + (baker.prodFactor + 1);
farm.nameProdFactor.innerHTML = "Production x" + (farm.prodFactor + 1);
mine.nameProdFactor.innerHTML = "Production x" + (mine.prodFactor + 1);
factory.nameProdFactor.innerHTML = "Production x" + (factory.prodFactor + 1);


//Eventos de click en la cookie
imgCookie.addEventListener("click", cookiesmas1);

//Eventos de compras
clicker.buy.addEventListener("click", buyClicker);
baker.buy.addEventListener("click", buyBaker);
farm.buy.addEventListener("click", buyFarm);
mine.buy.addEventListener("click", buyMine);
factory.buy.addEventListener("click", buyFactory);

clicker.buttonLvl.addEventListener("click", lvlClicker);
baker.buttonLvl.addEventListener("click", lvlBaker);
farm.buttonLvl.addEventListener("click", lvlFarm);
mine.buttonLvl.addEventListener("click", lvlMine);
factory.buttonLvl.addEventListener("click", lvlFactory);

cookies32k.addEventListener("click", buy32k);
cookies256k.addEventListener("click", buy256k);
cookies2m.addEventListener("click", buy2m);
prod10x.addEventListener("click", buy10x);


//Funciones
function cookiesmas1() {
    cookies++;
    headerCookies.innerHTML = cookies + " Cookies";
}

setTimeout(loop2, 500);
function loop2() {
    setTimeout(() => {
        imgCookie.style.width = "20vw";
        imgCookie.style.transform = "rotate(-3deg)";
        
        setTimeout(() => {
            imgCookie.style.width = "21vw";
            imgCookie.style.transform = "rotate(3deg)";
        }, 350)
        loop2();
    }, 700);
}

setTimeout(loop, 1000);
function loop() {
    setTimeout( () => {
    xClicker = (clicker.cant * clicker.prod * clicker.prodFactor * allFactor)/2;
    xBaker = (baker.cant * baker.prod * baker.prodFactor * allFactor)/2;
    xFarm = (farm.cant * farm.prod * farm.prodFactor * allFactor)/2;
    xMine = (mine.cant * mine.prod * mine.prodFactor * allFactor)/2;
    xFactory = (factory.cant * factory.prod * factory.prodFactor * allFactor)/2;
    cookies = cookies + xClicker + xBaker + xFarm + xMine + xFactory;
    headerCookies.innerHTML = cookies + " Cookies";
    console.log("1/2 segundo");
    loop();
    }
    , 500);
}

function buyClicker() {
    if(cookies >= clicker.price) {
        cookies = cookies - clicker.price;
        clicker.cant++;
        clicker.price = parseInt(clicker.price * factorPrices);
        headerCookies.innerHTML = cookies + " Cookies";
        clicker.n.innerHTML = "Clickers: " + clicker.cant;
        clicker.producting.innerHTML = "Producting: " + (clicker.cant * clicker.prod * clicker.prodFactor * allFactor) + "/s";
        clicker.namePrice.innerHTML = "Price: " + clicker.price;
        totalProd.innerHTML = "Total production: " + (allFactor * ((clicker.cant * clicker.prod * clicker.prodFactor) + (baker.cant * baker.prod * baker.prodFactor) + (farm.cant * farm.prod * farm.prodFactor) + (mine.cant * mine.prod * mine.prodFactor) + (factory.cant * factory.prod * factory.prodFactor))) + " Cookies/s";
    }
}
function buyBaker() {
    if(cookies >= baker.price) {
        cookies = cookies - baker.price;
        baker.cant++;
        baker.price = parseInt(baker.price * factorPrices);
        headerCookies.innerHTML = cookies + " Cookies";
        baker.n.innerHTML = "Bakers: " + baker.cant;
        baker.producting.innerHTML = "Producting: " + (baker.cant * baker.prod * baker.prodFactor * allFactor) + "/s";
        baker.namePrice.innerHTML = "Price: " + baker.price;
        totalProd.innerHTML = "Total production: " + (allFactor * ((clicker.cant * clicker.prod * clicker.prodFactor) + (baker.cant * baker.prod * baker.prodFactor) + (farm.cant * farm.prod * farm.prodFactor) + (mine.cant * mine.prod * mine.prodFactor) + (factory.cant * factory.prod * factory.prodFactor))) + " Cookies/s";
    }
}
function buyFarm() {
    if(cookies >= farm.price) {
        cookies = cookies - farm.price;
        farm.cant++;
        farm.price = parseInt(farm.price * factorPrices);
        headerCookies.innerHTML = cookies + " Cookies";
        farm.n.innerHTML = "Bakers: " + farm.cant;
        farm.producting.innerHTML = "Producting: " + (farm.cant * farm.prod * farm.prodFactor) + "/s";
        farm.namePrice.innerHTML = "Price: " + farm.price;
        totalProd.innerHTML = "Total production: " + (allFactor * ((clicker.cant * clicker.prod * clicker.prodFactor * allFactor) + (baker.cant * baker.prod * baker.prodFactor) + (farm.cant * farm.prod * farm.prodFactor) + (mine.cant * mine.prod * mine.prodFactor) + (factory.cant * factory.prod * factory.prodFactor))) + " Cookies/s";
    }
}
function buyMine() {
    if(cookies >= mine.price) {
        cookies = cookies - mine.price;
        mine.cant++;
        mine.price = parseInt(mine.price * factorPrices);
        headerCookies.innerHTML = cookies + " Cookies";
        mine.n.innerHTML = "Bakers: " + mine.cant;
        mine.producting.innerHTML = "Producting: " + (mine.cant * mine.prod * mine.prodFactor) + "/s";
        mine.namePrice.innerHTML = "Price: " + mine.price;
        totalProd.innerHTML = "Total production: " + (allFactor * ((clicker.cant * clicker.prod * clicker.prodFactor) + (baker.cant * baker.prod * baker.prodFactor) + (farm.cant * farm.prod * farm.prodFactor) + (mine.cant * mine.prod * mine.prodFactor) + (factory.cant * factory.prod * factory.prodFactor))) + " Cookies/s";
    }
}
function buyFactory() {
    if(cookies >= factory.price) {
        cookies = cookies - factory.price;
        factory.cant++;
        factory.price = parseInt(factory.price * factorPrices);
        headerCookies.innerHTML = cookies + " Cookies";
        factory.n.innerHTML = "Bakers: " + factory.cant;
        factory.producting.innerHTML = "Producting: " + (factory.cant * factory.prod * factory.prodFactor * allFactor) + "/s";
        factory.namePrice.innerHTML = "Price: " + factory.price;
        totalProd.innerHTML = "Total production: " + (allFactor * ((clicker.cant * clicker.prod * clicker.prodFactor) + (baker.cant * baker.prod * baker.prodFactor) + (farm.cant * farm.prod * farm.prodFactor) + (mine.cant * mine.prod * mine.prodFactor) + (factory.cant * factory.prod * factory.prodFactor))) + " Cookies/s";
    }
}
function lvlClicker() {
    if(clicker.cant > 0) {
        if(cookies >= clicker.priceLvl) {
            cookies = cookies - clicker.priceLvl;
            clicker.prodFactor++;
            clicker.upLvl++;
            clicker.priceLvl = parseInt(clicker.priceLvl * factorPricesLvl);
            headerCookies.innerHTML = cookies + " Cookies";
            clicker.nameProd.innerHTML = "Produces: " + (clicker.prod * clicker.prodFactor * allFactor) + " Cookies/s";
            clicker.nameUpLvl.innerHTML = "Clickers lvl: " + clicker.upLvl;
            clicker.activeLvl.innerHTML = "Activated: x" + clicker.prodFactor;
            clicker.producting.innerHTML = "Producting: " + (clicker.cant * clicker.prod * clicker.prodFactor * allFactor) + "/s";
            clicker.nameProdFactor.innerHTML = "Production x" + (clicker.prodFactor + 1);
            clicker.namePriceLvl.innerHTML = "Price: " + clicker.priceLvl;
            totalProd.innerHTML = "Total production: " + (allFactor * ((clicker.cant * clicker.prod * clicker.prodFactor) + (baker.cant * baker.prod * baker.prodFactor) + (farm.cant * farm.prod * farm.prodFactor) + (mine.cant * mine.prod * mine.prodFactor) + (factory.cant * factory.prod * factory.prodFactor))) + " Cookies/s";
        }
    }
}
function lvlBaker() {
    if(baker.cant > 0) {
        if(cookies >= baker.priceLvl) {
        cookies = cookies - baker.priceLvl;
        baker.prodFactor++;
        baker.upLvl++;
        baker.priceLvl = parseInt(baker.priceLvl * factorPricesLvl);
        headerCookies.innerHTML = cookies + " Cookies";
        baker.nameProd.innerHTML = "Produces: " + (baker.prod * baker.prodFactor * allFactor) + " Cookies/s";
        baker.nameUpLvl.innerHTML = "Clickers lvl: " + baker.upLvl;
        baker.activeLvl.innerHTML = "Activated: x" + baker.prodFactor;
        baker.producting.innerHTML = "Producting: " + (baker.cant * baker.prod * baker.prodFactor * allFactor) + "/s";
        baker.nameProdFactor.innerHTML = "Production x" + (baker.prodFactor + 1);
        baker.namePriceLvl.innerHTML = "Price: " + baker.priceLvl;
        totalProd.innerHTML = "Total production: " + (allFactor * ((clicker.cant * clicker.prod * clicker.prodFactor) + (baker.cant * baker.prod * baker.prodFactor) + (farm.cant * farm.prod * farm.prodFactor) + (mine.cant * mine.prod * mine.prodFactor) + (factory.cant * factory.prod * factory.prodFactor))) + " Cookies/s";
        }
    }
}
function lvlFarm() {
    if(farm.cant > 0) {
        if(cookies >= farm.priceLvl) {
        cookies = cookies - farm.priceLvl;
        farm.prodFactor++;
        farm.upLvl++;
        farm.priceLvl = parseInt(farm.priceLvl * factorPricesLvl);
        headerCookies.innerHTML = cookies + " Cookies";
        farm.nameProd.innerHTML = "Produces: " + (farm.prod * farm.prodFactor * allFactor) + " Cookies/s";
        farm.nameUpLvl.innerHTML = "Clickers lvl: " + farm.upLvl;
        farm.activeLvl.innerHTML = "Activated: x" + farm.prodFactor;
        farm.producting.innerHTML = "Producting: " + (farm.cant * farm.prod * farm.prodFactor * allFactor) + "/s";
        farm.nameProdFactor.innerHTML = "Production x" + (farm.prodFactor + 1);
        farm.namePriceLvl.innerHTML = "Price: " + farm.priceLvl;
        totalProd.innerHTML = "Total production: " + (allFactor * ((clicker.cant * clicker.prod * clicker.prodFactor) + (baker.cant * baker.prod * baker.prodFactor) + (farm.cant * farm.prod * farm.prodFactor) + (mine.cant * mine.prod * mine.prodFactor) + (factory.cant * factory.prod * factory.prodFactor))) + " Cookies/s";
        }
    }
}
function lvlMine() {
    if(mine.cant > 0) {
        if(cookies >= mine.priceLvl) {
        cookies = cookies - mine.priceLvl;
        mine.prodFactor++;
        mine.upLvl++;
        mine.priceLvl = parseInt(mine.priceLvl * factorPricesLvl);
        headerCookies.innerHTML = cookies + " Cookies";
        mine.nameProd.innerHTML = "Produces: " + (mine.prod * mine.prodFactor * allFactor) + " Cookies/s";
        mine.nameUpLvl.innerHTML = "Clickers lvl: " + mine.upLvl;
        mine.activeLvl.innerHTML = "Activated: x" + mine.prodFactor;
        mine.producting.innerHTML = "Producting: " + (mine.cant * mine.prod * mine.prodFactor * allFactor) + "/s";
        mine.nameProdFactor.innerHTML = "Production x" + (mine.prodFactor + 1);
        mine.namePriceLvl.innerHTML = "Price: " + mine.priceLvl;
        totalProd.innerHTML = "Total production: " + (allFactor * ((clicker.cant * clicker.prod * clicker.prodFactor) + (baker.cant * baker.prod * baker.prodFactor) + (farm.cant * farm.prod * farm.prodFactor) + (mine.cant * mine.prod * mine.prodFactor) + (factory.cant * factory.prod * factory.prodFactor))) + " Cookies/s";
        }
    }
}
function lvlFactory() {
    if(factory.cant > 0) {
        if(cookies >= factory.priceLvl) {
        cookies = cookies - factory.priceLvl;
        factory.prodFactor++;
        factory.upLvl++;
        factory.priceLvl = parseInt(factory.priceLvl * factorPricesLvl);
        headerCookies.innerHTML = cookies + " Cookies";
        factory.nameProd.innerHTML = "Produces: " + (factory.prod * factory.prodFactor * allFactor) + " Cookies/s";
        factory.nameUpLvl.innerHTML = "Clickers lvl: " + factory.upLvl;
        factory.activeLvl.innerHTML = "Activated: x" + factory.prodFactor;
        factory.producting.innerHTML = "Producting: " + (factory.cant * factory.prod * factory.prodFactor * allFactor) + "/s";
        factory.nameProdFactor.innerHTML = "Production x" + (factory.prodFactor + 1);
        factory.namePriceLvl.innerHTML = "Price: " + factory.priceLvl;
        totalProd.innerHTML = "Total production: " + (allFactor * ((clicker.cant * clicker.prod * clicker.prodFactor) + (baker.cant * baker.prod * baker.prodFactor) + (farm.cant * farm.prod * farm.prodFactor) + (mine.cant * mine.prod * mine.prodFactor) + (factory.cant * factory.prod * factory.prodFactor))) + " Cookies/s";
        }
    }
}

function buy32k() {
    cookies = cookies + 32000;
    p.innerHTML = p.innerHTML + "<br>Purchased: 32000 cookies.<br>";
}
function buy256k() {
    cookies = cookies + 256000;
    p.innerHTML = p.innerHTML + "<br>Purchased: 256000 cookies.<br>";
}
function buy2m() {
    cookies = cookies + 2048000;
    p.innerHTML = p.innerHTML + "<br>Purchased: 2048000 cookies.<br>";
}
function buy10x() {
    if(allFactor != 10) {
        allFactor = 10;
        headerCookies.innerHTML = cookies + " Cookies";
        clicker.nameProd.innerHTML = "Produces: " + (clicker.prod * clicker.prodFactor * allFactor) + " Cookies/s";
        clicker.producting.innerHTML = "Producting: " + (clicker.cant * clicker.prod * clicker.prodFactor * allFactor) + "/s";
        baker.nameProd.innerHTML = "Produces: " + (baker.prod * baker.prodFactor * allFactor) + " Cookies/s";
        baker.producting.innerHTML = "Producting: " + (baker.cant * baker.prod * baker.prodFactor * allFactor) + "/s";
        farm.nameProd.innerHTML = "Produces: " + (farm.prod * farm.prodFactor * allFactor) + " Cookies/s";
        farm.producting.innerHTML = "Producting: " + (farm.cant * farm.prod * farm.prodFactor * allFactor) + "/s";
        mine.nameProd.innerHTML = "Produces: " + (mine.prod * mine.prodFactor * allFactor) + " Cookies/s";
        mine.producting.innerHTML = "Producting: " + (mine.cant * mine.prod * mine.prodFactor * allFactor) + "/s";
        factory.nameProd.innerHTML = "Produces: " + (factory.prod * factory.prodFactor * allFactor) + " Cookies/s";
        factory.producting.innerHTML = "Producting: " + (factory.cant * factory.prod * factory.prodFactor * allFactor) + "/s";
        totalProd.innerHTML = "Total production: " + (allFactor * ((clicker.cant * clicker.prod * clicker.prodFactor) + (baker.cant * baker.prod * baker.prodFactor) + (farm.cant * farm.prod * farm.prodFactor) + (mine.cant * mine.prod * mine.prodFactor) + (factory.cant * factory.prod * factory.prodFactor))) + " Cookies/s";
        prod10x.innerHTML = "Activated";
        p.innerHTML = p.innerHTML + "<br>Purchased: Cookie production x10.<br>";
    }
}
