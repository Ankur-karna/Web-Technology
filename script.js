function validateforms() {
    var name = document.getElementById("name");
    var register = document.getElementById("register");
    var sem1 = document.getElementById("sem1");
    var sem2 = document.getElementById("sem2");
    var sem3 = document.getElementById("sem3");
    var sem4 = document.getElementById("sem4");
    var sem5 = document.getElementById("sem5");
    var sem6 = document.getElementById("sem6");
    var sem7 = document.getElementById("sem7");
    var sem8 = document.getElementById("sem8");
    if (name.value == null || name.value == "") {
        alert("Enter Your Name");
        return False;
    }
    if (register.value.toString().length != 10) {
        alert("Enter your complete Roll Number - 10 digits");
        return False;
    }

    if (sem1.value < 1 || sem1.value > 10) {
        alert("Enter SEM 1 - CGPA between 1-10");
        return False;
    }
    if (sem2.value < 1 || sem2.value > 10) {
        alert("Enter SEM 2 - CGPA between 1-10");
        return False;
    }
    if (sem3.value < 1 || sem3.value > 10) {
        alert("Enter SEM 3 - CGPA between 1-10");
        return False;
    }
    if (sem4.value < 1 || sem4.value > 10) {
        alert("Enter SEM 4 - CGPA between 1-10");
        return False;
    }
    if (sem5.value < 1 || sem5.value > 10) {
        alert("Enter SEM 5 - CGPA between 1-10");
        return False;
    }
    if (sem6.value < 1 || sem6.value > 10) {
        alert("Enter SEM 6 - CGPA between 1-10");
        return False;
    }
    if (sem7.value < 1 || sem7.value > 10) {
        alert("Enter SEM 7 - CGPA between 1-10");
        return False;
    }
    if (sem8.value < 1 || sem8.value > 10) {
        alert("Enter SEM 8 - CGPA between 1-10");
        return False;
    }
    total = (parseInt(sem1.value) + parseInt(sem2.value) + parseInt(sem3.value) +
        parseInt(sem4.value) + parseInt(sem5.value) + parseInt(sem6.value) + parseInt(sem7.value) +
        parseInt(sem8.value)) / 8
    document.getElementById("cgpa").value = total;
    if (total > 7.5) {
        document.getElementById("dist").value = "First Class";
    } else if (total > 5 && total <= 7.5) {
        document.getElementById("dist").value = "Second Class";
    } else if (total <= 5 && total > 0) {
        document.getElementById("dist").value = "Third Class";
    }
}