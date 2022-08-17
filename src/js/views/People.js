import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CardPeople } from "../components/CardsPeople";
import Pagination from "../components/Pagination";

import { Context } from "../store/appContext";


export default function People({  previous, next, onPrevious, onNext   }) {
 const { store, actions} = useContext(Context)

 useEffect(()=>{
  actions.fetchPeople()
 },[])

  return (
    <>
      <h1 className="text-warning text-center mt-5 pt-5 fw-bold text-decoration-underline">People</h1>
      <div className="container-fluid">
        <div className="container ">
          <div className="row ">
            <div className="carta d-flex flex-wrap col-md-12 p-0">
              {store.people.map((item, index) => {                   
                return (
                  <>                  
                        <CardPeople data={item} image={store.peopleImages[index].urlImg} ind={index} key={index}/>        
                  </>
                );
              })}                
            </div>
          </div>
        </div>
      </div>
      <Pagination  previous={previous} next={next} onNext={onNext} onPrevious={onPrevious}/>
    </>
  );
}
