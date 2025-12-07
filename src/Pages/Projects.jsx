import React from 'react'
import '../styles/Projects.css'
import { useState , useEffect } from 'react'
import {collection , getDocs} from 'firebase/firestore'
import {db} from '../Firebase/firebase'
function Projects() {
  const [items , setItems] = useState([]);

  useEffect(()=>{
    const getDate = async () =>{
      const querySnap = await getDocs(collection(db,'content'));
      const data = querySnap.docs.map((doc)=>({id:doc.id , ...doc.data()}));
      setItems(data);

    }
    getDate();
  },[])


  return (
    <section className="Projects">
            <div className="projectsCont">
                <div key={items.id} className="projectCards">
                  <div className="projectCardImg">
                    <img src={items.imageUrl} alt={items.title} />
                  </div>
                  <div className="projectCardCont">
                    <p>{items.description}</p>
                  </div>
                  <div className="projectCardLink">
                     <a href={items.link}>vist website</a>
                  </div>
                </div>
            </div>               
    </section>
  )
}
export default Projects
