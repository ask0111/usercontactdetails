

document.querySelector('#form').addEventListener('click', (e)=>{
    e.preventDefault();
    var email = document.querySelector('#email').value;
    var code = document.querySelector('#code').value;
    var number = document.querySelector('#number').value;

    var a = 0, b = 0;

    if(email == ''){
        document.querySelector('#emailpera').style.display = 'block'
        document.querySelector('#emailinvalid').style.display = 'none'
        a=0;
    }
    else if(email !== '' && email.length < 15){
        document.querySelector('#emailpera').style.display = 'none'
        document.querySelector('#emailinvalid').style.display = 'block'
        a=0;
    }else{
        document.querySelector('#emailpera').style.display = 'none'
        document.querySelector('#emailinvalid').style.display = 'none'
        a=1;
    }

    if(number.length == 0){
        document.querySelector('#numberpera').style.display = 'block';
        document.querySelector('#numberinvalid').style.display = 'none';
        b=0;
    }else if(number.length !== 10){
        document.querySelector('#numberpera').style.display = 'none';
        document.querySelector('#numberinvalid').style.display = 'block';
        b=0;
    }else{
        document.querySelector('#numberpera').style.display = 'none';
        document.querySelector('#numberinvalid').style.display = 'none';
        b=1;
    }

    if(a && b){
        localStorage.setItem('user', JSON.stringify({email, number, code}))
        window.location.href = '/contact-details.html';
    }
    
   });

