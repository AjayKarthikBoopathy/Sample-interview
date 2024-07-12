import { useEffect, useState } from 'react';
import './App.css';
//import User from './User';


function App() {
  const [images, setImages] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

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
