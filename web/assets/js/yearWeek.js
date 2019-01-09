require('../css/app.css');

let todayDate = new Date();

let monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentDate = {
    yearCurrent: todayDate.getFullYear(),
    monthCurrent: todayDate.getMonth(),
    weekCurrent: getWeekNumber(todayDate),
    dayCurrent: todayDate.getDate(),
};

function addOneYear(previousYear, numberYear) {
    return previousYear + numberYear;
}

function prevMonthPag(actualMonth) {
    if (actualMonth == 0) {
        return monthsName[11]
    } else {
        return monthsName[actualMonth - 1];
    }
}

function nextMonthPag(actualMonth) {
    if (actualMonth == 11) {
        return monthsName[0]
    } else {
        return monthsName[actualMonth + 1];
    }
}

function getCurrentDate() {
    let dateTab = [];
    dateTab["actualYear"] = currentDate.yearCurrent;
    dateTab["actualMonth"] = currentDate.monthCurrent;
    dateTab["actualWeek"] = currentDate.weekCurrent;
    dateTab["actualDay"] = currentDate.dayCurrent;
    return dateTab;
}

function nextCurrentMonth() {
    let dateTab = getCurrentDate();
    let actualMonth = dateTab["actualMonth"];
    let actualYear = dateTab["actualYear"];
    if (actualMonth > 10) {
        actualMonth = -1;
        actualYear += 1;
    }
    currentDate = {
        yearCurrent: actualYear,
        monthCurrent: actualMonth + 1,
        weekCurrent: dateTab["actualWeek"],
        dayCurrent: dateTab["actualDay"],
    };
    showPagination();
    showYearButton();
}

function prevCurrentMonth() {
    let dateTab = getCurrentDate();
    let actualMonth = dateTab["actualMonth"];
    let actualYear = dateTab["actualYear"];
    if (actualMonth < 1) {
        actualMonth = 12;
        actualYear -= 1;
    }
    currentDate = {
        yearCurrent: actualYear,
        monthCurrent: actualMonth - 1,
        weekCurrent: dateTab["actualWeek"],
        dayCurrent: dateTab["actualDay"],
    };
    showPagination();
    showYearButton();
}

function setCurrentYear(numberYear) {
    let dateTab = getCurrentDate();
    let actualYear = dateTab["actualYear"]

    currentDate = {
        yearCurrent: actualYear + numberYear,
        monthCurrent: dateTab["actualMonth"],
        weekCurrent: dateTab["actualWeek"],
        dayCurrent: dateTab["actualDay"],
    };
    showYearButton();
}


function showPagination() {
    document.getElementById("firstMonth").innerHTML = prevMonthPag(currentDate.monthCurrent);
    document.getElementById("activeMonth").innerHTML = monthsName[currentDate.monthCurrent];
    document.getElementById("nextMonth").innerHTML = nextMonthPag(currentDate.monthCurrent);
}

function showYearButton() {
    document.getElementById("yearButton").innerHTML = currentDate.yearCurrent;
    document.getElementById("nextYearButt").innerHTML = addOneYear(currentDate.yearCurrent, 1);
    document.getElementById("afterNextYearButt").innerHTML = addOneYear(currentDate.yearCurrent, 2);

}

function createMonthTable() {
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    document.write('<table class=\"table\">');
    document.write('<thead>');
    document.write('<tr>');

    for (let i = 0; i < 7; i++) {
        document.write('<th>');
        document.write(days[i]);
        document.write('</th>')
    }

    document.write('</tr>');
    document.write('<thead>');
    document.write('<tbody>');


    let week = 0;
    for (let m = 0; m < 5; m++) {
        document.write('<tr>');
        if (m > 0) {
            week += 7
        }
        for (let k = (1 + week); k < (8 + week); k++) {
            document.write('<td>');
            document.write('<button type="button" class="btn btn-outline-success">');
            document.write(k);
            document.write('</button>');
            document.write('</td>');
        }
        document.write('</tr>');
    }
    document.write('</tbody>');
    document.write('</table>')
}

createMonthTable();

function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    let weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return weekNo;
}

let dateCheckWeek = new Date(currentDate.yearCurrent, currentDate.monthCurrent, currentDate.dayCurrent);
let result = getWeekNumber(dateCheckWeek);
document.write('It\'s currently week ' + result);


document.getElementById("yearButton").innerHTML = currentDate.yearCurrent;
document.getElementById("nextYearButt").innerHTML = addOneYear(currentDate.yearCurrent, 1);
document.getElementById("afterNextYearButt").innerHTML = addOneYear(currentDate.yearCurrent, 2);

document.getElementById("firstMonth").innerHTML = prevMonthPag(currentDate.monthCurrent);
document.getElementById("activeMonth").innerHTML = monthsName[currentDate.monthCurrent];
document.getElementById("nextMonth").innerHTML = nextMonthPag(currentDate.monthCurrent);


