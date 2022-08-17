const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      vehicles: [],
      bio:[],
      vehImages: [
        {
          name: "Sand Crawler",
          urlImg:
            "https://i.pinimg.com/originals/f2/7c/8b/f27c8b2e228ae33fc2eab2df58d506e6.jpg",
        },
        {
          name: "T-16 skyhopper",
          urlImg:
            "https://media.moddb.com/cache/images/mods/1/36/35029/thumb_620x2000/Skyhopper.jpg",
        },
        {
          name: "X-34 landspeeder",
          urlImg:
            "https://lumiere-a.akamaihd.net/v1/images/E4D_IA_1136_6b8704fa.jpeg?region=237%2C0%2C1456%2C819&width=768",
        },
        {
          name: "TIE/LN starfighter",
          urlImg:
            "https://cdna.artstation.com/p/assets/images/images/002/488/170/large/bruno-parillo-screenshot135.jpg",
        },
        {
          name: "Snowspeeder",
          urlImg:
            "https://i.pinimg.com/originals/13/1b/0d/131b0d6360800d68c41cb469f9e0e504.jpg",
        },
        {
          name: "TIE bomber",
          urlImg: "https://lumiere-a.akamaihd.net/v1/images/tie-bomber-1_55813725.jpeg?region=0%2C0%2C800%2C450",
        },
        {
          name: "AT-AT",
          urlImg:
            "https://i.pinimg.com/originals/20/04/ca/2004caf55a4de767be4c18715c52b7bc.jpg",
        },
        {
          name: "AT-ST",
          urlImg: "https://lumiere-a.akamaihd.net/v1/images/AT-ST-gallery-1_85c9da66.jpeg?region=231%2C27%2C807%2C452",
        },
        {
          name: "Storm IV Twin-Pod cloud car",
          urlImg:
            "https://cdna.artstation.com/p/assets/images/images/009/354/520/large/jay-machado-cloudcar-0003.jpg",
        },
        {
          name: "Sail barge",
          urlImg:
            "https://lumiere-a.akamaihd.net/v1/images/the-khetanna_d1d5b294.jpeg?region=0%2C160%2C1560%2C879&width=768",
        },
        {
          name: "",
          urlImg: "",
        },
      ],
      planetImages: [
        {
          name: "Tatooine",
          urlImg:
            "https://wallpaperaccess.com/full/2753738.jpg",
        },        
        {
          name: "Aldeaan",
          urlImg:
            "https://pm1.narvii.com/7085/faea62f605034f7bd132dc8a59a6b2be07bdb694r1-950-672v2_hq.jpg",
        },
        {
          name: "Yavin IV",
          urlImg:
            "https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg",
        },
        {
          name: "Hoth",
          urlImg:
            "https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg",
        },
        {
          name: "Dagobah",
          urlImg:
            "https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg",
        },
        {
          name: "Bespin",
          urlImg:
            "https://i.pinimg.com/originals/01/0a/84/010a84906942293fab71455b173498d6.jpg",
        },
        {
          name: "Endor",
          urlImg:
            "http://eskipaper.com/images/beautiful-forest-wallpaper-1.jpg",
        },
        {
          name: "Naboo",
          urlImg:
            "https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg",
        },
        {
          name: "Coruscant",
          urlImg:
            "https://i.pinimg.com/originals/2f/d6/5d/2fd65d4444cb8ff75a94353d0b4154a2.jpg",
        },
        {
          name: "Kamino",
          urlImg: "https://mcdn.wallpapersafari.com/medium/99/72/YVFRgp.jpg",
        },
        {
          name: "Geonosis",
          urlImg:
            "https://i.pinimg.com/originals/25/cb/8d/25cb8d1bfaed27b42e2f9c65441fa258.jpg",
        },
      ],
      peopleImages: [
        {
          name: "Luke Skywalker",
          urlImg: "https://wallpapercave.com/wp/U3iXIJO.jpg",
        },
        {
          name: "C-3PO",
          urlImg: "https://wallpapercave.com/wp/wp2182707.jpg",
        },
        {
          name: "R2-D2",
          urlImg: "https://wallpapercave.com/wp/TCdVzW8.jpg",
        },
        {
          name: "Darth Vader",
          urlImg:
            "https://www.highreshdwallpapers.com/wp-content/uploads/2017/05/Demonic-Darth-Vader-Wallpaper-1280x960.jpg",
        },
        {
          name: "Leia Organa",
          urlImg:
            "https://i.kinja-img.com/gawker-media/image/upload/vag2wsc3hmh8yi63zu6v.jpg",
        },
        {
          name: "Owen Lars",
          urlImg:
            "https://i0.wp.com/www.heyuguys.com/images/2017/06/Joel-Edgerton-Star-Wars.jpg",
        },
        {
          name: "Beru Whitesun lars",
          urlImg:
            "https://pm1.narvii.com/6293/db859b249381c30a6be8f8242046105e552cd54d_hq.jpg",
        },
        {
          name: "R5-D4",
          urlImg:
            "https://1.bp.blogspot.com/-iGPvHwoNdYI/WSjldmO_DMI/AAAAAAAAcQc/s8Ni9i9zBXg8K0GuHt9Tngb6_mVqCr5BgCEw/s1600/IMG_1722.JPG",
        },
        {
          name: "Biggs Darklighter",
          urlImg:
            "https://www.eurobricks.com/forum/uploads/gallery/album_196/gallery_11254_196_46899.jpg",
        },
        {
          name: "Obi-Wan Kenobi",
          urlImg:
            "https://styles.redditmedia.com/t5_lf99r/styles/profileIcon_o6afu13cnh811.jpg",
        }, 
      ],
      favorites: [],
    },

    actions: {
      fetchPeople: () => {
        fetch("https://swapi.dev/api/people")
          .then((response) => response.json())
          .then((data) => {
            setStore({people: data.results});            
          })
          .catch((error) => console.log(error));
      },
      fetchPlanets: () => {
        fetch("https://swapi.dev/api/planets")
          .then((response) => response.json())
          .then((data) => {
            setStore({ planets: data.results });
          })
          .catch((error) => console.log(error));
      },

      fetchVehicles: () => {
        fetch("https://swapi.dev/api/vehicles")
          .then((response) => response.json())
          .then((data) => {
            setStore({ vehicles: data.results });
          })
          .catch((error) => console.log(error));
      },
      
      setterList:(response) => {
        setStore({bio: response})
        const store = getStore()
        console.log(store.bio)
      },  

      fetchSinglePeople:(item)=>{
        const actions = getActions()
        fetch(item,{
          method: "GET",
          headers:{"Content-type":"application/json"},
        })
          .then((resp)=>resp.json())
          .then((response)=>{actions.setterList(response)})
        
          const store = getStore()
          console.log(store.bio)        
      },


      fetchSinglePlanet:(item)=>{
        const actions = getActions()
        fetch(item,{
          method: "GET",
          headers:{"Content-type":"application/json"},
        })
          .then((resp)=>resp.json())
          .then((response)=>{actions.setterList(response)})
        
        const store = getStore()
        console.log(store.bio)
      },

      fetchSingleVehicle:(item)=>{
        const actions = getActions()
        fetch(item,{
          method: "GET",
          headers:{"Content-type":"application/json"},
        })
          .then((resp)=>resp.json())
          .then((response)=>{actions.setterList(response)})
        
        const store = getStore()
        console.log(store.bio)
      },

      addFavorite:(item)=>{
        //consultar sobre guardar getStore y getAction en variables
        const store = getStore();
        /* const actions = getActions(); */
        setStore({favorites:[...store.favorites,item]})
        console.log(store.favoriteList)
      },
      deleteFavorite:(i)=>{
        const store = getStore();
        const newList = store.favorites.filter((item,index)=>index !==i)
        setStore({favorites:newList})
        
      },

    }
  };
};

export default getState;
