$(document).ready(function() {
        $(`header button`).click(function() {
                $(`form`).slideDown();
        })

        $(`#botao-cancelar`).click(function() {
                $(`form`).slideUp();
        })

        
        $(`#telefone`).mask(`(00) 00000-0000`)
        
        $(`#campo-cpf`).mask(`000.000.000-00`)
        
        $(`#campo-cep`).mask(`00000-000`)

        $(`form`).validate({
                rules: {
                        nome: {
                                required: true
                        },
                        email: {
                                required: true,
                                email: true,
                        },
                        telefone: {
                                required: true
                        },
                        endereço: {
                                required: true
                        },
                        cep: {
                                required: true
                        },
                        cpf: {
                                required: true
                        },
                },
                messages: {
                        nome:"Por favor insira o seu nome"
                },
                submitHandler: function(form) {
                        console.log(form)
                },
                invalidHandler: function(evento, validador) {
                        let camposIncorretos = validador.numberOfInvalids();
                        if (camposIncorretos) {
                                alert(`Existem ${camposIncorretos} campos não preenchidos!`)
                        }
                }
        })
})

