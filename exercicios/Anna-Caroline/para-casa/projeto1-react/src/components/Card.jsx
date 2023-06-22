import AnimeTitle from "./AnimeTitle"
import Image from "./Image"
import Subtitle from "./Subtitle"
import TextCard from "./TextCard"
import kimetsu from '../assets/kimetsu.jpg'
import jujutsu from '../assets/jujutsu.jpg'
import ouran from '../assets/Ouran.webp'
import kamisama from '../assets/kamisama.jpg'




const Card = () =>{
    return (
        <>
        <div className="card">
        <AnimeTitle text='Kimetsu no Yaiba'/>
        <Subtitle>2019</Subtitle>
        <Image image={kimetsu}/>
        <TextCard text= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus quis vitae quos facere, voluptates consequatur inventore architecto eius, distinctio aspernatur eligendi nisi aut id reprehenderit ipsum sunt temporibus repellat.'/>
        </div>

        <div className="card">
        <AnimeTitle text='Jujutsu Kaisen'/>
        <Subtitle>2020</Subtitle>
        <Image image={jujutsu}/>
        <TextCard text= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus quis vitae quos facere, voluptates consequatur inventore architecto eius, distinctio aspernatur eligendi nisi aut id reprehenderit ipsum sunt temporibus repellat.'/>
        </div>

        <div className="card">
        <AnimeTitle text='Ouran High School Host Club'/>
        <Subtitle>2020</Subtitle>
        <Image image={ouran}/>
        <TextCard text= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus quis vitae quos facere, voluptates consequatur inventore architecto eius, distinctio aspernatur eligendi nisi aut id reprehenderit ipsum sunt temporibus repellat.'/>
        </div>

        <div className="card">
        <AnimeTitle text='Kamisama Hajimemashita'/>
        <Subtitle>2012</Subtitle>
        <Image image={kamisama}/>
        <TextCard text= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus quis vitae quos facere, voluptates consequatur inventore architecto eius, distinctio aspernatur eligendi nisi aut id reprehenderit ipsum sunt temporibus repellat.'/>
        </div>
        
        </>
    

    )
}

export default Card 