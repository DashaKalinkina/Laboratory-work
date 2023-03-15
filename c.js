const output = document.getElementById("output");
const form = document.getElementById("calc_form");
const op_btns = document.querySelectorAll("button[data-type=op_]");
const opbtns = document.querySelectorAll("button[data-type=op]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let operator = false;
let equation = [];

const remove_active = () => {
  opbtns.forEach((btn) => {
    btn.classList.remove("active");
  });
};

op_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    remove_active();
    if (output.value == "0") {
      output.value = e.target.value;
    } else if (operator) {
      operator = false;
      output.value = e.target.value;
    } else if (output.value.includes(".")) {
      output.value = output.value + "" + e.target.value.replace(".", "");
    } else {
      output.value = output.value + "" + e.target.value;
    }
  });
});

opbtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    remove_active();
    e.currentTarget.classList.add("active");

    switch (e.target.value) {
      
      case "invert":
        output.value = parseFloat(output.value) * -1;
        break;
      case "=":
        equation.push(output.value);
        output.value = eval(equation.join(""));
        equation = [];
        break;
      default:
        let last_item = equation[equation.length - 1];
        if (["/", "*", "+", "-"].includes(last_item) && operator) {
          equation.pop();
          equation.push(e.target.value);
        } else {
          equation.push(output.value);
          equation.push(e.target.value);
        }
        operator = true;
        break;
        
    }
  });
});
/* function factorial() {
    let factorial =  document.getElementById("output").value
    
    let result = 1;
    for(let i = 2; i <= factorial; i++) {
        result *= i;
    }
    console.log(result) */
    // document.getElementById("result").innerHTML = result;
   
    // result.innerText += value;     }
   /*  function factorial(output) {
        return (output!= 1) ? output * factorial(output - 1) : 1;
        equation.push(output.value);
      }
 */
