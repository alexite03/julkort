# Julkort

## Instruktioner

Använd [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) för att rita julkort!

Lägg till en text-hälsning så att man ser från vem det är.

Publicera på vercel. Skicka länken till klassen och andra du vill hälsa till!

## Kom igång

Börja såhär
````javascript
// ------- Setup code, do not change ------
const MAX_HEIGHT = document.body.clientHeight
const MAX_WIDTH = document.body.clientWidth

const canvas = document.createElement('canvas')
canvas.height = MAX_HEIGHT
canvas.width = MAX_WIDTH
document.body.appendChild(canvas)

const ctx = canvas.getContext('2d')
// ----------------------------------------
````

## Idéer

Börja enkelt. Gör ett statiskt julkort med något porträtt och en hälsning i text "God jul önskar X!"

* Ett hus?
* En gran?
* En stjärna?
* En julklapp?
* En snögubbe?

Var kreativ! Börja enkelt och lägg till mer efter hand!

Om du vill göra en animation, använd t.ex. `setInterval` så här:
````javascript
setInterval(() => {
    // Den här funktionen kommer anropas ungefär var 5:e millisekund
}, 5)
````

Infoga kanske en bild från webben? [drawImage](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)

En annan variant är att lägga till någon form av interaktivitet. Ska man kunna göra något med musen? Vad finns det för mus-events du kan använda?

[Musik](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio)? Julmusik? Kan du hitta någon mp3-fil att spela?

[Vercelhemsida:]()