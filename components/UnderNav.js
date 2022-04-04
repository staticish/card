import React from "react"


export default function UnderNav(){

    return <div className = "nav">
    <span className = "socials">
    <button onClick ={twitter} > <i className="fa fa-twitter" />  </button>
    <button onClick = {instagram}> <i className="fa fa-instagram" /> </button>
    <button onClick = {steam} > <i className="fa brands fa-steam-square"/> </button>
    <button  onClick = {trash} > </button>

    </span>
    </div>

}
function twitter(){
    window.location.href = 'https://twitter.com/StaticIsh'
}
function instagram(){
  window.location.href = "https://www.instagram.com/olaismail007/?hl=en"
}
function steam(){
      window.location.href = "https://steamcommunity.com/profiles/76561198840857347/"
}

function trash(){
  window.location.href = "https://www.youtube.com/watch?v=a3Z7zEc7AXQ"
}
