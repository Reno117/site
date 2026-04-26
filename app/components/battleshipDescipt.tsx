import React from "react";
import GitHubButton from "./GitHubButton";

const BattleshipDescript= () => {
  return (
    <div className="items-center relative max-w-[600px] flex-grow bg-[#294b5a] text-white p-5 my-0 flex">
      <div className="max-h-[100%] max-w-[100%] overflow-auto">
      
<p>
    Battleship is a full stack website developed with Next.js and hosted on Vercel. This project required
    us to make multiple games at a time, where we can connect to other team's servers. we also had to 
    create a working frontend to display the battleship game, which updated in real time, showing current
    game stats and board progress.

    
</p>


      </div>
          <GitHubButton href="https://github.com/k2on/battleship" />
    </div>
  );
};

export default BattleshipDescript;

