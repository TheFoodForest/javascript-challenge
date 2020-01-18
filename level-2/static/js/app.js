var ufoSightings = data;

var button = d3.select('#filter-btn');

button.on('click', function() {

    var inputDate = d3.select('#datetime').property('value');
    var inputCity = d3.select('#city').property('value');
    var inputState = d3.select('#state').property('value');
    var inputCountry = d3.select('#country').property('value');
    var inputShape = d3.select('#shape').property('value');
    var tbody = d3.select('tbody');

    if (inputDate === '') {
            inputDate = RegExp("[\\s\\S]*");
        }
    else {
        inputDate = RegExp(inputDate)
    }


    if (inputCity === '') {
        inputCity = RegExp("[\\s\\S]*");
    }
    else {
        inputCity = RegExp(inputCity)
    }



    if (inputState === '') {
        inputState = RegExp("[\\s\\S]*");
    }
    else {
        inputState = RegExp(inputState)
    }



    if (inputCountry === '') {
        inputCountry = RegExp("[\\s\\S]*");
    }
    else {
        inputCountry = RegExp(inputCountry)
    }



    if (inputShape=== '') {
        inputShape = RegExp("[\\s\\S]*");
    }
    else {
        inputShape = RegExp(inputShape)
    }


    // console.log(inputDate.test('anything') && inputCity.test('anything') && inputState.test('anything') && inputCountry.test('anything') && inputShape.test('anything'));

    tbody.html("");

    function matchSearch(entry) {
        return (inputDate.test(entry.datetime) && inputCity.test(entry.city) && inputState.test(entry.state) && inputCountry.test(entry.country) && inputShape.test(entry.shape))
          
    }

    var filtered = ufoSightings.filter(matchSearch)
   
    if (filtered.length > 0) {  
        filtered.forEach(value => {
            var row = tbody.append('tr');
            row.append('td').text(value.datetime);
            row.append('td').text(value.city);
            row.append('td').text(value.state);
            row.append('td').text(value.country);
            row.append('td').text(value.shape);
            row.append('td').text(value.durationMinutes);
            row.append('td').text(value.comments);
        });
    }
    else {
        var row = tbody.append('tr').append('td').text('No data for your search :( ');
    }
});