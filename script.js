// under here is just a bunch of balony
// this is very messy code lol

// v2


//LocalChecker
function localChecker(localstorage, value){
  if(localStorage.getItem(localstorage) == undefined){
    localStorage.setItem(localstorage, value)
  }
}


//insta-alert
function coolalert(title, desc){
  $('#alert').css('opacity', 1);
  $('#alert').css('pointer-events', 'all');
  $('#alerttitle').text(title)
  $('#alertdesc').text(desc)
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
localChecker('smallCountryAlert', 0)
localChecker('mediumCountryAlert', 0)
localChecker('largeCountryAlert', 0)
localChecker('hugeCountryAlert', 0)
localChecker('region', 0)

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
var countryRegionLocal = localStorage.getItem('region')

// variables \\
var population = parseInt(countryPopulationLocal);
var wealth = parseInt(countryWealthLocal);
console.log(typeof(wealth))
var acres = parseInt(countryAcresLocal);
var populationDelay = parseInt(countryPopulationDelayLocal);
var wealthDelay = parseInt(countryWealthDelayLocal);

// WW500 simulator beta XD \\

if(localStorage.getItem('region') != '0'){
  $('#regionbtn').remove();
  $('#regionlool').text('Region: ' + localStorage.getItem('region') + ' ')
}

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
  if(localStorage.getItem('smallCountryAlert') == 0){
    localStorage.setItem('smallCountryAlert', 1)
    coolalert('Bigger Country!','You are now considered a small sized country! (previous rank: tiny)');
  }
}
if(countryPopulationLocal > 10000){
  sizeVar = 'medium'
  if(localStorage.getItem('mediumCountryAlert') == 0){
    localStorage.setItem('mediumCountryAlert', 1)
    coolalert('Bigger Country!','You are now considered a medium sized country! (previous rank: small)');
  }
}
if(countryPopulationLocal > 100000){
  sizeVar = 'large'
  if(localStorage.getItem('largeCountryAlert') == 0){
    localStorage.setItem('largeCountryAlert', 1)
    coolalert('Bigger Country!','You are now considered a large sized country! (previous rank: medium)');
  }
}
if(countryPopulationLocal > 1500000){
  sizeVar = 'HUGE'
  if(localStorage.getItem('hugeCountryAlert') == 0){
    localStorage.setItem('hugeCountryAlert', 1)
    coolalert('Bigger Country!','You are now considered a HUGE sized country! (previous rank: large)');
  }
}

$('#flag').attr('src', localStorage.getItem('flag'));
$('#countryName').text(localStorage.getItem('name'));
$('#countryMotto').text('"' + localStorage.getItem('motto') + '"');

$('#population').text("Population: " + localStorage.getItem('population'));
$('#wealth').text("Wealth: " + localStorage.getItem('wealth'));
$('#land').text("Acres of land: " + localStorage.getItem('acres'));

// Big text
$('#biginfo').text("The Country of " + countryNameLocal + " is a " + sizeVar + " country that uses " + countryCurrencyLocal + ' as their currency. 1 ' + countryCurrencyLocal + ' is equivalent to ' + countryCurrencyUSDLocal + ' USD dollars. The famous mascot for ' + countryNameLocal + ' is a ' + countryMascotLocal + '. There are currently ' + countryPopulationLocal + ' ' + countryNameLocal + "ians inside the country. " + countryNameLocal + "'s famous motto is " + '"' + countryMottoLocal + '". This nation is located in the region '+ countryRegionLocal + '. They also own about ' + countryAcresLocal + ' acres of land in their region.')

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
        coolalert('You gained a Perk!','You now gain 1 population every 2 seconds, and 1 Wealth per second!')
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
    if(countryPopulationLocal > 1000){
      sizeVar = 'small';
      if(localStorage.getItem('smallCountryAlert') == 0){
        localStorage.setItem('smallCountryAlert', 1)
        coolalert('Bigger Country!','You are now considered a small sized country! (previous rank: tiny)');
      }
    }
    if(countryPopulationLocal > 10000){
      sizeVar = 'medium'
      if(localStorage.getItem('mediumCountryAlert') == 0){
        localStorage.setItem('mediumCountryAlert', 1)
        coolalert('Bigger Country!','You are now considered a medium sized country! (previous rank: small)');
      }
    }
    if(countryPopulationLocal > 100000){
      sizeVar = 'large'
      if(localStorage.getItem('largeCountryAlert') == 0){
        localStorage.setItem('largeCountryAlert', 1)
        coolalert('Bigger Country!','You are now considered a large sized country! (previous rank: medium)');
      }
    }
    if(countryPopulationLocal > 1500000){
      sizeVar = 'HUGE'
      if(localStorage.getItem('hugeCountryAlert') == 0){
        localStorage.setItem('hugeCountryAlert', 1)
        coolalert('Bigger Country!','You are now considered a HUGE sized country! (previous rank: large)');
      }
    }
    if(population >= 1000 && Perk1k == 0){
      localStorage.setItem('1kPopulationPerk', 1)
      Perk1k = 1;
      coolalert('You gained a Perk!','You now earn 1 population every second, and 1 wealth every .5 seconds!')
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
      coolalert('You gained a Perk!','You now earn 1 population every second, and 1 wealth every .5 seconds!')
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

$('#regionbtn').click(function(){
  window.location.href = "html/regionselect.html";
})

$('#alertokay').click(function(){
  $('#alert').css('opacity',0)
  $('#alert').css('pointer-events','none')
})

