export default `
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">Knight evolution</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav ml-auto">
         <li class="nav-item js-call-modal">
          <button type="button" class="btn btn-primary js-game-score">
            Score
          </button>
         </li>  
        <li class="nav-item">
          <a class="nav-link js-landing" href="#">Landing</a>
        </li>
      </ul>
    <!--  <button type="button" class="btn btn-primary js-show-player-name js-choose-player-name-nav">
      Need to choose Player Name
      </button> -->
    </div>
  </nav>
`;
