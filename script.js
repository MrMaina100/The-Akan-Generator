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
        console.log('yei.');
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






// theDays.addEventListener('input', validateDays )
// theMonth.addEventListener('input', validateMonths )
// theYears.addEventListener('input', validateYears)


    









        
