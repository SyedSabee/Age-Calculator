function calculate() {
  let year;
  let month;
  let day;

  let currentDay = parseInt(cd.value.slice(8, 10), 10);
  let currentMonth = parseInt(cd.value.slice(5, 7), 10);
  let currentYear = parseInt(cd.value.slice(0, 4), 10);
  console.log("current date :- ", currentYear, currentMonth, currentDay);

  let birthDay = parseInt(dob.value.slice(8, 10), 10);
  let birthMonth = parseInt(dob.value.slice(5, 7), 10);
  let birthYear = parseInt(dob.value.slice(0, 4), 10);
  console.log("birth date :- ", birthYear, birthMonth, birthDay);

  if (currentDay >= birthDay) {
    day = currentDay - birthDay;
  } else {
    // Get the last day of the previous month
    const lastDayOfPreviousMonth = new Date(
      currentYear,
      currentMonth,
      0
    ).getDate();

    // Calculate the days from the birth day to the last day of the previous month and add the current day
    day = lastDayOfPreviousMonth - birthDay + currentDay;

    // Correctly handle the decrementing of the month
    currentMonth--;

    // If the current month is January, set it to December and decrement the year
    // if (currentMonth === 0) {
    //   currentMonth = 12;
    //   currentYear--;
    // }
  }

  if (currentMonth >= birthMonth) {
    month = currentMonth - birthMonth;
  } else {
    month = currentMonth + 12 - birthMonth;
    currentYear--;
  }

  year = currentYear - birthYear;

  if (year < 0) {
    ageText.innerHTML = "kya mazak kr rhy ho yar, sehi date dalo";
  } else {
    ageText.innerHTML = year + " Years, " + month + " Months, " + day + " Days";
  }
}
