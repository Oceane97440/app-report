$(document).ready(function () {
  
   // let selectmarque = $("#marque");



        $.get(`http://127.0.0.1:3000/app/json/formats`, function(formats) {
            console.log(formats)
            
            let list_formats = `<option value="" selected disabled>Sélectionner un format</option>`;
            
    
           
            formats.forEach((format) => {
                list_formats += `<option value="${format.format_group}">${format.format_group}</option>`
            });

            $("#format").html(list_formats);

        })

        $.get(`http://127.0.0.1:3000/app/json/packs`, function(packs) {
            console.log(packs)
            
            let list_pack = `<option value="" selected disabled>Sélectionner un packs</option>`;
            
    
           
            packs.forEach((pack) => {
                list_pack += `<option value="${pack.pack_id}">${pack.pack_name}</option>`
            });

            $("#packs").html(list_pack);

        })

        $.get(`http://127.0.0.1:3000/app/json/countrys`, function(countrys) {


            $("#span").html(`<input class="form-check-input" type="checkbox" name="countries" id="countries" value="${countrys[0].country_id}" checked="checked">`)




            $("#span").show();

        
        })
    









    
    })