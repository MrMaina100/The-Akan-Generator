function GetAkans (){

    let theYear = document.getElementById('Years').value;
    let theMonth =Number(document.getElementById('Months').value);
    let theDay = Number(document.getElementById('Days').value);
    let genders = document.querySelectorAll('.gender');

    //lets validate tingz

    function validateYears (){
        if(isNaN(theYear) || theYear.length < 4){
            return false;
        }else{
            return true;
        }
    }

    theYear = validateYears();
    
    function validateMonths (){
        if(isNaN(theMonth) || theMonth <= 0 || theMonth > 12){
            return false;
        }else{
            return true;
        }
    }

    theMonth = validateMonths();
    // console.log(theMonth);

    function validateDays (){
        if(isNaN(theDay) || theDay <= 0 || theDay > 31 ){
            return false;
        }else{
            return true;
        }
    }

    theDay = validateDays();


    //selecting the genders


    function checkedGenders (){
        if(document.getElementById('male').checked){
            return true;
        }else if (document.getElementById('female').checked){
            return true;
        }else{
            return false;
        }
    }

    genders = checkedGenders();
    console.log(genders);


    
let Exactday = Math.floor((((Number(theYear.slice(0,2))/4)-2*Number(theYear.slice(0,2))-1)+
          ((5*Number(theYear.slice(2,4))/4))+((26*(theMonth+1)/10))+theDay)%7);


let Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let AkanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

let AkanFemale = [ "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let index;

if(Exactday == 0){
    index = 6;
}else{
    index = Exactday -1;
}


//to return the final results 

function GetFinal(){

    if(genders == 'male' && theDay && theMonth){
    let displayMessage = 'You were born on '+ Days[index] + 'and your Akan name is ' + AkanMale[index];

    document.getElementById('Displayinfo').innerHTML = displayMessage;
    return displayMessage;

    
}else if(genders == 'female' && theDay && theMonth){
    let displayMessage2 = 'You were born on '+ Days[index] + 'and your Akan name is ' + AkanFemale[index];

    document.getElementById('Displayinfo').innerHTML = displayMessage2;
    return displayMessage2;

}else{

    let ErrorDisplay = 'My broskii have a go at it again';
    document.getElementById('Displayinfo').innerHTML = ErrorDisplay;
    return ErrorDisplay;
}

}

let TheForm = document.getElementById('my-form');

TheForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    GetFinal();

});



}

    









        
