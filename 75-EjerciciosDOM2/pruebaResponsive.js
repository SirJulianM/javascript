const d = document;

export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", (e) => {
        if(e.target === $form);
        e.preventDefault();
        console.log('Ancho', $form.ancho.value);
        console.log('Alto', $form.alto.value);
        tester = window.open(
            $form.direccion.value, 'tester', 
            `innerWidth=${$form.ancho.value},
            innerHeight=${$form.alto.value}`
        );
    });

    d.addEventListener("click", e => {
        if(e.target === $form.close){
            tester.close();
        }
    }) 
}