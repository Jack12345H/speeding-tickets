// Functionize Caught Speeding Start Code

// Determine Tickets Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Speed & Speed Limit Inputs
  let d1Speed = +document.getElementById("d1-speed").value;
  let d1Limit = +document.getElementById("d1-limit").value;
  let d2Speed = +document.getElementById("d2-speed").value;
  let d2Limit = +document.getElementById("d2-limit").value;
  let d3Speed = +document.getElementById("d3-speed").value;
  let d3Limit = +document.getElementById("d3-limit").value;

  document.getElementById("d1-ticket").innerHTML = ticketType(d1Speed, d1Limit);
  document.getElementById("d2-ticket").innerHTML = ticketType(d2Speed, d2Limit);
  document.getElementById("d3-ticket").innerHTML = ticketType(d3Speed, d3Limit);

  function ticketType(speed, limit) {
    if (speed > limit + 40) {
      console.log("really big ticket");
      return "Really Big Ticket";
    } else if (speed > limit + 20) {
      console.log("big ticket");
      return "Big Ticket";
    } else if (speed > limit) {
      console.log("small ticket");
      return "Small Ticket";
    } else {
      console.log("no ticket");
      return "No Ticket";
    }
  }
}
