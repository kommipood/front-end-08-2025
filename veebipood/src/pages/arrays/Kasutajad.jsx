import { useState } from "react";
import ArraysHome from "./ArraysHome"
import kasutajadFailist from "../../data/kasutajad.json"

function Kasutajad() {
  const [kasutajad, setKasutajad] = useState(kasutajadFailist);

  function reset() {
    setKasutajad(kasutajadFailist);
  }

  function sorteeriKasvavalt() {
    kasutajad.sort((a, b) => a.kasutajanimi.localeCompare(b.kasutajanimi));
    setKasutajad(kasutajad.slice());
  }

  function sorteeriKahanevalt() {
    kasutajad.sort((a, b) => b.kasutajanimi.localeCompare(a.kasutajanimi));
    setKasutajad(kasutajad.slice());
  }

  function regArvKasvavalt() {
    kasutajad.sort((a, b) => a.aasta - b.aasta);
    setKasutajad(kasutajad.slice());
  }

  function regArvKahanevalt() {
    kasutajad.sort((a, b) => b.aasta - a.aasta);
    setKasutajad(kasutajad.slice());
  }

   function postArvKasvavalt() {
    kasutajad.sort((a, b) => a.postitusi - b.postitusi);
    setKasutajad(kasutajad.slice());
  }

  function postArvKahanevalt() {
    kasutajad.sort((a, b) => b.postitusi - a.postitusi);
    setKasutajad(kasutajad.slice());
  }

  function filtreeriMark_() {
    const vastus = kasutajad.filter(kasutaja => kasutaja.kasutajanimi.includes("_"));
    setKasutajad(vastus);
  }

  function filtreeriHiljem2000() {
    const vastus = kasutajad.filter(kasutaja => kasutaja.aasta > 2020);
    setKasutajad(vastus);
  }

  function filtreeriSuurem100() {
    const vastus = kasutajad.filter(kasutaja => kasutaja.postitusi > 100);
    setKasutajad(vastus);
  }

  return (
    <div>
        <ArraysHome></ArraysHome>
        <div>Kasutajaid kokku: {kasutajad.length} tk</div>
        <button onClick={reset}>Reset</button>
        <br></br>
        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
        <button onClick={regArvKasvavalt}>Registreerimise arv kasvavalt</button>
        <button onClick={regArvKahanevalt}>Registreerimise arv kahanevalt</button>
        <button onClick={postArvKasvavalt}>Postituste arv kasvavalt</button>
        <button onClick={postArvKahanevalt}>Postituste arv kahanevalt</button>
        <button onClick={filtreeriMark_}>Filtreeri kasutajanimes märk _</button>
        <button onClick={filtreeriHiljem2000}>Filtreeri hiljem registreeritud kui 2000</button>
        <button onClick={filtreeriSuurem100}>Postituste arv suurem kui 100</button>
        {kasutajad.map((kasutaja, index) => <div key={index}>{kasutaja.kasutajanimi} - {kasutaja.aasta} - {kasutaja.postitusi}</div>)}
    </div>
  )
}

export default Kasutajad

//Kodus kasutajad ja haldakasutajad muuta

//arv:mitu tk
//reset

// sorteeri A-Z
// sorteeri Z-A

// registreerumise aasta kasvavalt
// registreerumise aasta kahanevalt

// postituste arv kasvavalt
// postituste arv kahanevalt

//filtreeri, kellel kasutaja nimes märk "_"
//kes on registreerunud hiljem kui 2000
//kellel postitute arv suurem kui 100