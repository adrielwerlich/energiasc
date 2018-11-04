class EnergyComponents {
    constructor() {
        console.log('constructor')
        this.el = {}
        // this.el.linkShowHardware = document.querySelector('#link-show-hardware')
        this.el.linkShowHardware = document.getElementById('link-show-hardware')
        this.el.linkShowExplanation = document.getElementById('link-show-explanation')
        this.el.linkShowBudget = document.getElementById('link-show-form')
        this.el.linkShowAboutUs = document.getElementById('link-show-aboutUs')

        this.el.inputNome = document.getElementById('nome_cliente')

        // this.el.blocoEquipe = document.querySelector('#card-equipe')

        this.el.hardwareList = document.getElementById('produtosPhb')
        this.el.aboutUs = document.getElementById('aboutUs')
        this.el.budgetSample = document.getElementById('budget-sample')
        this.el.howItWorks = document.getElementById('how-it-works')
        
        
        this.elementsPrototype()
        this.initEvents()
        
    }


    initEvents(){

        this.el.linkShowAboutUs.addEventListener('click', e =>{
            // console.log('event link show about us')
            this.show(this.el.aboutUs)
            this.hide(this.el.hardwareList)
            this.hide(this.el.howItWorks)
            this.hide(this.el.budgetSample)
            
            // this.showOnlyThis(this.el.linkShowAboutUs)
            window.scroll(0,400)
        })

        window.addEventListener('open', e => {
            window.scroll(0,0)
        })

        this.el.linkShowHardware.addEventListener('click', e =>{
            this.show(this.el.hardwareList)
            this.hide(this.el.howItWorks)
            this.hide(this.el.budgetSample)
            this.hide(this.el.aboutUs)
            window.scroll(0, 400)
        })

        this.el.linkShowExplanation.addEventListener('click', e => {
            this.show(this.el.howItWorks)
            this.hide(this.el.hardwareList)
            this.hide(this.el.aboutUs)
            this.hide(this.el.budgetSample)
            window.scroll(0, 400)
        })

        this.el.linkShowBudget.addEventListener('click', e => {
            alert('Insira seus dados, entraremos em contato assim que possível')
            window.scrollTo(0, this.el.inputNome.offsetHeight + 130)
            this.el.inputNome.focus()
        })
    }

    elementsPrototype() {
        Element.prototype.hide = function () {
            this.style.display = 'none'
            return this
        }
        Element.prototype.show = function () {
            this.style.display = 'block'
            return this
        }
        Element.prototype.toggle = function () {
            this.style.display = (this.style.display === 'none') ? 'block' : 'none'
            return this
        }
        Element.prototype.on = function (events, fn) {
            events.split(' ').forEach(event => {
                this.addEventListener(event, fn)
                //(exemplo para digitar no console) app.el.btnNewContact.on('click mouseover dblclick', (event) => {console.log('evento do botão newContact >>> ', event.type)})
            })
            return this
        }
    }

    showOnlyThis(argEl){
        console.log('entrou showonlythis ',argEl)
        for (let lElKey in this.el){
            console.log(lElKey)
            console.log('comparando', argEl, ' com ', this.el[lElKey])
            console.log(argEl === this.el[lElKey])
            if (argEl === this.el[lElKey])
                this.show(argEl)
            else
                this.hide(this.el[lElKey])
        }

    }

    show(el) {
        el.style.display = 'block'
    }

    hide(el) {
        console.log('hide > elem > ', el)
        el.style.display = 'none'
    }

    toggle(el) {
        el.style.display = (el.style.display === 'none') ? 'block' : 'none'
    }

    mostrarEquipe() {
        console.log('mostrar equipe')
        console.log(navbarHeader.offsetHeight)
        console.log(blocoEquipe.offsetTop)

        if (blocoEquipe.style.display === 'block') {
            // blocoEquipe.offsetTop - navbarHeader.offsetHeight
            window.scroll(0, blocoEquipe.offsetHeight)
            console.log('entrou no if')
        }

        return (blocoEquipe.style.display === 'none') ? blocoEquipe.style.display = 'block' : blocoEquipe.style.display = 'none'
    }

    orcamento() {
        console.log(inputNome.offsetHeight + 100)
        alert('Preencha seus dados. Entraremos em contato assim que possível!')
        window.scrollTo(0, inputNome.offsetHeight + 130)
        inputNome.focus()
    }


}

$('#formSolicitacao').submit(function (e) {

    var name = document.getElementById('nome_cliente'),
        email = document.getElementById('email_cliente'),
        tel = document.getElementById('tel_cliente'),
        message = document.getElement.ById('mensagem_cliente')

    if (!name.value || !email.value || !tel.value || !message.value) {
        alertify.error('error')
    } else {
        $.ajax({
            url: 'https://formspree.io/adrielwerlich@gmail.com',
            method: 'post',
            data: $(this).serialize(),
            dataType: 'json'
        })
        e.preventDefault()
        $(this).get(0).reset()
        alertify.success('message sent')
    }
})

// $('.carousel').carousel({
//     interval: 2000
// })

window.appEnergyController = new EnergyComponents()

