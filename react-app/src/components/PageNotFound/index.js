import { useHistory } from "react-router-dom";

import "./PageNotFound.css";

const PageNotFound = () => {


  const history = useHistory();


  const handleClick = async (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div className="pageNotFound-container">
      <div className="pageNotFound-banner">
          <div>
              <img src="https://user-images.githubusercontent.com/35717793/128381842-6474d294-5430-4291-99df-f062f78169ef.png"/>
          </div>
          <div className="pageNotFound-header">
            <h1>Page Not Found</h1>
          </div>
        <div className="pageNotFound-subHeader">
            <h3>Uh oh! Looks like you rolled a 404! (Too bad it wasn't for damage)</h3>
        </div>
      </div>
      <div>
        <button className="pageNotFound-btn" type="button" onClick={handleClick}>
          Take me back
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;