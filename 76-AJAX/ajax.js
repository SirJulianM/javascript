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
            console.log("Éxito");
            let json = JSON.parse(xhr.responseText);
            console.log(json);
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
            console.log("Error");
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
        console.log("Este mensaje cargará de cualquier forma")
    });
    
    /* 3) Instrucción que abre la petición (Establecer en el método en que lo vamos a hacer) */
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    
    /* 4) Enviar la petición */
    xhr.send();
})();