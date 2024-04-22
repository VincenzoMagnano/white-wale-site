
import './LandingPage.css'


const LandingPage = () => {


  return (
    <>
      
        
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
            Porta la tua
            <span className="text-style-1"> musica </span>
            al livello
            successivo
          </h2>

          <div className="bottom">
            <div className="Rectangle-9">
              <span className="title">
                direzione
                <span className="text-style-1"> artistica</span>
              </span>
              <p className='description'>Immergiti <u>in un anno</u> di collaborazione dedicata alla tua crescita artistica. 
                  <br /> <br /> La nostra direzione artistica non è solo una serie di schemi o checklist, ma un viaggio creativo che affrontiamo insieme.
                  <br /> <br />
                Iniziamo con la <u> definizione delle tempistiche.</u> Pianifichiamo un calendario di produzione che non solo tiene conto delle scadenze, ma che ti permette anche di esprimere al meglio la tua creatività, garantendo qualità e coerenza nel tuo percorso musicale.
                  <br /> <br />
                Passiamo poi alle <u>tematiche.</u>  Ogni artista ha una storia da raccontare e un messaggio da trasmettere. Ci dedichiamo a capire le tue esperienze, le tue passioni e le tue aspirazioni per identificare quelle tematiche che risuonano profondamente con te e con il tuo pubblico.
                  <br /> <br />
                Non meno importante è lo <u>sviluppo degli stili musicali.</u> L'arte di definire un sound distintivo che sia autenticamente tuo è una delle sfide più emozionanti. Lavoriamo insieme per trovare quel giusto equilibrio che esalta la tua voce e riflette il tuo stile unico nel vasto panorama musicale.
                <br /> <br />
                Infine, ma fondamentale, è la nostra <u> attenzione verso l'artista e il personaggio che desideri rappresentare.</u> Prima di ogni decisione creativa, ci prendiamo il tempo di conoscere profondamente chi sei come artista, assicurando che ogni direzione presa sia in perfetta sintonia con la tua visione e i tuoi valori.
                <br /> <br />
                Unisciti a noi in questo percorso di crescita e scopri come una direzione artistica su misura può fare la differenza nel tuo percorso musicale.


                <br /> <br /> Benvenuto in <u> White Wale.</u></p>
            </div>
            <div className='drum-div'>

              <img
                className='DRUMKIT'
                src="DRUMKIT.png"
                alt="" />

              <button className='DRUM-button'>Richiedi una consulenza gratuita </button>
            </div>
          </div>
    </>
  )
}

export default LandingPage
