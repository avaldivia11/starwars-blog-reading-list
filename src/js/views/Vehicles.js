import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CardVehicle } from "../components/CardsVehicle";

import { Context } from "../store/appContext";

const Vehicles = ({ vehicles }) => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.fetchVehicles();
  }, []);

  return (
    <>
      <h1 className="text-warning text-center mt-5 pt-5 fw-bold text-decoration-underline">Vehicles</h1>
      <div className="container-fluid">
        <div className="container ">
          <div className="row ">
            <div className="carta d-flex flex-wrap col-md-12 p-0">
              {store.vehicles.map((item, index) => {
                return (
                  <>
                    <CardVehicle
                      data={item}
                      image={store.vehImages[index].urlImg}
                      ind={index}
                      key={index}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Vehicles;
