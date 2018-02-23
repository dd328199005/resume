

export default class Navbar {
    constructor(){
        this.bindEvent()
        this.hidTel()
    }
    bindEvent(){
        $(window).on('scroll', () => {
                if ($(window).scrollTop() > 540) {
                    $('.navbar').addClass('bt-shadow')
                } else {
                    $('.navbar').removeClass('bt-shadow')
                }
                this.scrolling = false;
        })
    }

    hidTel(){
        $(window).on('scroll',() => {
            if (this.clock2) {
                clearTimeout(this.clock2)
            }   
            $('.bt-tell').css('right','-400px')
           this.clock2 = setTimeout(() => {
                $('.bt-tell').css('right', '0')
            }, 1000);
        })
    }
}







