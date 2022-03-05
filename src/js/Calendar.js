export default function calendar (paymentData) {

  const _this = this;

  function generate_year_range(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "년</option>";
    }
    return years;
  }


  var today = new Date();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear();
  var selectYear = document.getElementById("year");
  var selectMonth = document.getElementById("month");

  var createYear = generate_year_range(1970, 2050);
  /** or
  * createYear = generate_year_range( 1970, currentYear );
  */
 
  document.getElementById("year").innerHTML = createYear;

  var calendar = document.getElementById("calendar"); // eslint-disable-line no-unused-vars
  // var lang = calendar.getAttribute('data-lang');

  var months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  var days = ["일", "월", "화", "수", "목", "금", "토"];

  var monthHtml = "";
  for (var i=0;i<months.length;i++) {
    monthHtml += "<option value='" + i + "'>" + months[i] + "</option>";
  }
  document.getElementById("month").innerHTML = monthHtml;

  var dayHeader = "<tr>";
  for (i in days) {
    dayHeader += "<th data-days='" + days[i] + "'>" + days[i] + "</th>";
  }
  dayHeader += "</tr>";

  document.getElementById("thead-month").innerHTML = dayHeader;


  // monthAndYear = document.getElementById("monthAndYear");
  showCalendar(currentMonth, currentYear);

  // function next() {
  //   currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
  //   currentMonth = (currentMonth + 1) % 12;
  //   showCalendar(currentMonth, currentYear);
  // }

  // function previous() {
  //   currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
  //   currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  //   showCalendar(currentMonth, currentYear);
  // }

  // function jump() {
  //   currentYear = parseInt(selectYear.value);
  //   currentMonth = parseInt(selectMonth.value);
  //   showCalendar(currentMonth, currentYear);
  // }

  function showCalendar(month, year) {

    var firstDay = ( new Date( year, month ) ).getDay();

    var tbl = document.getElementById("calendar-body");

    tbl.innerHTML = "";
    
    // monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;
    
 
  
    // creating all cells
    var date = 1;
    for ( var i = 0; i < 6; i++ ) {
        var row = document.createElement("tr");
        var cell = '';
        var cellText ='';
        
        for ( var j = 0; j < 7; j++ ) {
            if ( i === 0 && j < firstDay ) {
                cell = document.createElement( "td" );
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                var price = paymentData[year+'-'+(month+1)+'-'+date] ? paymentData[year+'-'+(month+1)+'-'+date] : '';
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", months[month]);
                cell.className = "date-picker";

                if(price){
                  cell.innerHTML = "<button type=button class='btn-payment'><div class='date payment'>" + date +"</div><div class='price'>" +  price + "</div></button>";
                }else{
                  cell.innerHTML = "<div class='date'>" + date +"</div><div class='price'>&nbsp</div>";
                }                
                // cell.innerHTML = "<div class='date "+ (price ? "payment" : "") +"'>" + date +"</div><div class='price'>" +  (price ? price : "&nbsp") + "</div>";

                if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                    cell.className = "date-picker today";
                }
                row.appendChild(cell);
                date++;
            }
        }

        tbl.appendChild(row);

        document.querySelectorAll('.btn-payment').forEach(function(el){
          el.addEventListener('click', function(){
            const date = el.querySelector('.date').textContent;
            _this.selectedDate = currentYear+''+currentMonth+''+ date
          })
        })
    }

  }

  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

  return {
    next: function(){
      currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
      currentMonth = (currentMonth + 1) % 12;
      showCalendar(currentMonth, currentYear);
    },
    previous: function(){
      currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
      currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
      showCalendar(currentMonth, currentYear);
    },
    jump: function (){
      currentYear = parseInt(selectYear.value);
      currentMonth = parseInt(selectMonth.value);
      showCalendar(currentMonth, currentYear);
    }
  }
}