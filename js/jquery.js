$(document).ready(function() {

  // Button add option for devis 
  let optionCount = 1;
  let outputCount = 1;

  // Bouton "add" pour ajouter un service supplémentaire
  $(this).on("click", ".add", function() {
    let idOptionCount = ++optionCount
    let idOutputCount = ++outputCount

      let html = `<div class="form-group">
      <select name="maçonnerie" class="option${(idOptionCount)}">
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
    </div>
    <div id="output${(idOutputCount)}"></div>`   

    $(".select-div").append(html);

    // Element DOM ajouté après chargement de la page 
    // Champ pour << input >>
    $(`.option${(idOptionCount)}`).change(function() {
      let count = 1;
      ++count;
      let inputElement = `<input type="number" class="newInput${(count)}" min="1" max="5000" placeholder="Surface en m²">`
      let inputElement2 = '<input type="number" class="newInput" min="1" max="5000" placeholder="Nombre de pièces">'
      
      if($(`.option${(idOptionCount)}`).val() == "constructionMaison") {
          $(`#output${(idOutputCount)}`).append(inputElement, inputElement2);
          console.log('ça marche bien')
      }
      else if ($(`.option${(idOptionCount)}`).val() != "constructionMaison") {
          $(`.newInput${(count)}`).remove();
          // $(`.newInput${(count)}`).remove();

          console.log('Element selectionné est supprimé')
      }
    })  

  })


  $('.options').change(function() {
  
    let inputElement = '<input type="number" class="newInput" min="1" max="5000" placeholder="Surface en m²">'
    let inputElement2 = '<input type="number" class="newInput" min="1" max="5000" placeholder="Nombre de pièces">'
    
    if($(".options").val() === "constructionMaison") {
        $("#output").append(inputElement, inputElement2);
        console.log('ça marche')
    }
    else if ($(".options").val() != "constructionMaison") {
        $(".newInput").remove();
    }
  })
})

