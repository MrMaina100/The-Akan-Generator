function getAkans(e){
    e.preventDefault();

 const theDays = document.getElementById('day');
 const theMonth = document.getElementById('month');
 const theYears = document.getElementById('year');
 




 //validate the days
 function validateDays(){
   const daysinput = theDays.value;

   if(daysinput === null || daysinput > 31 || daysinput < 1){
    console.log('error please fill in correct day');
   }else{
    console.log('great');
   }
 }

 function validateMonths(){
    const monthsInput = theMonth.value;

    if(monthsInput === null || monthsInput > 12|| monthsInput < 1){
        console.log('error pick the correct month');
    }else{
        console.log('great.');
    }
 } 
 
 function validateYears(){
    const yearsInput = theYears.value;

    if(yearsInput.length > 4 || yearsInput === null){
        console.log('pick a year , a correct one i might add');
    }else{
        console.log('gooo');
    }


}


//validate the gender 

function getDayOfTheWeek(){
   

    const DD = theDays.value; 
    const MM = theMonth.value-1;
    const YR = theYears.value;
   
    //get the exact day of the week 

    // let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
    let dateOFBirth = new Date(YR,MM,DD)
    let dayOfWeek = dateOFBirth.getDay();
    console.log(dayOfWeek);

    return dayOfWeek;
    
}

// getDayOfTheWeek();

//validate gender

function validateGenders(){
    const maleInput = document.querySelector('#Male').checked
    const FemaleInput = document.querySelector('#Female').checked

    if(maleInput){
        let gender = 'male'
        return gender
    }else if(FemaleInput){
        let gender = 'female'
        return gender;

    }else{
        return false;

    }
}

// validateGenders();


let gender = validateGenders();
let getExactday = getDayOfTheWeek();
let daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let maleNames = ['Kwasi', 'Kudwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
let FemaleNames = ['Akosua', 'Adwao', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

if(gender === 'male'){
   let userName = maleNames[getExactday];
   let dayofBirth = daysOfWeek[getExactday];


   const div = document.createElement('div');
   const response = document.createTextNode(`you were born on a ${dayofBirth} and your akan name is ${userName}`)
   div.appendChild(response);
   document.body.appendChild(div)
}else if(gender === 'female'){
    let userName = FemaleNames[getExactday];
    let dayofBirth = daysOfWeek[getExactday]

    const div = document.createElement('div');
    const text = document.createTextNode(`you were born on a ${dayofBirth} and your akan name is ${userName}`);
    div.appendChild(text);
    document.body.appendChild(div)

}



theDays.addEventListener('input', validateDays );
theMonth.addEventListener('input', validateMonths );
theYears.addEventListener('input', validateYears);

myform.reset()

}



// document.querySelector('#btn').addEventListener('click', getAkans)
const myform = document.getElementById('form')

myform.addEventListener('submit', getAkans);

    










        
