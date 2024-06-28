const expform = document.getElementById("expform")
const explist = document.getElementById("explist")

expform.addEventListener("submit", function(e) {
    e.preventDefault();
    const cat = document.getElementById("cat").value;
    const desp = document.getElementById("desp").value;
    const amt = parseFloat(document.getElementById("amt").value);

    if (desp && cat && !isNaN(amt)) {
        const newrow = document.createElement("tr");
        newrow.innerHTML= `<td>${desp}</td><td>${cat}</td><td>${amt.toFixed(2)}</td>`;
        explist.appendChild(newrow);

        document.getElementById('desp').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amt').value = '';
    }
    else {
        alert("Please fill all feilds with valid data")
    }
})