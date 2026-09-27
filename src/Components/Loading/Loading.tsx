import { Spinner } from "react-bootstrap";

import "./loading.css"
const Loading = () => {
    return ( 
     <div className="loading-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <p>Loading...</p>
    </div>
     );
}
 
export default Loading;