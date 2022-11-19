const urlApi = process.env.REACT_APP_URL ||"http://localhost:4000/";
console.log("url",urlApi);

const urlWebServices = {
    loginUsers: `${urlApi }users/login`,
    loginAlumno: `${urlApi }users/loginAlumno`,
    registerUser: `${urlApi }users/registration`,
    getUsers: `${urlApi }users/getUsers`,
    updateUser: `${urlApi }users/updateUser`,
    removeUser: `${urlApi }users/:id`,
    resetPassword: `${urlApi }users/updatePassword`,
    registerClass: `${urlApi }course/registerClass`,
    getClasses: `${urlApi }course/obtenerClasses`,
    updateClass: `${urlApi }course/updateClass`,
    removeClass: `${urlApi }course/:id`,
    registerComment: `${urlApi }comment/registerComment`,
    getComments: `${urlApi }comment/obtenerComments`,
    updateComment: `${urlApi }comment/updateComment`,
    removeComment: `${urlApi }comment/:id`,
    
}

export default urlWebServices;