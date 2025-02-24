$.getJSON('example.json', function(data) {
      var output = '';
      $.each(data.name, function(key, value) {
            output += '<a href="emailto:' + value.email + '">'  + value.name + '</a>';
    });

    $('#user').html(output);
});
