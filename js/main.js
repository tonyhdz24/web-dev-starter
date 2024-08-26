// window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
  // Assign to a variable so we can set a breakpoint in the debugger!
  const hello = sayHello();
  console.log(hello);
}

/**
 * This function causes a pop up window to appear
 * @return nothing
 */
export function sayHello() {
  window.alert("Hello");
}

const mainBtn = document.getElementById("main-btn");
mainBtn.addEventListener("click", sayHello);
