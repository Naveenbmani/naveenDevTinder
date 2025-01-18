// Handle Auth Middleware for all GET POST... requests
 const adminAuth=(req,res,next)=>{
    console.log("Admin Auth cheked");
    const token="123456";
    const isAdminAuthorizes=token==="123456";
    if(!isAdminAuthorizes){
      res.status(401).send("Admin is not authorized to get all data");
    }
    else{
      next();
    }
  };
  
  const userAuth=(req,res,next)=>{
    console.log("User Auth cheked");
    const token="123456";
    const isAdminAuthorizes=token==="123456";
    if(!isAdminAuthorizes){
      res.status(401).send("User is not authorized to get all data");
    }
    else{
      next();
    }
  };
  module.exports = {
    adminAuth,
    userAuth
  }