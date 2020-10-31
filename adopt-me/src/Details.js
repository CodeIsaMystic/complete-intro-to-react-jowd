import React from "react";


const Details = (props) => {
  
  /** Debugging Trick
   *  preformatted, code for code, & JSON stringify
   *  it's a way to see everything's coming from the router
   *
   *   
   **/
  return (
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>    
  );

}

export default Details;