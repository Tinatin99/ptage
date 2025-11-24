const form = document.getElementById("registration-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const objectEntries = Object.fromEntries(formData);
  //   console.log(objectEntries);
  // objectEntries
  // agree: "on";
  // confirmPassword: "qwe";
  // email: "david@gmail.com";
  // password: "qwe";
  // phone: "2342342";
  // userName: "nino";
  let errors = {};

  // userName
  if (!objectEntries.userName) {
    errors.userName = "სახელის ველი აუცილებელია";
  }

  // password
  let regePass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  if (!objectEntries.password) {
    errors.password = "პაროლის ველი აუცილებელია";
  } else if (!regePass.test(objectEntries.password)) {
    errors.password = "პაროლი უნდა შეიცავდეს მინ 8 სიმბოლოს";
  }

  // confirm pass
  if (objectEntries.confirmPassword != objectEntries.password) {
    errors.confirmPassword = "პაროლი არ ემთხვევა";
  }

  //email;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!objectEntries.email) {
    errors.email = "ელფოსტა აუცილებელია";
  } else if (!emailRegex.test(objectEntries.email)) {
    errors.email = "შეიყვანეთ ვალიდური  ელფოსტა";
  }

  // check
  if (!objectEntries.agree) {
    errors.agree = "daeTanxmeT wesebs!";
  }



  // erorebis washla
  form.querySelectorAll("span").forEach((span) => {
    span.textContent = "";
  });

  if (Object.keys(errors).length > 0) {
    for (let err in errors) {
      //   console.log(err);
      document.querySelector(`.error-${err}`).textContent = errors[err];
    }
  } else {
    alert("თქვენ წარმატებით დარეგისტრირდით");
    console.log(objectEntries);
  }
});