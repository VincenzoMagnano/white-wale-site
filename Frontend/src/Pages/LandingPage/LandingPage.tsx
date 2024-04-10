
import { useState } from 'react';
import Footer from '../../Components/Footer/Footer.tsx'
import Navbar from '../../Components/Navbar/Navbar'
import './LandingPage.css'

const LandingPage = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen)
  };


  return (
    <>
      <div
        onClick={menuOpen ? toggleMenu : undefined}
        className="format-page">
        <div className="page-container">
          <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
          <div className="front-container">
            <div className='inner-front'>
              <h1>Prenota subito
                la tua <span className="text-style-1">studio </span>
                session</h1>
              <span className="white-wale">
                whitewale
              </span>
              <img src="IMG_6593.jpg"
                className="STUDIO-IMAGE" />
              <button className='booking-button '>PRENOTA ORA </button>
            </div>
          </div>
          <h2 className="divide">
            Porta le tue
            <span className="text-style-1"> prod </span>
            al livello
            successivo
          </h2>

          <div className="bottom">
            <div className="Rectangle-9">
              <span className="title">
                20 anni di
                <span className="text-style-1"> sample</span>
              </span>
              <p className='description'>Con oltre due decenni di esperienza nella raccolta e nell'esplorazione dei suoni distintivi della cultura hip hop e trap, ci troviamo nel cuore della scena musicale contemporanea.

                Da piccoli club underground alle piazze principali delle città, abbiamo viaggiato attraverso le strade del ritmo e della rima, catturando l'essenza e la vitalità di ogni battito.

                Attraverso anni di ricerca appassionata e sperimentazione incrociata, abbiamo coltivato una vasta collezione di sample che riflettono la ricchezza e la diversità della cultura urbana. Dai graffiti alle esperienze di vita quotidiana, dai suoni delle strade ai ritmi intricati dei quartieri urbani, ogni sample è un frammento autentico della storia e della creatività che permea la musica hip hop e trap.

                Oggi, siamo lieti di condividere questa preziosa collezione con te. Mettiamo a disposizione dei nostri clienti non solo suoni, ma anche una finestra aperta sulle radici e l'evoluzione di generi musicali che hanno plasmato e continuano a plasmare il panorama musicale globale.

                Sia che tu sia un aspirante produttore in cerca di ispirazione, un artista alla ricerca del suono perfetto, o semplicemente un appassionato di musica desideroso di esplorare nuovi orizzonti sonori, siamo qui per offrirti un viaggio unico attraverso la vastità della musica urbana.

                Preparati a immergerti in un mondo di groove e melodia, dove le barriere culturali si dissolvono e le storie si intrecciano attraverso il linguaggio universale della musica. Siamo entusiasti di accompagnarti in questo viaggio e di essere parte della tua esperienza musicale.

                <br /> <br /> Benvenuto in White Wale.</p>
            </div>
            <div className='drum-div'>

            <img
              className='DRUMKIT'
              src="DRUMKIT.png"
              alt="" />

            <button className='DRUM-button'>ACQUISTA SUBITO </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LandingPage
