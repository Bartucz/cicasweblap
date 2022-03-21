class Kep {
  constructor(elem, adat) {
    this.elem = elem;
    this.adat = adat;
    this.cim = this.elem.children("h3");
    this.kep = this.elem.children("img");
    this.leiras = this.elem.children("p");

    this.elem.on("click", () => {
      this.kattintasTrigger();
    });

    this.setKepek(this.adat);
  }

  setKepek(adat) {
    this.cim.html(adat.cim);
    this.kep.attr("src", adat.eleresiUt);
    this.leiras.html(adat.leiras);
  }

  kattintasTrigger() {
    let esemeny = new CustomEvent("kepreKattintas", { detail: this.adat });
    window.dispatchEvent(esemeny);
  }
}

$(function () {
    const kepek = [
      {
        cim: "Kép 1",
        eleresiUt: "kepek/_DSC7025.jpg",
        leiras: "Kép 1 leírás",
      },
      {
        cim: "Kép 2",
        eleresiUt: "kepek/_DSC7365.jpg",
        leiras: "Kép 2 leírás",
      },
      {
        cim: "Kép 3",
        eleresiUt: "kepek/_DSC7371_1.jpg",
        leiras: "Kép 3 leírás",
      }
    ];
    const szuloElem = $("section");
    const sablonElem = $(".kiskep");
    const nagykep = $("#nagykep");
    var i = 1;
  
    kepek.forEach(function (adat) {
      let ujElem = sablonElem.clone().appendTo(szuloElem);
      const kep = new Kep(ujElem, adat);
    });
  
    sablonElem.remove();
  
    let ujElem = sablonElem.clone().appendTo(nagykep);
    const nagyKartya = new Kep(ujElem, kepek[0]);

    $("#balra").click(balra);
    $("#jobbra").click(jobbra);
  
    $(window).on("kepreKattintas", (event) => {
        console.log(event.detail);
        nagyKartya.setKepek(event.detail);
    });
  
    function balra() {
      i--;
      if (i < 0) {
        i = kepek.length - 1;
      }
      nagyKartya.setKepek(kepek[i]);
    }
    function jobbra() {
      i++;
      if (i > kepek.length - 1) {
        i = 0;
      }
      nagyKartya.setKepek(kepek[i]);
    }
  });
  