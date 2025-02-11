const backdrop = document.getElementById("staticBackdrop");

document.getElementById("btnDonate").addEventListener("click", () => {
  const amount = document.getElementById("inp-donation-amount").value;
  confirm(`Confirm payment of KES ${amount}`);
  backdrop.setAttribute("aria-hidden", "true");
});
