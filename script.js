// under here is just a bunch of balony
// this is very messy code lol


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
localChecker('populationDelay', 2000)
localChecker('wealthDelay', 1000)

//perks localstorage
localChecker('oneAcrePerk', 0)
localChecker('1kPopulationPerk', 0)

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
var countryPopulationDelayLocal = localStorage.getItem('populationDelay')
var countryWealthDelayLocal = localStorage.getItem('wealthDelay');

// variables \\
var population = parseInt(countryPopulationLocal);
var wealth = parseInt(countryWealthLocal);
console.log(typeof(wealth))
var acres = parseInt(countryAcresLocal);
var populationDelay = parseInt(countryPopulationDelayLocal);
var wealthDelay = parseInt(countryWealthDelayLocal);

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
var totalPopulationGain;
var totalAcres;
var acrePopulation = 50;

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


//perk variables
var oneAcrePerk = parseInt(localStorage.getItem('oneAcrePerk'));
var Perk1k = parseInt(localStorage.getItem('1kPopulationPerk'));

$('#claimbuttonyes').click(function(){
  if($('#claimlandacres').val() != ''){
    //console.log(totalAcreCost)
    if(parseInt(wealth) >= totalAcreCost){
      $('#ClaimLand').css('opacity', 0);
      $('#ClaimLand').css('pointer-events', 'none');
      wealth -= totalAcreCost;
      console.log('wealth ' + wealth)
      population += totalPopulationGain;
      acres += totalAcres
      
      wealthtxt.text('Wealth: ' + wealth);
      localStorage.setItem('wealth', wealth)
      
      populationtxt.text('Population: ' + population)
      localStorage.setItem('population', population)

      acrestxt.text('Acres of land: ' + acres);
      localStorage.setItem('acres', acres)

      if(oneAcrePerk == 0){
        localStorage.setItem('oneAcrePerk', 1);
        oneAcrePerk = 1;
        oneAcrePerkFunc()
        alert('You now gain 1 population every 2 seconds, and 1 Wealth per second!')
      }
    } else{
      alert('Not Enough Wealth!')
      /*
      
      localStorage.setItem('wealth', 50)
      wealthtxt.text('Wealth: ' + countryWealth)
      localStorage.setItem('acres', localStorage.getItem('acres') + claimval)*/
    }
  } else {
    alert('Please enter a valid Input!')
  }
  
})

// gainer functions

function oneAcrePerkFunc(){
  setInterval(function(){
    population += 1;
    localStorage.setItem('population', population)
    populationtxt.text('Population: ' + population);
    if(population >= 1000 && Perk1k == 0){
      localStorage.setItem('1kPopulationPerk', 1)
      Perk1k = 1;
      alert('You now earn 1 population every second, and 1 wealth every .5 seconds!')
      localStorage.setItem('populationDelay', 1000)
      localStorage.setItem('wealthDelay', 500)
      populationDelay = 1000;
      wealthDelay = 500;
      location.reload()
    }
  }, populationDelay)
  setInterval(function(){
    wealth += 1;
    localStorage.setItem('wealth', wealth)
    wealthtxt.text('Wealth: ' + wealth);
  }, wealthDelay)
}
if(oneAcrePerk == 1){
  setInterval(function(){
    population += 1;
    localStorage.setItem('population', population)
    populationtxt.text('Population: ' + population);
    if(population >= 1000 && Perk1k == 0){
      localStorage.setItem('1kPopulationPerk', 1)
      Perk1k = 1;
      alert('You now earn 1 population every second, and 1 wealth every .5 seconds!')
      localStorage.setItem('populationDelay', 1000)
      localStorage.setItem('wealthDelay', 500)
      populationDelay = 1000;
      wealthDelay = 500;
      location.reload()
    }
  }, populationDelay)
  setInterval(function(){
    wealth += 1;
    localStorage.setItem('wealth', wealth)
    wealthtxt.text('Wealth: ' + wealth);
  }, wealthDelay)
}

$('#claimlandacres').change(function(){
  totalAcreCost = (parseInt($('#claimlandacres').val()) * parseInt(acreCost));
  totalPopulationGain = (parseInt($('#claimlandacres').val()) * parseInt(acrePopulation));
  totalAcres = parseInt($('#claimlandacres').val());
  console.log(totalAcreCost)
  $('#claimingLoseMoney').css('color', 'red')
  $('#claimingLoseMoney').text('-' + acreCost * $('#claimlandacres').val() + ' Wealth')

  $('#claimingEarnPpl').css('color', 'green')
  $('#claimingEarnPpl').text('+' + acrePopulation * $('#claimlandacres').val() + ' Population')
})

