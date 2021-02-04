$(document).ready(function() {
    $(this).on("click", ".add", function() {
        let html = `<div class="form-group">
        <select name="maçonnerie" id="maconnerie">
          <optgroup label="Maçonnerie">
            <option value="maçonnerieMur">Maçonnerie murs </option>
            <option value="maçonnerieExterieur">Maçonnerie extérieur</option>
          </optgroup>
          <optgroup label="Platrerie isolation">
            <option value="doublagePlatreCloison">doublage Platre et Cloison</option>
            <option value="plafond">Plafond</option>
          </optgroup>
          <optgroup label="Rêvetement mur/plafond">
            <option value="PeintureEtEnduits">Peinture et Enduits </option>
            <option value="AutresRêvetemens">Autres rêvetemens</option>
          </optgroup>
        </select>
        <i class="fas fa-times"></i>
      </div>`        
        $(".select-div").append(html);
    })
})