
let TheYear = document.getElementById('Years');
let TheMonth = document.getElementById('Months');
let TheDay = document.getElementById('Days');
let TheMale = document.getElementById('male');
let female = document.getElementById('female');


//Validations 

function ValidateYears(){

    let YearError;
    if(isNaN(TheYear) || TheYear.length < 4 ){
        YearError = 'its not looking good bruv, input a valid year';
        document.getElementById('year-Error').innerHTML= YearError;
        return YearError;
    }
}

function ValidateDays(){

    let dayError;
    if(isNaN(TheDay) || TheDay <= 0 || TheDay > 31){
        dayError = 'bigMan pick a valid date';
        document.getElementById('day-Error').innerHTML = dayError;
        return dayError
    }
}

function ValidateMonths(){
    let monthError;
    if(isNaN(TheMonth) || TheMonth <= 0 || TheMonth > 12){
        monthError = 'Pick a valid month mandemmzz';
        document.getElementById('month-Error').innerHTML = monthError;
        return monthError;
    }
}

//validation of the genders 

function Genders(){

    if(document.getElementById('male').checked){
        return true;
    }else if(document.getElementById('female').checked){
        return true;
    }else{
        let genderError;
        genderError = 'Please select a Gender';
        document.getElementById('gender-Check').innerHTML = genderError;
        return genderError;
    }

}

//function to get the exact day of the week based on the input

function DayOfWeek(){
    ValidateDays();
    ValidateMonths();
    ValidateYears();

    let DD = document.getElementById('Days');
    let MM = document.getElementById('Months');
    let Yr = document.getElementById('Years');


    let dayOfBirth = new Date(DD, MM, Yr);
    let day = dayOfBirth.getDate();

    return day;


}


function GetAkans(){

//generating the akan names 
let gender = Genders();
let ThedayOfTheWeek = DayOfWeek();
let Week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let AkanFemale = ['Akosa', 'Adawa', ' Abena', 'Akua', 'Taa', 'Afua', 'Ama'];
let AkanMale = ['Kwasi', 'Kudwo', 'Kwabera', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];



if(gender === 'male'){
    let userName = AkanMale[ThedayOfTheWeek];
    let birthday = Week[ThedayOfTheWeek];

    Response = ` Kijana you were Born on a ${birthday} and your akan name is ${userName}`;
    document.getElementById('Displayinfo').innerHTML = Response;
}else if(gender === 'female'){

    let userName = AkanFemale[ThedayOfTheWeek];
    let birthday = Week[ThedayOfTheWeek];

    Response = ` You were Born on a ${birthday} and your akan name is ${userName}`;
    document.getElementById('Displayinfo').innerHTML = Response;


}else{
    
    let finalError = 'blood is everything okay';
    document.getElementById('Displayinfo').innerHTML = finalErroro
}

console.log(gender, ThedayOfTheWeek);

}


    









        
