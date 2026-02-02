const bookingForm = document.getElementById("bookingForm");
const bookingList = document.getElementById("bookingList");
const customerList = document.getElementById("customerList");

let customers = [];

if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const room = document.getElementById("room").value;
        const date = document.getElementById("date").value;

        const li = document.createElement("li");
        li.textContent = `${name} booked ${room} room on ${date}`;
        bookingList.appendChild(li);

        customers.push(name);
        localStorage.setItem("customers", JSON.stringify(customers));

        bookingForm.reset();
    });
}

if (customerList) {
    const storedCustomers = JSON.parse(localStorage.getItem("customers")) || [];
    storedCustomers.forEach(cust => {
        const li = document.createElement("li");
        li.textContent = cust;
        customerList.appendChild(li);
    });
}
