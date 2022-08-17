import React from "react";
import { useContext } from "react";

import { Context } from "../store/appContext";

export const CardPeople = (props) => {
  const { store, actions } = useContext(Context);
  //console.log("salida de props", props);

  const sendName=()=>{
    let nameItem = props.data.name
    actions.addFavorite(nameItem);
  }

  const sendUrl = async () => {
    let url = props.data.url;
    await actions.fetchSinglePeople(url);
  };

  return (
    <>
      <div
        className="modal fade"
        id={`exampleModal${props.ind}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5
                className="modal-title ms-auto text-warning"
                id="exampleModalLabel"
              >
                {store.bio.name}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-7">
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div>
                      <p className="text-warning mt-3">
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi atque minus in voluptatum sed, deleniti iste ipsum
                        exercitationem aliquam vero voluptate vitae dolore?
                        Laboriosam aliquid similique ipsum autem, nesciunt sunt.
                        Exercitationem assumenda, dolorem nihil aliquam corporis
                        adipisci qui repellendus. Fugiat incidunt laborum,
                        necessitatibus cumque odio, atque adipisci inventore,
                        recusandae modi tempore eaque minus fugit velit
                        consectetur culpa. Quo, atque distinctio. Expedita velit
                        minus ipsam ipsum nam, veniam, esse sint autem magnam,
                        aliquam perspiciatis. Iure quos error placeat nobis
                        accusamus exercitationem dolore, neque asperiores
                        laboriosam rem accusantium esse".
                      </p>
                    </div>
                  </div>
                  <div class="col-md-5 text-white ">
                    <p>
                      <b>Description: </b>Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Nisi atque minus in voluptatum sed,
                      deleniti iste ipsum exercitationem aliquam vero voluptate
                      vitae dolore? Laboriosam aliquid similique ipsum autem,
                      nesciunt sunt. Exercitationem assumenda, dolorem nihil
                      aliquam corporis adipisci qui repellendus. Fugiat incidunt
                      laborum, necessitatibus cumque odio, atque adipisci
                      inventore, recusandae modi tempore eaque minus fugit velit
                      consectetur culpa. Quo, atque distinctio. Expedita velit
                      minus ipsam ipsum nam, veniam, esse sint autem magnam,
                      aliquam perspiciatis. Iure quos error placeat nobis
                      accusamus exercitationem dolore, neque asperiores
                      laboriosam rem accusantium esse.
                    </p>
                    <hr></hr>
                    <p>
                      <b>Birth Year: </b>
                      {props.data.birth_year}
                    </p>
                    <hr></hr>
                    <p>
                      <b>Gender:</b> {props.data.gender}
                    </p>
                    <hr></hr>
                    <p>
                      <b>Height: </b> {props.data.height}
                    </p>
                    <hr></hr>
                    <p>
                      <b>Mass: </b>
                      {props.data.mass}
                    </p>
                    <hr></hr>
                    <p>
                      <b>Hair Color: </b> {props.data.hair_color}
                    </p>
                    <hr></hr>
                    <p>
                      <b>Skin Color: </b>
                      {props.data.skin_color}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card col-md-3 m-5 bg-warning">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body bg-warning">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text"></p>
        </div>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item list-group-item-dark">
            Gender: {props.data.gender}
          </li>
          <li className="list-group-item list-group-item-dark">
            Height: {props.data.height}
          </li>
          <li className="list-group-item list-group-item-dark">
            Mass: {props.data.mass}
          </li>
          <li className="list-group-item list-group-item-dark">
            Hair Color: {props.data.hair_color}
          </li>
          <button
            type="button"
            className="btn btn-dark text-warning"
            onClick={() => sendUrl()}
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal${props.ind}`}
          >
            See Character
          </button>
          <button  
        className="btn btn-danger"
        onClick={()=>sendName()}
        >
        <i className="bi bi-star-half"></i>
        </button>
        </ul>
      </div>
    </>
  );
};
