jQuery(document).ready(function ($) {
    $(".faq-accordion-heading").click(function () {
      $(this).find(".accor-arraw").toggleClass("rotate-90");
      $(".accor-arraw").not($(this).find(".accor-arraw")).removeClass("rotate-90");
      $(this).parent(".data-parent").toggleClass("border-black");
      $(".data-parent").not($(this).parent()).removeClass("border-black");
      $(this).siblings(".faq-accordion-content").slideToggle();
      $(".faq-accordion-content").not($(this).siblings()).slideUp();
    });
  });
$(document).ready(function () {
  // Set the static start and end dates
  var startDate = new Date('2024-12-03T10:00:00'); // Start Date (e.g., Dec 3, 2024 at 10:00 AM)
  var endDate = new Date('2024-12-29T10:00:00'); // End Date (e.g., Dec 4, 2024 at 10:00 AM)

  // Function to update the countdown every second
  function updateCountdown() {
    var now = new Date();
    var timeDifference = endDate - now;

    if (timeDifference <= 0) {
      $('#countdown-timer').html("<span class='time-value'>00</span><span class='time-label'>SALE ENDED</span>");
      return; // Stop if the countdown is over
    }

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    $('#days').text(days < 10 ? "0" + days : days);
    $('#hours').text(hours < 10 ? "0" + hours : hours);
    $('#minutes').text(minutes < 10 ? "0" + minutes : minutes);
    $('#seconds').text(seconds < 10 ? "0" + seconds : seconds);
  }

  // Update countdown every second
  setInterval(updateCountdown, 1000);
});
