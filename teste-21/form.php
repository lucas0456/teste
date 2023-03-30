<?php
include "topo.php";
?>
<form class="container-fluid">
<div class="col-6">
    <div class="row g-3">
    <h2>Adicionar produto</h2>
  <div class="col-auto">
    <label for="email" class="form-label">Nome</label>
    <input type="text" class="form-control">
  </div>
  <div class="col-auto">
    <label for="pass" class="form-label">Preço</label>
    <input type="password" class="form-control">
  </div>
  </div>
<div class="row g-4">
  <div class="col-auto">
    <label for="estoque" class="form-label">Estoque</label>
    <input type="text" class="form-control">
  </div>
  <div class="col-auto">
    <label for="ima" class="form-label">imagem de capa</label>
    <input type="file" class="form-control">
  </div>
  <div class="col-12">
  <label for="exampleFormControlTextarea1" class="form-label">Descrição</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
</div>
  </div>
  <div class="col text-end">
  <button type="submit" class="btn btn-primary">Adicionar</button>
  </div>
</div>
</form> 
<?php
include "rodape.php";
?>