// function sendMail(){

//     var param ={

//         name : document.getElementById("name").value,
//         email:document.getElementById("email").value,
//         message:document.getElementById("message").value,
//     }

//     const servicesID = "service_ffalgoi";
//     const templateID = "template_qotelr2";

//     emailjs.send(servicesID,templateID,param).then((res)=>{

//         document.getElementById("name").value ="";
//         document.getElementById("email").value ="";
//         document.getElementById("message").value ="";
//         console.log(res);

//     })

//     .catch((err)=> console.log(err));
    
    
// }


function sendMail() {
    var param = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_ffalgoi";
    const templateID = "template_qotelr2";

    emailjs.send(serviceID, templateID, param)
        .then((response) => {
            console.log('SUCCESS!');

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        // .catch((error) => {
        //     console.error('FAILED...', error);
        // });
}
