export default `
<section id="battle" class="container" style="text-align:center;">
  <div class="row">
    <div class="col-sm">
      <div id="player">
      <h5 class="card-title js-name">Player</h5>
      <div class="progress hero-hp">
        <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <canvas id="player-animation" width="300" height="300"></canvas>
      </div>
    </div>
    <div class="col-sm">
      
    </div>
    <div class="col-sm">
      <div id="monster">
      <h5 class="card-title js-enemy-name">Monster</h5>
      <div class="progress monster-hp">
        <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <canvas id="monster-animation" width="300" height="300" style="transform: scale(-1,1);"></canvas>
      </div>
    </div>
  </div>
  <button type="button" id="js-choose-cast" class="btn btn-danger">
    Fight!
  </button>   
</section>
`;
