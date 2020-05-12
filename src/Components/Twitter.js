import React from "react";
import TwitterLogin from "react-twitter-login";

export default props => {
  const authHandler = (err, data) => {
    console.log(err, data);
  };
  return (
    <TwitterLogin
      authCallback={authHandler}
      consumerKey={"S7avCGvlDPvhMMEYDEeOxzg2b"}
      consumerSecret={"LaV1LoKAOdCcmAeHx5QXmNgbIeyVdILvUbaFCYGI4m2YLIOI5i"}
      callbackUrl={'https://secret-recipe-be.herokuapp.com/users/'}
    />
  );
};