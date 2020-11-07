var request = new XMLHttpRequest()
// var month = ["January","February","March","April","May","June","July","August","September","November","December"]
// var date = new Date()
// var day = date.getDate()
// var month = month[date.getMonth()]
// var parsed_date = day+" "+month
var total_confirmed;
var total_deceased;
var total_recovered;
var daily_confirmed;
var daily_deceased;
var daily_recovered;

request.open('GET', 'https://api.covid19india.org/data.json', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    var len = data.cases_time_series.length
    var parsed_data = data.cases_time_series[len-1]
    daily_confirmed = parsed_data["dailyconfirmed"]
    total_confirmed = parsed_data["totalconfirmed"]
    daily_deceased  = parsed_data["dailydeceased"]
    total_deceased = parsed_data["totaldeceased"]
    daily_recovered = parsed_data["dailyrecovered"]
    total_recovered = parsed_data["totalrecovered"]
    date  = parsed_data["date"]
    var confirmed = document.getElementById("1")
    confirmed.innerHTML +=" "+" "+total_confirmed
    var dailyConfirmed = document.getElementById("4")
    dailyConfirmed.innerHTML +=" "+" "+daily_confirmed
    var totalDeceased = document.getElementById("2")
    totalDeceased.innerHTML +=" "+" "+total_deceased
    var dailyDeceased = document.getElementById("5")
    dailyDeceased.innerHTML +=" "+" "+daily_deceased
    var totalRecovered = document.getElementById("3")
    totalRecovered.innerHTML +=" "+" "+total_recovered
    var dailyRecovered = document.getElementById("6")
    dailyRecovered.innerHTML +=" "+" "+daily_recovered
    var date_id = document.getElementById("7")
    date_id.innerHTML +=" "+" "+date
  } else {
    console.log('error')
  }
}

request.send()

