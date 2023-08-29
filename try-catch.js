
function ageFind() {
    const text = document.getElementById('text');
    const age = text.value;
    const error = document.getElementById('error');
    const ageNum = parseInt(age);

    const number = ageNum;

    try {

        if (number < 10) {
            throw "number is small"
        } else {
            error.innerHTML = "";
        }

    }
    catch (err) {
        console.log('Error: ', err);
        error.innerHTML = "Error: " + err;
    } finally {
        console.log("ok");
    }


}