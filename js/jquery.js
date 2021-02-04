$(document).ready(function() {
    $(this).on("click", ".add", function() {
        let html = `<div class="form-group">
        <select name="maçonnerie" id="maconnerie">
          <optgroup label="Maçonnerie">
            <option value="maçonnerieMur">Maçonnerie murs </option>
            <option value="maçonnerieExterieur">Maçonnerie extérieur</option>
            <option value="constructionMaison">Construction maison</option>
          </optgroup>
          <optgroup label="Platrerie isolation">
            <option value="doublagePlatreCloison">doublage Platre et Cloison</option>
            <option value="plafond">Plafond</option>
          </optgroup>
          <optgroup label="Rêvetement sol/mur/plafond">
            <option value="peintureEtEnduits">Peinture mur, plafond, boiseries </option>
            <option value="carlageSol">Carlage sol</option>
            <option value="parquet">Parquet (neuf ou rénovation)</option>
            <option value="autresRêvetemens">Autres rêvetemens</option>
          </optgroup>
          <optgroup label="Extérieur & Toitures">
            <option value="carlageExterieur">Carlage Extérieur </option>
            <option value="nettoyageFacade">Nettoyage de façade</option>
          </optgroup>
        </select>
        <i class="fas fa-times"></i>
      </div>`   

        $(".select-div").append(html);
    })
})