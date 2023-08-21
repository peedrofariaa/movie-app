import { useState } from "react";
import { Background } from "./components/background";
import { DescriptionMovie } from "./components/description-movie";
import { Header } from "./components/header";
import { Movies } from "./components/movies";
import { Video } from './components/video';
import { apiData } from "./api/data";

const DEFAULT_MOVIE = {
    title:"Oppenheimer",
    description:"Physicist J. Robert Oppenheimer works with a team of scientists during the Manhattan Project, leading to the development of the atomic bomb.",
    imageBanner:"https://ovicio.com.br/wp-content/uploads/2022/07/20220721-ovicio-oppenheimer-filme.jpg",
    imagePoster:"https://static.displate.com/857x1200/displate/2023-02-12/22b56a90c70910f215548288afc0c11b_84d89f03a9678feba504b12858312fd1.jpg",
    linkVideo:"uYPbbksJxIg",
    category:"movies"
};

function App() {
  const [video, setVideo] = useState(DEFAULT_MOVIE)
  const [playVideo, setPlayVideo] = useState(false);

  const {title, description, imageBanner, linkVideo} = video

  const handleOpenPlayVideo = () => setPlayVideo(true);
  const handleClosePlayVideo = () => setPlayVideo(false);

  const handleVideo = (data) =>{
    setVideo(data)
    window.scrollTo({top:0})
  }

  return (
    <Background imageBanner={imageBanner}>
      <Header />
      <DescriptionMovie title={title} description={description} handleOpenPlayVideo={handleOpenPlayVideo} />
      <Movies data={apiData} handleVideo={(data)=> handleVideo(data)} />
      <Video playVideo={playVideo} linkVideo={linkVideo} handleClosePlayVideo={handleClosePlayVideo} />
    </Background>
  );
}

export default App;