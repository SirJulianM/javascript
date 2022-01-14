(() =>
{
    /* 1) Crea la instancia */
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr");
    $fragment = document.createDocumentFragment();

    /* 2) Asignación del evento (o de los eventos) */
    xhr.addEventListener("readystatechange", (e) => 
    {
        if(xhr.readyState !== 4) return;
        //console.log(xhr);
        if(xhr.status >=200 && xhr.status < 300)
        {
            //console.log("Éxito");
            let json = JSON.parse(xhr.responseText);
            //console.log(json);
            json.forEach(el =>
            {
                const $li = document.createElement("li");
                $li.innerHTML = `Nombre: ${el.name} -- Email: ${el.email} -- Teléfono: ${el.phone}`;
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
        }
        else
        {
            //console.log("Error");
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
        //console.log("Este mensaje cargará de cualquier forma")
    });
    
    /* 3) Instrucción que abre la petición (Establecer en el método en que lo vamos a hacer) */
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    
    /* 4) Enviar la petición */
    xhr.send();
})();

(() =>
{
    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.ok ? res.json() : Promise.reject(res))
    .then(
        json =>
        {
            //console.log(json);
            //$fetch.innerHTML = json;
            json.forEach(el =>
            {
                const $li = document.createElement("li");
                $li.innerHTML = `Nombre: ${el.name} -- Email: ${el.email} -- Teléfono: ${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetch.appendChild($fragment);
        }
    )
    .catch(err =>
        {
            //console.log(err);     
            let message = err.statusText || "Ocurrió un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;       
        }
    )
    .finally(() =>
        {
            //console.log("Esto se ejecutará independientemente del resultado de la promesa fetch");
        }
    );

})();

(()=>
{
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

    async function getData() 
    {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await res.json();

            console.log(res);
            console.log(json);

            /*if(!res.ok)
            {
                throw new Error("Ocurrió un error al solicitar los datos");
            }*/

            if(!res.ok)
            {
                throw{
                    status: res.status,
                    statusText: res.statusText
                };
            }
            json.forEach(el => 
            {
                const $li = document.createElement("li");
                $li.innerHTML = `Nombre: ${el.name} -- Email: ${el.email} -- Teléfono: ${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);
        } 
        catch (err) 
        {
            //console.log("Estoy en el catch", err);
            let message = err.statusText || "Ocurrió un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;  
        }
        finally
        {
            console.log("Esto se ejecuta independiente del Try-Catch");
        }
        
    }

    getData();

    
})();

(()=>
{
    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => 
        {
            console.log(res);
            let json = res.data;
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `Nombre: ${el.name} -- Email: ${el.email} -- Teléfono: ${el.phone}`;
                $fragment.appendChild($li);
            });
            $axios.appendChild($fragment);
        })
        .catch(err => 
        {
            console.log("Estamos en el catch ", err.response);
            let message = err.response.statusText || "Ocurrió un error";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
        })
        .finally(() => 
        {
            console.log("Esto se ejecutará independientemente del resultado de Axios");
        });
})();