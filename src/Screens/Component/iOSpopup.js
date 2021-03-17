import React from "react"

export const IOSPopup = () => {
    return (
        <>
            <div class="webAppUpr">
                <div class="webApp">
                    <div><img src={require("./img/plus.png")} /></div>
                    <p>Install this webapp on your iPhone: tap <img src={require("./img/arow.png")} /> and then Add to homescreen.</p>
                </div>
            </div>         </>
    )
}