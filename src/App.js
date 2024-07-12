import { useEffect, useState } from 'react';
import './App.css';
//import User from './User';
import video from './video/videofile.mp4'
import ReactPlayer from 'react-player'


function App() {
  const [images, setImages] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [img, setImg] = useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FCartoon-Sticker-Kindergarten-Decoration-Adhesive%2Fdp%2FB08ZYQ5RDH&psig=AOvVaw3j62H17Iuctq-yOPDZkHTl&ust=1720848377345000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjn9_nhoIcDFQAAAAAdAAAAABAE");

  const imgData = "https://i.pinimg.com/originals/f4/ed/18/f4ed18e4f8c07a1688153de9daa5bd6c.jpg"

  useEffect(() => {
    const getUsersData = async () => {
      const response = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json", {
          method: "GET",
      });
      const data = await response.json();
      setImages(data);
      setCurrentItems(data);
  }
  getUsersData();
  }, [])
 
  return (
    <div>
      {/* <User data={ images } /> */}

      <div>
        <p className='parentt'>
          Welcome
        </p>
      </div>

      <div>
        <p className='heading'>
          Hello World
        </p>
      </div>

<div className='content'>
      <div className='profile'>
        <img src={imgData} alt='Jerry'/>
      </div>

      <div className='videobox'>
        <video src={video} width="600" height="450" controls>
        </video>
      </div>
      </div>


      {/* <div className='player-wrapper'>
          <ReactPlayer
            className='react-player fixed-bottom'
            url= 'M_03292018202006_00000000U2940605_1_001-1.MP4'
            width='100%'
            height='100%'
            controls = {true}

          />
        </div> */}

      

      <div className="container">
         <h2 className="card-title text-center h2" style={{ marginTop: 40 }}>Check User Details</h2>
        <div className="row m-2">
          
          {currentItems.map(image => {
             return (
             
            
              <div className="shadow-lg p-3 mb-5 bg-white rounded">
             
            

            <div key={image.id} className="col-sm-6 col-md-4 v my-2">
               <div className="card shadow-sm w-100" style={{ minHeight: 200 }}>
                 <div className="card-body">
                   <h5 className="card-title text-center h3">Id :{image.id} </h5>
                   <h6 className="card-subtitle mb-2 text-muted text-center">
                       {image.name}
                  </h6>
                  <p className="card-text text-center">{image.email}</p>
                </div>
              </div>
            </div>
            

            </div>
               )
           })}


          </div>
          </div>
                    

    </div>
  );
}

export default App;
