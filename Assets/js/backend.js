{
    function validateMyForm(e) {

        var name = document.getElementById('Fname').value;
        var email = document.getElementById('E_Email').value;
        var number = document.getElementById('E_tele').value;
        var Budget = document.getElementById('budget').value;
        var product = document.getElementById('products').value;

       



        firebase.database().ref('Enquiry').push({
                name: name,
                email: email,
                Number: number,
                Budget: Budget,
                product: product
            }).then(() => {
             console.log(` details are ${name} ${email} ${Budget} ${number} ${product}`);
              console.log("successful");
            
            document.getElementById("eventform").style.visibility = "hidden";
            document.getElementById("hide").style.visibility = "hidden";
             document.getElementById("thank_msg").style.display = "block";
            
            
            }).catch(() => {
                console.log('error in sending');
            });
    };
    

      function validateMyFormContact(e) {

        var name = document.getElementById('c_name').value;
        var email = document.getElementById('c_email').value;
        var Message = document.getElementById('c_message').value;
        

       



        firebase.database().ref('contact').push({
                name: name,
                email: email,
                Message: Message
            }).then(() => {
             console.log(` details are ${name} ${email} ${Message} `);
              console.log("successful");
            
            document.getElementById("contactform").style.visibility = "hidden";
             document.getElementById("c_thank_msg").style.display = "block";
            
            
            }).catch(() => {
                console.log('error in sending');
            });
    };
    
    
      function validateMyFormNewsLetter(e) {

        var email = document.getElementById('email_news').value;

        firebase.database().ref('NewsLetter').push({
                email: email
            }).then(() => {
             console.log(` NewsLetter ${email}`);
              console.log("successful");
            
            document.getElementById("Newsletter_form").style.visibility = "hidden";
             document.getElementById("News_ltr_msg_thank").style.visibility = "visible";
            
            
            }).catch(() => {
                console.log('error in sending');
            });
    };
    
    
    // Enquiry form 
var database = firebase.database();
var ref = database.ref('Enquiry');
ref.on('child_added',gotData,errData);

function gotData(data){
    name = data.val().name;
    email = data.val().email;
    Number = data.val().Number;
    Budget = data.val().Budget;
    Product = data.val().product;
    
    
    
    $("#tbody_enquiry").append("<tr><td>" + name +"</td><td>" + email +"</td><td>" + Number +     "</td><td>" + Budget +" </td><td>"+ Product + "</td></tr>");
}

function errData(err){
    console.log('error');
    console.log(err);
}
    
   
    // contact us form 
var database = firebase.database();
var ref = database.ref('contact');
ref.on('child_added',gotDataContact,errDataContact);

function gotDataContact(data){
    name = data.val().name;
    email = data.val().email;
    Message = data.val().Message;
  
    
    $("#tbody_contact").append("<tr><td>" + name +"</td><td>" + email +"</td><td>" + Message +     "</td></tr>");
}

function errDataContact(err){
    console.log('error');
    console.log(err);
}
    
    
// NewsLetter 
var database = firebase.database();
var ref = database.ref('NewsLetter');
ref.on('child_added',gotDataNewsLetter,errDataNewsLetter);

function gotDataNewsLetter(data){
    
    email = data.val().email;

  
    
    $("#tbody_newsletter").append("<tr><td>" + email +"</td></tr>");
}

function errDataNewsLetter(err){
    console.log('error');
    console.log(err);
}
    
}
