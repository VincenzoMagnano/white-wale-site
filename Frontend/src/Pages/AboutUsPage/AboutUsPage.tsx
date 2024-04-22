
import './AboutUsPage.css';
import { Spotify } from 'react-spotify-embed';
const AboutUsPage = () => {

    return (
        <>
            <h2 className='who'>
                <span className='text-style-1'>
                    CHI
                </span> siamo</h2>
            <div className='about-us-media'>
                <div className="artist-container">
                    <div className='artist-front'>

                        <div className=' artist-card'>
                            <img
                                src="El-Premio.png"
                                alt="El Premio" />
                            <p>
                                <span className='artist-name'>El Premio</span>, un producer con 20 anni di esperienza nel laboratorio sonoro. Con una padronanza tecnica acquisita attraverso anni di pratica e studio, ha affinato la sua arte nella produzione musicale. Sperimentando con suoni e strumenti, ha perfezionato un approccio unico che mescola abilmente tradizione e innovazione. Con il suo bagaglio di esperienza e conoscenza, El Premio continua a ridefinire i confini della produzione musicale, offrendo un'esperienza sonora senza eguali ai suoi ascoltatori.
                            </p>
                        </div>


                        <div className=' artist-card'>
                            <img src="THEBIGENNE.png" alt="Thebigenne" />
                            <p>
                                <span className='artist-name'>TheBigEnne</span>, rapper e fonico con oltre 15 anni di esperienza nell'industria musicale. La sua carriera è caratterizzata da una costante ricerca di perfezionamento tecnico e artistico nel campo del rap e dell'audio engineering. Grazie alla sua conoscenza approfondita delle più moderne tecniche di registrazione, mixaggio e mastering, TheBigEnne è in grado di trasformare le idee musicali in produzioni di alta qualità. La sua umiltà lo guida nell'incessante ricerca di miglioramento, rendendolo un punto di riferimento per gli aspiranti rapper e ingegneri del suono.                                    </p>
                        </div>

                    </div>

                    {/* <span className="white-wale">
                            whitewale
                        </span> */}
                </div>
                <div className='media-container'>

                    <button className='DRUM-button about-us-btn'>Ascolta le nostre produzioni</button>
                    <Spotify link="https://open.spotify.com/playlist/4m1vFOmHxE9uQURY8otFIS?si=ee92757a548c47bc" />

                    <p>
                        Entra nella nostra playlist e ascolta le nostre produzioni,<br /> dalle più recenti alle più datate.
                    </p>
                </div>
            </div>


        </>
    )
}

export default AboutUsPage
