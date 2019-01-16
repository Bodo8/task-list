

let todayDate = new Date();

let monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


let tabWithNumberDays = [];
tabWithNumberDays[0] = 0;

let currentDate = {
    yearCurrent: todayDate.getFullYear(),
    monthCurrent: todayDate.getMonth(),
    weekCurrent: getWeekNumber(todayDate),
    dayCurrent: todayDate.getDate(),
    numberDayWeek: todayDate.getDay(),
};


let dateTab = [];
dateTab["actualYear"] = currentDate.yearCurrent;
dateTab["actualMonth"] = currentDate.monthCurrent;
dateTab["actualWeek"] = currentDate.weekCurrent;
dateTab["actualDay"] = currentDate.dayCurrent;
dateTab["actualNumberDayWeek]"] = currentDate.numberDayWeek;

function setActualDayButton(numberDay) {
    let day = tabWithNumberDays[numberDay];
    if (day === "*") {

    } else {
        dateTab["actualDay"] = day;
    }
    showDebug(dateTab["actualDay"]);
}


function getLastDayMonth() {
    let month = dateTab["actualMonth"];

    switch (month) {
        case 0:
            return 31;
        case 1:
            return 28;
        case 2:
            return 31;
        case 3:
            return 30;
        case 4:
            return 31;
        case 5:
            return 30;
        case 6:
            return 31;
        case 7:
            return 31;
        case 8:
            return 30;
        case 9:
            return 31;
        case 10:
            return 30;
        case 11:
            return 31;
    }
}

function addOneYear(previousYear, numberYear) {
    return previousYear + numberYear;
}

function prevMonthPag(actualMonth) {
    if (actualMonth === 0) {
        return monthsName[11]
    } else {
        return monthsName[actualMonth - 1];
    }
}

function nextMonthPag(actualMonth) {
    if (actualMonth === 11) {
        return monthsName[0]
    } else {
        return monthsName[actualMonth + 1];
    }
}

function nextCurrentMonth() {
    let actualMonth = dateTab["actualMonth"];
    let actualYear = dateTab["actualYear"];
    if (actualMonth > 10) {
        actualMonth = -1;
        actualYear += 1;
    }
    actualMonth += 1;
    dateTab["actualYear"] = actualYear;
    dateTab["actualMonth"] = actualMonth;
    refreshPagination();
    refreshYearButton();
    generateNumberDays("refresh");
    refreshMonthTable();
    let a = getLastDayMonth();
    showDebug(a);
}

function prevCurrentMonth() {
    let actualMonth = dateTab["actualMonth"];
    let actualYear = dateTab["actualYear"];
    if (actualMonth < 1) {
        actualMonth = 12;
        actualYear -= 1;
    }
    actualMonth -= 1;
    dateTab["actualMonth"] = actualMonth;
    dateTab["actualYear"] = actualYear;
    refreshPagination();
    refreshYearButton();
    generateNumberDays("refresh");
    refreshMonthTable();
    let a = getLastDayMonth();
    showDebug(a);

}

function setCurrentYear(numberYear) {
    let actualYear = dateTab["actualYear"];
    dateTab["actualYear"] = actualYear + numberYear;
    refreshYearButton();
    generateNumberDays("refresh");
    refreshMonthTable();
}

function getFirstDayMonth() {
    let year = dateTab["actualYear"];
    let month = dateTab["actualMonth"];
    let tempDate = new Date(year, month, 1);
    let number = tempDate.getDay();
    return number;
}

function getDays() {
    return tabWithNumberDays;
}

function showDebug(num) {

    document.getElementById("debug").innerText = num;
}


function generateNumberDays(refresh) {

    let numberFirstDay = getFirstDayMonth();
    let lastDayMonth = getLastDayMonth();
    let week = 0;
    let stringDayMonth = 1;
    let numberDayMonth = 1;
    let begin = 1;
    let endWeek = 8;
    let line = 7;
    let counter = 0;
    let endMonth = 0;

    if (refresh != null) {
        refresh = "refresh";
    }

    for (let m = 0; m < line; m++) {

        if (m > 0) {
            week += 7;
        }
        if (numberFirstDay === 0) {
            numberFirstDay = 7;
        }

        for (let k = begin + week; k < (endWeek + week); k++) {
            stringDayMonth = k;
            numberDayMonth = k;

            if (k < numberFirstDay) {
                stringDayMonth = "*";
                tabWithNumberDays[k] = stringDayMonth;
                counter++;
            }
            endMonth = k - counter;
            if (endMonth > lastDayMonth) {
                stringDayMonth = "*";
                tabWithNumberDays[k] = stringDayMonth;

            }
            if (stringDayMonth !== "*") {
                numberDayMonth -= counter;

                if (refresh === "refresh") {
                    tabWithNumberDays[k] = numberDayMonth;

                    if (lastDayMonth === 30) {
                        tabWithNumberDays.splice(k + 1, 1, "*");
                    }

                } else {
                    tabWithNumberDays[k] = numberDayMonth;
                }
            }
        }
    }
}

generateNumberDays();

function setActiveCurrentButton() {
    let header = document.getElementById("daysMonthButton");
    let buttons = header.getElementsByClassName("btn");
    let currentDay = dateTab["actualDay"];
    let numberDayTab = getDays();
    for (let i = 1; i < buttons.length; i++) {
        let numberDay = numberDayTab[i];
        if (currentDay === numberDay) {
            buttons[i - 1].className = buttons[i - 1].className.fixed();
        }
    }
}

setActiveCurrentButton();

function getWeekNumber(date) {
    date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    let yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    let weekNumber = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
    return weekNumber;
}

document.getElementById("yearButton").innerHTML = dateTab["actualYear"];
document.getElementById("nextYearButt").innerHTML = addOneYear(dateTab["actualYear"], 1);
document.getElementById("afterNextYearButt").innerHTML = addOneYear(dateTab["actualYear"], 2);

document.getElementById("firstMonth").innerHTML = prevMonthPag(dateTab["actualMonth"]);
document.getElementById("activeMonth").innerHTML = monthsName[dateTab["actualMonth"]];
document.getElementById("nextMonth").innerHTML = nextMonthPag(dateTab["actualMonth"]);

document.getElementById("but1").innerHTML = tabWithNumberDays[1];
document.getElementById("but2").innerHTML = tabWithNumberDays[2];
document.getElementById("but3").innerHTML = tabWithNumberDays[3];
document.getElementById("but4").innerHTML = tabWithNumberDays[4];
document.getElementById("but5").innerHTML = tabWithNumberDays[5];
document.getElementById("but6").innerHTML = tabWithNumberDays[6];
document.getElementById("but7").innerHTML = tabWithNumberDays[7];
document.getElementById("but8").innerHTML = tabWithNumberDays[8];
document.getElementById("but9").innerHTML = tabWithNumberDays[9];
document.getElementById("but10").innerHTML = tabWithNumberDays[10];
document.getElementById("but11").innerHTML = tabWithNumberDays[11];
document.getElementById("but12").innerHTML = tabWithNumberDays[12];
document.getElementById("but13").innerHTML = tabWithNumberDays[13];
document.getElementById("but14").innerHTML = tabWithNumberDays[14];
document.getElementById("but15").innerHTML = tabWithNumberDays[15];
document.getElementById("but16").innerHTML = tabWithNumberDays[16];
document.getElementById("but17").innerHTML = tabWithNumberDays[17];
document.getElementById("but18").innerHTML = tabWithNumberDays[18];
document.getElementById("but19").innerHTML = tabWithNumberDays[19];
document.getElementById("but20").innerHTML = tabWithNumberDays[20];
document.getElementById("but21").innerHTML = tabWithNumberDays[21];
document.getElementById("but22").innerHTML = tabWithNumberDays[22];
document.getElementById("but23").innerHTML = tabWithNumberDays[23];
document.getElementById("but24").innerHTML = tabWithNumberDays[24];
document.getElementById("but25").innerHTML = tabWithNumberDays[25];
document.getElementById("but26").innerHTML = tabWithNumberDays[26];
document.getElementById("but27").innerHTML = tabWithNumberDays[27];
document.getElementById("but28").innerHTML = tabWithNumberDays[28];
document.getElementById("but29").innerHTML = tabWithNumberDays[29];
document.getElementById("but30").innerHTML = tabWithNumberDays[30];
document.getElementById("but31").innerHTML = tabWithNumberDays[31];
document.getElementById("but32").innerHTML = tabWithNumberDays[32];
document.getElementById("but33").innerHTML = tabWithNumberDays[33];
document.getElementById("but34").innerHTML = tabWithNumberDays[34];
document.getElementById("but35").innerHTML = tabWithNumberDays[35];
document.getElementById("but36").innerHTML = tabWithNumberDays[36];
document.getElementById("but37").innerHTML = tabWithNumberDays[37];
document.getElementById("but38").innerHTML = tabWithNumberDays[38];
document.getElementById("but39").innerHTML = tabWithNumberDays[39];
document.getElementById("but40").innerHTML = tabWithNumberDays[40];
document.getElementById("but41").innerHTML = tabWithNumberDays[41];
document.getElementById("but42").innerHTML = tabWithNumberDays[42];

