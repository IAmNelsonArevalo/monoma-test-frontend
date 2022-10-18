const Details = () => {
  let flag = false;
  const addFavorite = () => {
    
    if (!flag) {
      document.getElementById('favorite').setAttribute("src", "./assets/images/WEB_MATERIAL-06.svg") 
      flag = !flag;
    } else {
      document.getElementById('favorite').setAttribute("src", "./assets/images/WEB_MATERIAL-08.svg") 
      flag = !flag;
    }
  }

  return (
    <>
      <div className="">
        <div className="container">
          <div className="logo-details">
            <a href="/" className="img-back">
              <img src="./assets/images/WEB_MATERIAL-05.svg" alt="" />
            </a>
            <img
              src="./assets/images/Grocasa.png"
              alt=""
              className="img-logo"
            />
          </div>
        </div>
        <div className="owl-carousel owl-theme owl-loaded" id="owl-carousel">
          <div className="owl-stage-outer">
            <div className="owl-stage">
              <div className="owl-item" style={{ paddingRight: 20 }}>
                <img src="./assets/images/Rectangle -1@2x.png" alt="" style={{width: "100vw"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* option description */}
        <h1 className="option-title">Ático Dúplex de Obra Nueva</h1>
        <span className="description">
          Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta
          de una planta con entrada al salón y final en terraza. El salón da
          entrada a la cocina y al pasillo que distribuye una de las
          habitaciones dobles y uno de los cuartos. de baño de tres piezas..
          Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta
          de una planta con entrada al salón y final en terraza. El salón da
          entrada a la cocina y al pasillo que distribuye una de las
          habitaciones dobles y uno de los cuartos. de baño de tres piezas..
          Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta
          de una planta con entrada al salón y final en terraza. El salón da
          entrada a la cocina y al pasillo que distribuye una de las
          habitaciones dobles y uno de los cuartos. de baño de tres piezas..
        </span>
        <div className="card">
          <div className="row-items">
            <div className="first-item">
              <img src="./assets/images/WEB_MATERIAL-11.svg" alt="" />
              <span>102m^</span>
            </div>
            <div className="second-item">
              <img src="./assets/images/WEB_MATERIAL-10.svg" alt="" />
              <span>3</span>
            </div>
            <div className="third-item">
              <img src="./assets/images/WEB_MATERIAL-09.svg" alt="" />
              <span>2</span>
            </div>
            <div className="fourth-item"></div>
            <div
              className="fiveth-item"
              style={{
                display: "flex",
                gap: 20,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <h1 className="price">330.000€</h1>
              <img
                src="./assets/images/WEB_MATERIAL-08.svg"
                width="30"
                id="favorite"
                alt="favorite"
                onClick={addFavorite}
              />
            </div>
          </div>
        </div>

        <div className="container-list">
          <div className="col-6-list">
            <h3 className="title-contents">Características</h3>
            <ul className="list">
              <li>Ático 102 m2 (construidos)</li>
              <li>3 Habitaciones</li>
              <li>Segunda mano100 m2 (útiles)</li>
              <li>Reformado</li>
              <li>2 Baños</li>
            </ul>
          </div>

          <div className="col-6-list">
            <h3 className="title-contents">Extras</h3>
            <ul className="list">
              <li>Terraza</li>
              <li>Balcón</li>
              <li>Ascensor</li>
              <li>Calefacción</li>
              <li>Aire acondicionado</li>
            </ul>
          </div>
        </div>
        {/* Map */}
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=San%20Baudilio%20de%20llobregat&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="map"
            ></iframe>
          </div>
        </div>

        {/* Alert me about the price will down */}
        <div className="alert-me">
          <span>Avísame si baja</span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
          <button>Contactar</button>
        </div>

        {/* Recommended Options. */}
        <div className="recommended-option">
          <h1 className="title">También pueden interesarte</h1>
          <div className="row">
            <div className="col-6">
              <div className="card">
                <img
                  src="./assets/images/Rectangle -1@2x.png"
                  alt="Product Card"
                />
                <h3 className="card-title">Ático Dúplex de Obra Nueva</h3>
                <span className="card-description">
                  Marianao, Sant Boi de Llobregat
                </span>
                <div className="row-items">
                  <div className="first-item">
                    <img src="./assets/images/WEB_MATERIAL-11.svg" alt="" />
                    <span>102m^</span>
                  </div>
                  <div className="second-item">
                    <img src="./assets/images/WEB_MATERIAL-10.svg" alt="" />
                    <span>3</span>
                  </div>
                  <div className="third-item">
                    <img src="./assets/images/WEB_MATERIAL-09.svg" alt="" />
                    <span>3</span>
                  </div>
                  <div className="fourth-item">
                    <h1>330.000€</h1>
                  </div>
                  <div className="fiveth-item">
                    <button className="button-redirect" id="redirect">
                      Más info
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <img
                  src="./assets/images/Rectangle -1@2x.png"
                  alt="Product Card"
                />
                <h3 className="card-title">Ático Dúplex de Obra Nueva</h3>
                <span className="card-description">
                  Marianao, Sant Boi de Llobregat
                </span>
                <div className="row-items">
                  <div className="first-item">
                    <img src="./assets/images/WEB_MATERIAL-11.svg" alt="" />
                    <span>102m^</span>
                  </div>
                  <div className="second-item">
                    <img src="./assets/images/WEB_MATERIAL-10.svg" alt="" />
                    <span>3</span>
                  </div>
                  <div className="third-item">
                    <img src="./assets/images/WEB_MATERIAL-09.svg" alt="" />
                    <span>3</span>
                  </div>
                  <div className="fourth-item">
                    <h1>330.000€</h1>
                  </div>
                  <div className="fiveth-item">
                    <button className="button-redirect" id="redirect">
                      Más info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
