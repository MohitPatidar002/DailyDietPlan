function BMI() {
  let h = document.getElementById("height").value;
  let w = document.getElementById("weight").value;
  let bmi = w / (((h / 100) * h) / 100);
  let bmio = bmi.toFixed(2);

  document.getElementById("result").innerHTML = "Your BMI is " + bmio;
}

/*---------- For calorie calculation --------------*/

const calculate = () => {
  let height = document.getElementById("ht").value;
  let weight = document.getElementById("wt").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementsByName("gender");
  let exercise = document.getElementById("in_activity").value;
  let activity = document.getElementById("gain_loss").value;
  let calc;
  if (
    isNaN(height) ||
    height < 1 ||
    height > 250 ||
    isNaN(weight) ||
    weight < 1 ||
    weight > 250 ||
    isNaN(age) ||
    age < 1 ||
    age > 150
  ) {
    alert("Invalid Input!");
    // document.getElementById("section3").style.display = "none";
  } else {
    if (gender[0].checked) {
      calc = (10 * weight + 6.25 * height - 5 * age + 5) * exercise;
    } else {
      calc = (10 * weight + 6.25 * height - 5 * age - 161) * exercise;
    }

    document.getElementById("section3").style.display = "block";

    if (activity == 1) {
      let mildloose = calc - 250;
      let mediumloose = calc - 550;
      let fastloose = calc - 1000;

      document.getElementById("span").innerHTML = "Loss";
      document.getElementById("span1").innerHTML = "Loss";
      document.getElementById("span2").innerHTML = "Loss";
      document.getElementById("span3").innerHTML = "Loss";

      document.getElementById("maintain").innerHTML = calc + " kcal/day";
      document.getElementById("mild").innerHTML = mildloose + " kcal/day";
      document.getElementById("medium").innerHTML = mediumloose + " kcal/day";
      document.getElementById("fast").innerHTML = fastloose + " kcal/day";
    } else {
      let mildgain = calc + 250;
      let mediumgain = calc + 550;
      let fastgain = calc + 1000;

      document.getElementById("span").innerHTML = "Gain";
      document.getElementById("span1").innerHTML = "Gain";
      document.getElementById("span2").innerHTML = "Gain";
      document.getElementById("span3").innerHTML = "Gain";

      document.getElementById("maintain").innerHTML = calc + " kcal/day";
      document.getElementById("mild").innerHTML = mildgain + " kcal/day";
      document.getElementById("medium").innerHTML = mediumgain + " kcal/day";
      document.getElementById("fast").innerHTML = fastgain + " kcal/day";
    }
  }
};

function toggle1() {
  document.getElementById("dairyproduct-table").style.display = "flex";
  document.getElementById("dryFruit-table").style.display = "none";
  document.getElementById("Fruits_table").style.display = "none";
  document.getElementById("non-veg-table").style.display = "none";
  document.getElementById("vegetable-table").style.display = "none";
}

function toggle2() {
  document.getElementById("dairyproduct-table").style.display = "none";
  document.getElementById("dryFruit-table").style.display = "flex";
  document.getElementById("Fruits_table").style.display = "none";
  document.getElementById("non-veg-table").style.display = "none";
  document.getElementById("vegetable-table").style.display = "none";
}

function toggle3() {
  document.getElementById("dairyproduct-table").style.display = "none";
  document.getElementById("dryFruit-table").style.display = "none";
  document.getElementById("Fruits_table").style.display = "flex";
  document.getElementById("non-veg-table").style.display = "none";
  document.getElementById("vegetable-table").style.display = "none";
}

function toggle4() {
  document.getElementById("dairyproduct-table").style.display = "none";
  document.getElementById("dryFruit-table").style.display = "none";
  document.getElementById("Fruits_table").style.display = "none";
  document.getElementById("non-veg-table").style.display = "flex";
  document.getElementById("vegetable-table").style.display = "none";
}

function toggle5() {
  document.getElementById("dairyproduct-table").style.display = "none";
  document.getElementById("dryFruit-table").style.display = "none";
  document.getElementById("Fruits_table").style.display = "none";
  document.getElementById("non-veg-table").style.display = "none";
  document.getElementById("vegetable-table").style.display = "flex";
}


burger = document.querySelector('.burger');
header = document.querySelector('.header');
navList = document.querySelector('.ul_list');
Logo = document.querySelector('.logo');

burger.addEventListener('click', ()=>{
  navList.classList.toggle('v-class');
  Logo.classList.toggle('logo');
  header.classList.toggle('h-nav');

})
