class MobileNavbar{

        constructor(mobileMenu, navList, navLinks){

            this.mobileMenu = document.querySelector(mobileMenu);
            this.navList = document.querySelector(navList);
            this.navLinks = document.querySelectorAll(navLinks);
            this.activeClass = "active";
            this.handleClick = this.handleClick.bind(this)
        }


    init(){
            console.log(this.mobileMenu , this.navList , this.navLinks)

            if(this.mobileMenu){
                    this.addClickEvent()
                    }
                    return this;
                }

    addClickEvent(){ 
                this.mobileMenu.addEventListener("click", this.handleClick);
    }

    handleClick(){
            console.log(this)

            this.navList.classList.toggle(this.activeClass)
            this.animateLinks()

    }   

    animateLinks(){
        this.navLinks.forEach((link, index)=>{
            link.style.animation
            ? (link.style.animation="")
            : (link.style.animation=`navLinkFade 0.5s ease forwards ${index/2*0.3}s`)
            
        })
    }
    


}

//final da classe

// Início de execução

const mobileNavbar = new MobileNavbar(

    ".menu-mobile-icon",
    ".list-menu",
    ".list-menu li"
);

mobileNavbar.init()