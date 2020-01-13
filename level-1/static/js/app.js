var ufoSightings = data;

var button = d3.select('#filter-btn');

button.on('click', function() {

    var input = d3.select('.form-control').property('value');
    var tbody = d3.select('tbody');
    tbody.html("")
    function matchDate(entry) {
        return entry.datetime === input;
    }

    var filtered = data.filter(matchDate)
    if (filtered.lengh > 0) {  
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