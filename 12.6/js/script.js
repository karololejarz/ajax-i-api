var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var countryRow = $('#country-row')
var country = $('#country');
var capital = $('#capital');

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
  country.empty();
  capital.empty();
  resp.forEach(function(item) {
    $('<tr>').text(item.name).appendTo(country);
    $('<tr>').text(item.capital).appendTo(capital);
  });
}