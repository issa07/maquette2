$(document).ready(function() {
    $(this).on("click", ".add", function() {
        let html = ' <div class="form-group"> <select name="maçonnerie" id="maconnerie"> <optgroup label="Maçonnerie"> <option value="maçonnerieMur">Maçonnerie murs</option> <option value="maçonnerieExterieur">Maçonnerie extérieur</option> </optgroup> </select> </div>'
        
        $(".select-div").append(html);
    })
})