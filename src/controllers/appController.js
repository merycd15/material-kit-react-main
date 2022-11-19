/* eslint-disable prefer-const */
import urlWebServices from "./webServices";

export const loginUser= async function(login)
{
    // url webservices
    let url = urlWebServices.loginUsers;
    // armo json con datos
    const formData = new URLSearchParams();
    console.log("loginController",login)
    formData.append('email', login.email);
    formData.append('password', login.password);
    // console.log("dato",formData);
    // console.log("url",url);
    try
    {          
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData
        });
        console.log("respuestaBD",response)
        let rdo = response.status;
        console.log("response",rdo);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo)
            {
                case 201:
                {
                    // guardo token
                    localStorage.setItem("x",data.token);
                    localStorage.setItem("email",login.email);
                    localStorage.setItem("rol",data.rol);
                    return ({rdo:0,mensaje:"Ok"});// correcto
                }
                case 202:
                {
                    // error mail                    
                    return ({rdo:1,mensaje:"El mail ingresado no existe en nuestra base."});
                }
                case 203:
                {
                    // error password                    
                    return ({rdo:1,mensaje:"La contraseña no es correcta."});
                }
                default:
                {
                    // otro error                    
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {        
        console.log("error",error);
    };
}

export const loginPaciente= async function(login)
{
    // url webservices
    let url = urlWebServices.loginPaciente;
    // armo json con datos
    const formData = new URLSearchParams();
    console.log("loginController",login)
    formData.append('dni', login.dni);
    formData.append('password', login.password);
    // console.log("dato",formData);
    // console.log("url",url);
    try
    {          
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData
        });
        console.log("respuestaBD",response)
        let rdo = response.status;
        console.log("response",rdo);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo)
            {
                case 201:
                {
                    // guardo token
                    localStorage.setItem("x",data.token);
                    localStorage.setItem("dni",login.dni);
                    return ({rdo:0,mensaje:"Ok"});// correcto
                }
                case 202:
                {
                    // error mail                    
                    return ({rdo:1,mensaje:"El mail ingresado no existe en nuestra base."});
                }
                case 203:
                {
                    // error password                    
                    return ({rdo:1,mensaje:"La contraseña no es correcta."});
                }
                default:
                {
                    // otro error                    
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {        
        console.log("error",error);
    };
}

export const datosPacientes= async function(user){
    // url webservices
    let url = urlWebServices.datosPacientes;
    // armo json con datos
    const formData = new URLSearchParams();
    // formData.append('dni', dni);
    let {dni} = user
    
    console.log("dni en nutri controller",dni)
    formData.append('dni', dni);

    console.log("este es el token con nutri controller",user.token)
    // console.log("dato",formData);
    // console.log("url",url);
    try
    {                                                                                          
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                "x-access-token": user.token,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData
        })
      
        console.log("respuestaBD",response)
        let rdo = response.status;
        console.log("response RDO nutri",rdo);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo)
            {
                case 200:
                {
                    // guardo token
                    return ({rdo:0,mensaje:"Ok",data});// correcto
                }
                case 202:
                {
                    // error mail                    

                    return ({rdo:1,mensaje:"No existe en la base del sistema."});
                }
                case 203:
                {
                    // error password                    
                    return ({rdo:1,mensaje:"La contraseña no es correcta."});
                }
                default:
                {
                    // otro error                    
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {        
        console.log("error",error);
    };
}

export const datosUsers= async function(user){
    // url webservices
    let url = urlWebServices.datosUsers;
    // armo json con datos
    const formData = new URLSearchParams();
    // formData.append('dni', dni);
    let {dni} = user
    
    console.log("dni en nutri controller",dni)
    formData.append('dni', dni);

    console.log("este es el token con nutri controller",user.token)
    // console.log("dato",formData);
    // console.log("url",url);
    try
    {                                                                                          
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                "x-access-token": user.token,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData
        })
      
        console.log("respuestaBD",response)
        let rdo = response.status;
        console.log("response RDO nutri",rdo);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo)
            {
                case 200:
                {
                    // guardo token
                    return ({rdo:0,mensaje:"Ok",data});// correcto
                }
                case 202:
                {
                    // error mail                    
                    return ({rdo:1,mensaje:"El mail ingresado no existe en nuestra base."});
                }
                case 203:
                {
                    // error password                    
                    return ({rdo:1,mensaje:"La contraseña no es correcta."});
                }
                default:
                {
                    // otro error                    
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {        
        console.log("error",error);
    };
}

export const registrarPaciente= async function(paciente){
    // url webservices
    let url = urlWebServices.registrarPaciente;
    const formData = new URLSearchParams();
    console.log("loginController",paciente)
    formData.append('name', paciente.name);
    formData.append('apellido', paciente.apellido);
    formData.append('nroDocumento', paciente.nroDocumento);
    formData.append('email', paciente.email);
    formData.append('genero', paciente.genero);
    formData.append('direccion', paciente.direccion);
    formData.append('obraSocial', paciente.obraSocial);
    formData.append('plan', paciente.plan);
    formData.append('afiliado', paciente.afiliado);
    formData.append('fechaNac', paciente.fechaNac);
    formData.append('password', paciente.password);
    formData.append('provincia', paciente.provincia);
    formData.append('localidad', paciente.localidad);
    formData.append('codPostal', paciente.codPostal);
    formData.append('tipoDocumento', paciente.tipoDocumento);
    formData.append('nacionalidad', paciente.nacionalidad);
    formData.append('telefono', paciente.telefono);

    // console.log("dato",formData);
    // console.log("url",url);
    try
    {          
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData
        })
        console.log("respuestaBD",response)
        let rdo = response.status;
        console.log("response RDO nutri",rdo);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo)
            {
                case 201:
                {
                    // guardo token
                    return ({rdo:0,mensaje:"Ok",data});// correcto
                }
                case 202:
                {
                    // error mail                    
                    return ({rdo:1,mensaje:"El paciente ya existe"});
                }                
                default:
                {
                    // otro error                    
                    return ({rdo:2,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {        
        console.log("error",error);
    };
}

export const listadoPacientes= async function(){
    // url webservices
    let url = urlWebServices.listadoPacientes;
    const formData = new URLSearchParams();
    try
    {          
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData
        })
        console.log("respuestaBD",response)
        let rdo = response.status;
        console.log("response RDO nutri",rdo);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo)
            {
                case 200:
                {
                    // guardo token
                    return ({rdo:0,mensaje:"Ok",data});// correcto
                }
                
                case 202:
                {
                    // error mail                    
                    return ({rdo:1,mensaje:"El paciente ya existe"});
                }                
                default:
                {
                    // otro error                    
                    return ({rdo:2,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {        
        console.log("error",error);
    };
}

export const cambiarPass= async function(paciente){
    // url webservices
    let url = urlWebServices.cambiarPass;
    // armo json con datos
    const formData = new URLSearchParams();
    // formData.append('dni', dni);

    formData.append('dni',paciente.dni);
    formData.append('password',paciente.password);

    // console.log("dato",formData);
    // console.log("url",url);
    console.log("Form data en nutri",formData)
    try
    {                                                                                          
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                "x-access-token": paciente.token,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData
        })
        
        let rdo = response.status;

        let data = await response.json();


            switch(rdo)
            {
                case 200:
                {
                    // guardo token
                    return ({rdo:0,mensaje:"Ok",data});// correcto
                }
                case 202:
                {
                    // error mail                    
                    return ({rdo:1,mensaje:"No existe en nuestra base."});
                }
                case 203:
                {
                    // error password                    
                    return ({rdo:2,mensaje:"La contraseña no es correcta."});
                }
                default:
                {
                    // otro error                    
                    return ({rdo:3,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {        
        console.log("error",error);
    };
}

export const registrarPersonal= async function(personal){
    // url webservices
    let url = urlWebServices.registrarPersonal;
    const formData = new URLSearchParams();
    console.log("loginController",personal)
    formData.append('name', personal.name);
    formData.append('apellido', personal.apellido);
    formData.append('nroDocumento', personal.nroDocumento);
    formData.append('email', personal.email);
    formData.append('genero', personal.genero);
    formData.append('direccion', personal.direccion);
    formData.append('rol', personal.rol);
    formData.append('fechaNac', personal.fechaNac);
    formData.append('password', personal.password);
    formData.append('provincia', personal.provincia);
    formData.append('localidad', personal.localidad);
    formData.append('codPostal', personal.codPostal);
    formData.append('tipoDocumento', personal.tipoDocumento);
    formData.append('nacionalidad', personal.nacionalidad);
    formData.append('telefono', personal.telefono);

    // console.log("dato",formData);
    // console.log("url",url);
    try
    {          
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem("x"),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData
        })
        console.log("respuestaBD",response)
        let rdo = response.status;
        console.log("response RDO nutri",rdo);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo)
            {
                case 201:
                {
                    // guardo token
                    return ({rdo:0,mensaje:"Ok",data});// correcto
                }
                case 202:
                {
                    // error mail                    
                    return ({rdo:1,mensaje:"El paciente ya existe"});
                }                
                default:
                {
                    // otro error                    
                    return ({rdo:2,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {        
        console.log("error",error);
    };
}

export const cambiarPassUsers= async function(user){
    // url webservices
    let url = urlWebServices.cambiarPassUsers;
    // armo json con datos
    const formData = new URLSearchParams();
    // formData.append('dni', dni);

    formData.append('dni',user.dni);
    formData.append('password',user.password);

    // console.log("dato",formData);
    // console.log("url",url);
    console.log("Form data en nutri",formData)
    try
    {                                                                                          
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                "x-access-token": user.token,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData
        })
        
        let rdo = response.status;

        let data = await response.json();


            switch(rdo)
            {
                case 200:
                {
                    // guardo token
                    return ({rdo:0,mensaje:"Ok",data});// correcto
                }
                case 202:
                {
                    // error mail                    
                    return ({rdo:1,mensaje:"No existe en nuestra base."});
                }
                case 203:
                {
                    // error password                    
                    return ({rdo:2,mensaje:"La contraseña no es correcta."});
                }
                default:
                {
                    // otro error                    
                    return ({rdo:3,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {        
        console.log("error",error);
    };
}