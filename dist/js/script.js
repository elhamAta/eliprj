var submitForm = function(event){
    if(event) event.preventDefault()
    try{
     var username = document.getElementsByName('username')[0].value
     var password = document.getElementsByName('password')[0].value
     console.log('username',username)
     console.log('password',password)
     document.getElementById('des').innerHTML ='submitted'
    }catch(error){
     console.log('somthing wrong happend')
    }
   
 }

