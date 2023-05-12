//LocalChecker
function localChecker(localstorage, value){
  if(localStorage.getItem(localstorage) == undefined){
    localStorage.setItem(localstorage, value)
  }
}

// hasCountry Localstorage
localChecker('hasCountry', 0)

if(localStorage.getItem('hasCountry') == 0){
  window.location.href = "html/nocountry.html";
}

// LocalStorage
localChecker('population', 0)
localChecker('wealth', 100)
localChecker('motto', 0)
localChecker('name', 0)
localChecker('currency', 0)
localChecker('currencyUSD', 0)
localChecker('mascot', 0)
localChecker('flag', 0)
localChecker('acres', 0)
localChecker('adjective', )

// Getting Info From LocalStorage
var countryNameLocal = localStorage.getItem('name');
var countryPopulationLocal = localStorage.getItem('population');
var sizeVar = 'tiny';
var adjectiveCountryLocal = localStorage.getItem('adjective');
var countryCurrencyLocal = localStorage.getItem('currency');
var countryCurrencyUSDLocal = localStorage.getItem('currencyUSD');
var countryMascotLocal = localStorage.getItem('mascot');
var countryMottoLocal = localStorage.getItem('motto');
var countryWealthLocal = localStorage.getItem('wealth');
var countryAcresLocal = localStorage.getItem('acres');
// var
var population = parseInt(countryPopulationLocal);
var wealth = parseInt(countryWealthLocal);
console.log(typeof(wealth)) // testing so i can get int to make sure lol
var acres = parseInt(countryAcresLocal);

// WW500 simulator beta XD \\

// claimvalue
var claimval = parseInt($('#claimlandacres').val())
console.log(typeof(claimval))
//text
var populationtxt = $('#population');
var wealthtxt = $('#wealth');
var acrestxt = $('#land')

populationtxt.text('Population: ' + population)
wealthtxt.text('Wealth: ' + wealth)
acrestxt.text('Acres of land: ' + acres)
 
// acres
var acreCost = 100;
var totalAcreCost;
console.log(totalAcreCost)
var acrePopulation = 10;

if(countryPopulationLocal > 1000){
  sizeVar = 'small';
}

$('#flag').attr('src', localStorage.getItem('flag'));
$('#countryName').text(localStorage.getItem('name'));
$('#countryMotto').text('"' + localStorage.getItem('motto') + '"');

$('#population').text("Population: " + localStorage.getItem('population'));
$('#wealth').text("Wealth: " + localStorage.getItem('wealth'));
$('#land').text("Acres of land: " + localStorage.getItem('acres'));

// Big text
$('#biginfo').text("The Country of " + countryNameLocal + " is a " + sizeVar + " country that uses " + countryCurrencyLocal + ' as their currency. 1 ' + countryCurrencyLocal + ' is equivalent to ' + countryCurrencyUSDLocal + ' USD dollars. The famous mascot for ' + countryNameLocal + ' is a ' + countryMascotLocal + '. There are currently ' + countryPopulationLocal + ' ' + countryNameLocal + "ians inside the country. " + countryNameLocal + "'s famous motto is " + '"' + countryMottoLocal + '".')

//claim land
$('#claimlandbtn').click(function(){
  $('#ClaimLand').css('opacity', 1);
  $('#ClaimLand').css('pointer-events', 'all');
})
$('#claimbuttonno').click(function(){
  $('#ClaimLand').css('opacity', 0);
  $('#ClaimLand').css('pointer-events', 'none');
})

//WORK ON CLAIMBUTTONYES!!!!

$('#claimbuttonyes').click(function(){
  
  console.log(totalAcreCost)
  if(parseInt(wealth) >= totalAcreCost){
    alert('works i guess');
  } else{
    alert('Not Enough Wealth!')
    /*
    $('#ClaimLand').css('opacity', 0);
    $('#ClaimLand').css('pointer-events', 'none');
    localStorage.setItem('wealth', 50)
    wealthtxt.text('Wealth: ' + countryWealth)
    localStorage.setItem('acres', localStorage.getItem('acres') + claimval)*/
  }
})

$('#claimlandacres').change(function(){
  totalAcreCost = (parseInt($('#claimlandacres').val()) * parseInt(acreCost))
  console.log(totalAcreCost)
  $('#claimingLoseMoney').css('color', 'red')
  $('#claimingLoseMoney').text('-' + acreCost * $('#claimlandacres').val() + ' Wealth')

  $('#claimingEarnPpl').css('color', 'green')
  $('#claimingEarnPpl').text('+' + acrePopulation * $('#claimlandacres').val() + ' Population')
})