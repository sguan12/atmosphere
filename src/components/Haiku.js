import React from 'react';

function Haiku(main, description) {
    // haiku dictionary
    const haikus = {
        "clear": " warm, radiant sun <br> offers us a beaming smile <br> lights our world with joy ",
        "clouds": " a shy ray of light <br> cautiously peeks behind clouds <br> stays partly hidden ",
        "overcast clouds": " gray and moody skies <br> there's no sun to be seen but <br> good photo lighting ",
        "thunderstorm": " rain but with a flash <br> fierce lightning pierce the heavens <br> booming drums above ",
        "rain": " heavy raindrops fall <br> rest your eyes and listen close <br> nature's lullaby ",
        "drizzle": " refreshing drizzle <br> like flying through a cloud in <br> tiny mist droplets ",
        "snow": " white, frosty winter <br> icy crystals float gently <br> they melt in your hands "
    }

    // generating corresponding haiku
    if (description === "overcast clouds")
      document.getElementById('haiku').innerHTML = haikus[description.toLowerCase()];
    else if (haikus[main.toLowerCase()] === undefined)
      document.getElementById('haiku').innerHTML = main.toLowerCase();
    else document.getElementById('haiku').innerHTML = haikus[main.toLowerCase()];
  }

export default Haiku;