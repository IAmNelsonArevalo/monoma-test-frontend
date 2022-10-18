import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <div class="container">
        <div class="logo">
          <img src="./assets/images/Grocasa.png" alt="Grocasa logo" />
        </div>
        <div class="row">
          <div class="col-6">
            <div class="card">
              <img
                src="./assets/images/Rectangle -3@2x.png"
                alt="Product Card"
              />
              <h3 class="card-title">Ático Dúplex de Obra Nueva</h3>
              <span class="card-description">
                Marianao, Sant Boi de Llobregat
              </span>
              <div class="row-items">
                <div class="first-item">
                  <img src="./assets/images/WEB_MATERIAL-11.svg" alt="" />
                  <span>102m^</span>
                </div>
                <div class="second-item">
                  <img src="./assets/images/WEB_MATERIAL-10.svg" alt="" />
                  <span>3</span>
                </div>
                <div class="third-item">
                  <img src="./assets/images/WEB_MATERIAL-09.svg" alt="" />
                  <span>3</span>
                </div>
                <div class="fourth-item">
                  <h1>330.000€</h1>
                </div>
                <Link to="/details" class="fiveth-item">
                  <button class="button-redirect" id="redirect">
                    Más info
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <img
                src="./assets/images/Rectangle -3@2x.png"
                alt="Product Card"
              />
              <h3 class="card-title">Ático Dúplex de Obra Nueva</h3>
              <span class="card-description">
                Marianao, Sant Boi de Llobregat
              </span>
              <div class="row-items">
                <div class="first-item">
                  <img src="./assets/images/WEB_MATERIAL-11.svg" alt="" />
                  <span>102m^</span>
                </div>
                <div class="second-item">
                  <img src="./assets/images/WEB_MATERIAL-10.svg" alt="" />
                  <span>3</span>
                </div>
                <div class="third-item">
                  <img src="./assets/images/WEB_MATERIAL-09.svg" alt="" />
                  <span>3</span>
                </div>
                <div class="fourth-item">
                  <h1>330.000€</h1>
                </div>
                <Link to="/details" class="fiveth-item">
                  <button class="button-redirect" id="redirect2">
                    Más info
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <img
                src="./assets/images/Rectangle -3@2x.png"
                alt="Product Card"
              />
              <h3 class="card-title">Ático Dúplex de Obra Nueva</h3>
              <span class="card-description">
                Marianao, Sant Boi de Llobregat
              </span>
              <div class="row-items">
                <div class="first-item">
                  <img src="./assets/images/WEB_MATERIAL-11.svg" alt="" />
                  <span>102m^</span>
                </div>
                <div class="second-item">
                  <img src="./assets/images/WEB_MATERIAL-10.svg" alt="" />
                  <span>3</span>
                </div>
                <div class="third-item">
                  <img src="./assets/images/WEB_MATERIAL-09.svg" alt="" />
                  <span>3</span>
                </div>
                <div class="fourth-item">
                  <h1>330.000€</h1>
                </div>
                <Link to="/details" class="fiveth-item">
                  <button class="button-redirect" id="redirect3">
                    Más info
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <img
                src="./assets/images/Rectangle -3@2x.png"
                alt="Product Card"
              />
              <h3 class="card-title">Ático Dúplex de Obra Nueva</h3>
              <span class="card-description">
                Marianao, Sant Boi de Llobregat
              </span>
              <div class="row-items">
                <div class="first-item">
                  <img src="./assets/images/WEB_MATERIAL-11.svg" alt="" />
                  <span>102m^</span>
                </div>
                <div class="second-item">
                  <img src="./assets/images/WEB_MATERIAL-10.svg" alt="" />
                  <span>3</span>
                </div>
                <div class="third-item">
                  <img src="./assets/images/WEB_MATERIAL-09.svg" alt="" />
                  <span>3</span>
                </div>
                <div class="fourth-item">
                  <h1>330.000€</h1>
                </div>
                <Link to="/details" class="fiveth-item">
                  <button class="button-redirect" id="redirect4">
                    Más info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
