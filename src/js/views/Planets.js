import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CardPlanet } from "../components/CardsPlanet";


import { Context } from "../store/appContext";

export const Planets = ({planets}) => {
  const { store, actions} = useContext(Context)
  useEffect(()=>{
    actions.fetchPlanets()
  }, [])

    return(
        <>
        <h1 className="text-warning text-center mt-5 pt-5 fw-bold text-decoration-underline">Planets</h1>
        <div className="container-fluid">
        <div className="container ">
          <div className="row ">
            <div className="carta d-flex flex-wrap col-md-12 p-0">
              {store.planets.map((item, index) => {
                return (
                  <>
                  <CardPlanet data={item} image={store.planetImages[index].urlImg} ind={index} key={index}/>                                    
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
        </>
        
        
    )
}
export default Planets;