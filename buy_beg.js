function coachname() {
    var coachNameInput = document.getElementById("coachname");
    const hours = parseInt(document.getElementById('hours').value);
    const hourlyRate = selectedCoach === 1 ? 25 : 20;
    
    const selectedCoachName = selectedCoach === 1 ? 'GM Vahap Sanal' : 'IM Deniz Ozen' ;

    const total = hours * hourlyRate;

    coachNameInput.value = selectedCoachName;
}

var selectedCoach = 0;

function selectCoach(coach) {
    selectedCoach = coach;
    calculateTotal();

    document.querySelectorAll('.coach').forEach(coachElement => {
        coachElement.classList.remove('selected');
    });

    document.getElementById(`coach${coach}`).classList.add('selected');

    const totalAmountSection = document.querySelector('.total-amount');
    totalAmountSection.style.display = selectedCoach !== 0 ? 'block' : 'none';

    coachname();
}





function calculateTotal() {


    const hours = parseInt(document.getElementById('hours').value);

    document.getElementById("hours2").value=hours

    if(hours<11 && hours>-1){

    const hourlyRate = selectedCoach === 1 ? 25 : 20;

    const total = hours * hourlyRate;

    document.getElementById('total').innerText = `$${total}`;
    
    }
    if(hours>11){
        const hours = parseInt(10)
        document.getElementById("hours").value= 10
        const hourlyRate = selectedCoach === 1 ?25 : 20;

        const total = hours * hourlyRate;

        document.getElementById('total').innerText = `$${total}`;
    }
    if(hours<0){
        const hours = parseInt(0)
        document.getElementById("hours").value= 0
        const hourlyRate = selectedCoach === 1 ?25 : 20;

        const total = hours * hourlyRate;

        document.getElementById('total').innerText = `$${total}`;
    }
}






function submitPurchase() {

    if (selectedCoach === 0) {
        alert('Please select your coach before submitting the purchase.');
        return;
    }


    // Retrieve user information
    const name = document.getElementById('name').value;
    const fideID = document.getElementById('fide-id').value;
    const fideRating = document.getElementById('fide-rating').value;
    const gmail = document.getElementById('gmail').value;

    // Validate FIDE ID
    if (!/^\d{7}$/.test(fideID) && !/^\d{8}$/.test(fideID)) {
        alert('Please enter a valid FIDE ID (7 or 8 numbers).');
        return;
    }
    
    // Validate FIDE Rating
    if (!/^\d{4}$/.test(fideRating)) {
        alert('Please enter a valid FIDE Rating (4-digit number).');
        return;
    }

    // Validate Gmail
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(gmail) && !/^[a-zA-Z0-9._%+-]+@hotmail\.com$/.test(gmail)) {
        alert('Please enter a valid Gmail address.');
        return;
    }

    // Check if required fields are filled
    if (name && fideID && fideRating && gmail) {
        // Display a confirmation message (you can replace this with your desired action)
        alert(`Thank you, ${name}! Your purchase has been submitted. Your coach will contact you later.`);
    } else {
        // Alert the user to fill in all required fields
        alert('Please fill in all required fields.');
    }
}



function copyValue() {
    var hoursValue = document.getElementById('hours').value;

    document.getElementById('hours2').value = hoursValue;
}


function coachname() {
    var coachNameInput = document.getElementById("coachname");
    const hours = parseInt(document.getElementById('hours').value);
    const hourlyRate = selectedCoach === 1 ? 25 : 20;
    
    const total = hours * hourlyRate;

    
    if (total % 20 == 0) {
        coachNameInput.value = 'GM Vahap Sanal';
    } else if (total % 25 == 0) {
        coachNameInput.value = 'IM Deniz Ozen';
    } else {
        coachNameInput.value = 'None';
    }
}