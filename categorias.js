fetch("https://slifer.bsite.net/td-categoria",{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    },
})
    .then(res=>{
        if(!res.ok){
            console.log("error");
            return;
        }
        return res.json();
    })
    .then(data=>{
        console.log("exito");
        console.log(data);
    })
    .catch(error =>{
        console.log(error);
    })