import YouTube from 'react-youtube';
import heatmap from "../assets/Heatmap.jpg"
import boxplot from "../assets/Box-plot.jpg"
import LDA from "../assets/LDA on genres.jpg"
import PCA from "../assets/PCS on genres.jpg"
import box from "../assets/Boxplot.jpg"
import map from "../assets/Correlation heatmap.jpg"
import pca from "../assets/PCA.jpg"
import tsne from "../assets/t-SNE.jpg"
const Home=()=>{
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
           
            autoplay: 1,
        },
    };
return(
    <div className="bg-white w-screen h-screen overflow-x-hidden"> 
    <div className="flex justify-center">
<div className="text-[30px] font-serif  "> "Harmonify: Your Ultimate Music Genre Classifier & Recommendation System"</div>
</div>
<ul className="flex p-5 justify-center flex-wrap">
        <li className="p-5 ">Salla Kaushik</li>
        <li className="p-5">Aditya Trivedi</li>
        <li className="p-5">Sri Ganesh</li>
        <li className="p-5">Abhijan Theja</li>
        <li className="p-5">Shubham Kumar</li>
        <li className="p-5">Rahul Reddy</li>
        <li className="p-5">Karan Reddy</li>
    </ul>
    <div className='flex justify-center'>
        <a className='font-bold hover:underline' href='https://github.com/rahulrangers/Music-Recommendation-System'>Code|</a>
        <a className='font-bold'>Dataset|</a>
        <a className='font-bold'>Code </a>
    </div>
    <div className="px-28 py-5 font-bold" >"Welcome to our Music Genre Classifier and Recommendation System! This versatile tool utilizes machine learning to not only classify music genres based on various audio features but also recommend similar songs tailored to your preferences. Upload your audio file and discover its genre, as well as receive personalized recommendations based on your favorite tunes!"</div>
    <div className="text-[25px] font-bold px-28">Explanation of the purpose of the classifier & recommendation system: </div>
    <div className="px-28 py-5  ">Our classifier and recommendation system cater to music enthusiasts and professionals alike, offering a convenient way to identify the genre of a song and discover new music that resonates with your taste. Whether you're organizing your music library, creating playlists, or exploring new genres, our tool is here to assist you every step of the way.</div>
    <div className="text-[25px] font-bold px-28">Abstract</div>
    <div className="px-28 py-5 ">The digital music landscape offers a vast array of choices, making efficient music discovery challenging. This project addresses this challenge by developing a personalized music recommendation system based solely on song names and a robust music genre classification system.

Our personalized music recommendation system utilizes machine-learning techniques to generate song suggestions based on song names alone. While it doesn't delve into user listening history or preferences, it provides a convenient way for users to discover new songs that align with their current interests. The system's simplicity and efficiency make it a valuable tool for quick and easy music exploration.

In contrast, our music genre classification system employs various machine learning algorithms such as Logistic Regression, SVM, Random Forest, and Light GBM. We rigorously evaluate these algorithms using real-world datasets, demonstrating their effectiveness in accurately classifying songs into distinct genres.

Through comprehensive evaluation and user studies, we showcase the strengths of both systems. The recommendation system simplifies song discovery, while the classification system offers a structured approach to exploring music genres. Together, these systems aim to enhance user engagement and navigation within the digital music landscape.
</div>
<div className="text-[25px] font-bold px-28">Datasets:</div>
<div class="px-28">GTZAN: Audio files with “.wav” format have been used.</div>
<div class="px-28 py-1">The content of the data set:</div>
<div class="px-28"> 
    <p>● Collection of 10 genres with 100 audio files each.</p>
    <p>● Each Audio file is around 30 seconds long.</p>
</div>
<div class="px-28 py-1">Spotify Dataset:</div>
<div class="px-28 py-1">The Spotify Top Tracks Dataset is sourced from the
Spotify API, capturing top tracks by various artists.
It encompasses a variety of musical features for each
track:</div>
<div class="px-28 ml-10">
        <p>• track_name: Name of the track</p>
        <p>• artist_name: Artist’s name</p>
        <p>• album_name: Album name</p>
        <p>• track_id: Spotify ID</p>
        <p>• danceability, energy, loudness, speechiness, acousticness, instrumentalness, liveness, valence, tempo:Audio Features</p>
<p>• duration_ms: Track duration in ms</p></div>
<div class="px-28"> 
    <p>● This CSV dataset contains around 180000 audio data along with 1500 songs of bollywood.</p>
</div>

<div className="text-[25px] font-bold px-28">Plots generated in music genre classfier:</div>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center mx-auto max-w-5xl">
    <div class="m-4 w-[500px]">
        <div className='px-28 py-5 font-bold ml-[50px]' >Box-plot:</div>
        <img src={boxplot}alt="Plot 1" class="max-w-full h-auto"/>
    </div>

    <div class="ml-[300px] w-[300px]">
        <div className='px-28 py-5 font-bold ' >Correlation-heatmap:</div>
        <img src={heatmap} alt="Plot 2" class="max-w-full h-auto"/>
    </div>
</div>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center mx-auto max-w-5xl">
    <div class="m-4 w-[500px]">
        <div className='px-28 py-5 font-bold ml-[150px] ' >LDA:</div>
        <img src={LDA} alt="Plot 2" class="max-w-full h-auto"/>
    </div>

    <div class="ml-[300px] w-[400px]">
        <div className='px-28 py-5 font-bold ml-[100px] ' >PCA:</div>
        <img src={PCA} alt="Plot 2" class="max-w-full h-auto"/>
    </div>

    
</div>
<div className="text-[25px] font-bold px-28">Plots generated in music recommendation System:</div>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center mx-auto max-w-5xl">
    <div class="m-4 w-[500px]">
        <div className='px-28 py-5 font-bold ml-[50px]' >Box-plot:</div>
        <img src={box}alt="Plot 1" class="max-w-full h-auto"/>
    </div>

    <div class="ml-[350px] w-[500px]">
        <div className='px-28 py-5 font-bold ' >Correlation-heatmap:</div>
        <img src={map} alt="Plot 2" class="max-w-full h-auto"/>
    </div>
</div>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center mx-auto max-w-5xl">
    <div class="w-[500px]">
        <div className='px-28 py-5 font-bold ml-[150px] ' >t-SNE:</div>
        <img src={tsne} alt="Plot 2" class="max-w-full h-auto"/>
    </div>

    <div class="ml-[350px] w-[500px]">
        <div className='px-28 py-5 font-bold ml-[100px] ' >PCA:</div>
        <img src={pca} alt="Plot 2" class="max-w-full h-auto"/>
    </div>

    
</div>

<div className="text-[25px] font-bold px-28 py-5 ">"Explore Our Resources":</div>
<div class='w-10px'>
    <div>
        <a className='ml-[200px] font-bold  hover:underline' href='https://www.kaggle.com/code/vatsalmavani/music-recommendation-system-using-spotify-dataset/notebook'>1) Kaggle-Music Recommendation</a>
    </div>
    <div>
        <a className='ml-[200px] font-bold  hover:underline' href='https://www.kaggle.com/datasets/andradaolteanu/gtzan-dataset-music-genre-classification'>2) GTZAN Dataset - Music Genre Classification</a>
    </div>
    <div>
        <a className='ml-[200px] font-bold  hover:underline' href='https://developer.spotify.com/documentation/web-api'>3) Spotify API - Music Recommendation System</a>
    </div>
    
</div>

        
        
<div className="text-[25px] font-bold px-28 py-5 ">Spotlight Video:</div>

    </div>
)
}
export default Home