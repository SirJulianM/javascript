const d = document, n = navigator, ua = n.userAgent;

export default function userDeviceInfo(id)
{
    const $id = d.getElementById(id),
    isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        blackberry: () => ua.match(/blackberry/i),
        any: function() 
        {
            return this.android() || this.ios() || this.windows() || this.blackberry()    
        },
    },
    isDesktop = {
        linux: () => ua.match(/linux/i),
        windows: () => ua.match(/windows NT/i),
        mac: () => ua.match(/mac os/i),
        any: function () 
        {
            return this.linux() || this.mac() || this.windows()    
        }
    },
    isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera | opera mini/i),
        edge: () => ua.match(/edge/i),
        ie: () => ua.match(/msie | iemobile/i),
        any: function() 
        {
            return this.chrome() || this.safari() || this.firefox() || this.opera() || this.edge() || this.ie()    
        }
    }
    console.log(ua);
    /* console.log(isMobile.android());
    console.log(isMobile.ios()); 
    console.log(isMobile.any());
    console.log(isDesktop.any());
    console.log(isBrowser.any()); */

    $id.innerHTML = 
    `
    <ul>
        <li>User agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
    `;

    if(isBrowser.chrome())
    {
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`
    }

    if(isBrowser.firefox())
    {
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`
    }

    if(isDesktop.mac())
    {
        $id.innerHTML += `<p><mark>Descarga nuestro software para MAC</mark></p>`
    }

    /* if(isMobile.android())
    {
        Redirige a la página de Jonathan Mircha
        window.location.href = "https://www.jonmircha.com";
    } */
}