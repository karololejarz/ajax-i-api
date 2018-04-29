/*v2 returns [object Object]*/
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var countryRow = $('#country-row')
var country = $('#country');
var capital = $('#capital');
var flag = $('#flag');
var area = $('#area');
var population = $('#population');
var languages = $('#languages');
var currencies = $('#currencies');

$('#search').click(searchCountries);

function searchCountries() {
  var countryName = $('#country-name').val();
  if(!countryName.length) countryName = 'Poland';
  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList
  });
  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesTable
  });
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {
    $('<li>').text(item.name).appendTo(countriesList);
  });
}

function showCountriesTable(resp) {
  flag.empty();
  country.empty();
  capital.empty();
  area.empty();
  population.empty();
  languages.empty();
  currencies.empty();
  resp.forEach(function(item) {
    $('<tr>').text(item.name).appendTo(country);
    $('<tr>').text(item.capital).appendTo(capital);
    $('<tr>').text(item.area).appendTo(area);
    $('<tr>').text(item.population).appendTo(population);
    $('<tr>').text(item.languages).appendTo(languages);
    $('<tr>').text(item.currencies).appendTo(currencies);
  });
}