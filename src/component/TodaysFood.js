import React from 'react'

function TodaysFood(){
    return(
        <div class="column content">
          <h2 class="subtitle">Today's foods</h2>
          <ul>
            {/* // value recebido do botão + da lista */}
            <li>1 Pizza = 400 cal</li>
            <li>2 Salad = 300 cal</li>
          </ul>
          {/* //somar numeros li */}
          <strong>Total: 700 cal</strong>
        </div>
    )
}