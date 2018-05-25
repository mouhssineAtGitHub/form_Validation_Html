/* Function for adding new item to shopping list */
const ValidateForm = () =>{

    let errorMessage ="Form validation: OK";
    let isError = false;   
    
    /* Get the input values */
             const fname = document.querySelector('#fname').value;
            const fphone = document.querySelector('#fphone').value;
           const femail1 = document.querySelector('#femail1').value;
           const femail2 = document.querySelector('#femail2').value;
         const faddress1 = document.querySelector('#faddress1').value;
         const faddress2 = document.querySelector('#faddress2').value;
             const fcity = document.querySelector('#fcity').value;
            const fstate = document.querySelector('#fstate').value;
    const fcountryRegion = document.querySelector('#fcountryRegion').value;
    const fzipPostalCode = document.querySelector('#fzipPostalCode').value;
       const fhearBoutUs = document.querySelector('#fhearBoutUs').value;
    const fportfolioLink = document.querySelector('#fportfolioLink').value;
          const fsubject = document.querySelector('#fsubject').value;

    //regex1.test(str1)
    
    /* Creat the Regex for inputs */
             const reg_fname = /^[a-z][ a-z|A-Z]{1,59}$/;
            const reg_fphone = /^[0][-][0-9]{3}[-][0-9]{3}[-][0-9]{3}$/;
           const reg_femail1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           const reg_femail2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         const reg_faddress1 = /^[a-z0-9][ a-z|A-Z|0-9]{1,99}$/;
         const reg_faddress2 = /^[a-z0-9][ a-z|A-Z|0-9]{1,99}$/;
             const reg_fcity = /^[a-z][ a-z|A-Z]{1,49}$/;
            const reg_fstate = /^[a-z][ a-z|A-Z]{1,49}$/;
    const reg_fcountryRegion = /^[a-z][ a-z|A-Z]{1,49}$/;
    const reg_fzipPostalCode = /^[0-9]{1,10}$/;
       const reg_hearAboutUs = /^[a-z][ a-z|A-Z|0-9]{1,99}$/;
    const reg_fportfolioLink = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
          const reg_fsubject = /^[a-z][ a-z|A-Z0-9]{1,149}$/;


    if(patt1 == null){
        alert("Check your name input Please");
        return false;      
    }

    if(patt2 == null){
        alert("Check your quantity input Please");
        return false;      
    }
    
    if (fname === '' || fquantity === '' ) {
        alert("Some of the  inputs are empty!!!");
        return false;
    }
    else {    
        shoppingList_id++;   
        shoppingList.unshift({id:shoppingList_id, name:fname, quantity:fquantity, isDone:false});
        displayItems(false);
        itemName.value="";
        itemQuantity.value=""; 
        document.querySelector("#myDIV2").style.display="block";
        document.querySelector("#expander2").className="fa fa-close";
        
    } 
}
