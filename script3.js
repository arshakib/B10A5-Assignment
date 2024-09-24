
document.getElementById("btn1").addEventListener("click", function () {

    const mainAmount = parseFloat(document.getElementById("mainAmount").textContent);
    const donate = parseFloat(document.getElementById("donate1").textContent);
    const input = parseFloat(document.getElementById("input").value);
let noakhali = document.getElementById("noakhali").textContent;
let num = 0;

f1 ( donate, mainAmount, input, noakhali, num)


});

document.getElementById("btn2").addEventListener("click", function () {

    const mainAmount = parseFloat(document.getElementById("mainAmount").textContent);
    const donate = parseFloat(document.getElementById("donate2").textContent);
    const input = parseFloat(document.getElementById("input2").value);
let feni = document.getElementById("feni").textContent;
let num = 1;

f1 ( donate, mainAmount, input, feni, num)


});

document.getElementById("btn3").addEventListener("click", function () {

    const mainAmount = parseFloat(document.getElementById("mainAmount").textContent);
    const donate = parseFloat(document.getElementById("donate3").textContent);
    const input = parseFloat(document.getElementById("input3").value);
let quota = document.getElementById("quota").textContent;
let num = 2;

f1 ( donate, mainAmount, input, quota, num)


});


document.getElementById("alertClose").addEventListener("click", function () {
    let alertPop = document.getElementById("alert");
    alertPop.classList.add("hidden");
    
});



document.getElementById("history").addEventListener("click", function () {

    document.getElementById("page1").classList.add("hidden"); 
    document.getElementById("page2").classList.remove("hidden"); 
    document.getElementById("history").classList.add("btn-active");
    document.getElementById("donation-btn").classList.remove("btn-active");

});

document.getElementById("donation-btn").addEventListener("click", function () {

    document.getElementById("page2").classList.add("hidden"); 
    document.getElementById("page1").classList.remove("hidden"); 
    document.getElementById("history").classList.remove("btn-active");
    document.getElementById("donation-btn").classList.add("btn-active");

});

document.getElementById("blog").addEventListener("click", function () {

    window.location.href = "blog.html";

});



