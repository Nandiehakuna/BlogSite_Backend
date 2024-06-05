const Register = (req, res, next)=>{
    res.json("register the user ");
}

const Login = (req, res, next)=>{
    res.json("login ")
}

// /api/users/:id
const getUser= (req, res, next)=>{
    res.json("login ")
}

const changeAvatar= (req,res, next)=>{
    res.json(" change the user profile ")
}


// api/users/change_profile


const edit_user = (req, res, next)=>{
    res.json("edit the user ")
}

const getAuthors = (req, res, next)=>{
    res.json("to get all the authors ")
}

module.exports={Register, Login,getUser, getAuthors, changeAvatar, edit_user}

