  var nodeio  = require('node.io'),
      options = {
        timeout : 1000,
        max     : 30, 
        jsdom   : true, 
        retries : 5 
      };

  exports.job = new nodeio.Job(options, {
    input : false,
    run   : function () {
        this.getHtml('http://en.wikipedia.org/wiki/List_of_cities_and_towns_in_India', function(err, $) {
            //Handle any request / parsing errors
            if (err) this.exit(err);
            
            $('table.sortable tr td a').each(function(){
              console.log($(this).text())
            });
/*
            var places = [], states=[], population = [], output = [];
            var i=0;
                       
              $('table.sortable tbody tr').each(function(){
              
                $(this).find('td').eq(0).each(function(){
                  places.push($(this).find('a').text());
                });
                
                $(this).find('td').eq(1).each(function(){
                  states.push($(this).find('a').text());
                });
                
                $(this).find('td').eq(3).each(function(){
                  population.push($(this).html());
                });
              });            
            //Select all titles on the page


            for (var i = 0, len = places.length; i < len; i++) {              
                //Output = [score] title
                output.push(places[i]+'|'+states[i]+'|'+population[i]);
            }
*/
            this.emit('output');
        });
    }
  });
