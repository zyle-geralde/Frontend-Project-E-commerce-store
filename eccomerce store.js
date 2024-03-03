var dropme = document.querySelector(".dropthis")

dropme.addEventListener("click",function(e){
    e.target.lastElementChild.classList.toggle("dropdot2")
})

//CART

//opening cart
var clickcart = document.querySelector(".cartme")

clickcart.addEventListener("click",function(e){
    var showcart = document.querySelector(".cartcont")
    showcart.style.width = "350px"
})

//closing cart

var closebut = document.querySelector(".closecart")

closebut.addEventListener("click",function(e){
    var closecart = document.querySelector(".cartcont")
    closecart.style.width = "0px"
})
// adding to cart
var addcart = document.querySelectorAll(".addbut")


for(n =  0; n<addcart.length; n++){
    addcart[n].addEventListener("click",function(e){
        var cartbox = document.querySelector(".cartbox")
        var mainc = document.createElement("div")
        mainc.classList.add("cartprod")
    
        cartbox.append(mainc)

        var indiv = document.createElement("div")
        var imgcart = document.createElement("img")
        imgcart.classList.add("imagecart")
        imgcart.src = this.parentElement.parentElement.parentElement.firstElementChild.src
        indiv.append(imgcart)

        mainc.append(indiv)

        var textdiv = document.createElement("div")
        textdiv.classList.add("dscrpt")
        mainc.append(textdiv)

        var title = document.createElement("p")
        title.classList.add("prodtitle")
        title.innerText = this.parentElement.parentElement.firstElementChild.innerText
        textdiv.append(title)

        var price = document.createElement("p")
        var valuecart = document.createElement("span")

        valuecart.innerText = this.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerText
        price.classList.add("prodprice")
        price.innerText = "$"
        price.append(valuecart)
        textdiv.append(price)

        var inp = document.createElement("input")
        inp.classList.add("numberincr")
        inp.type = "number"
        inp.min = "1"
        inp.max = "9999"
        inp.value = 1
        textdiv.append(inp)
        

        var icon = document.createElement("i")
        icon.classList.add("fas")
        icon.classList.add("fa-trash")
        icon.classList.add("text-danger")
        icon.classList.add("trashbin")
        mainc.append(icon)


        var totalamnt = document.querySelector(".totalcart")
        totalamnt.firstElementChild.firstElementChild.innerText = (parseFloat(totalamnt.firstElementChild.firstElementChild.innerText)+parseFloat(this.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerText)).toFixed(2)
        e.target.disabled = true
        e.target.previousElementSibling.disabled = true


        //delete from cart
        function deleteme(h){
            e.target.disabled = false
            e.target.previousElementSibling.disabled = false
            var totalamnt = document.querySelector(".totalcart")
            totalamnt.firstElementChild.firstElementChild.innerText = (parseFloat(totalamnt.firstElementChild.firstElementChild.innerText).toFixed(2) - (parseFloat(this.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild.innerText).toFixed(2)*parseInt(this.previousElementSibling.lastElementChild.value))).toFixed(2)

            this.parentElement.remove()

            var numb =  document.querySelector(".cartinc")
            if(parseInt(numb.innerText) !== 1 ){
                numb.innerText = parseInt(numb.innerText)-1
            }
            else{
                numb.innerText = parseInt(numb.innerText)-1
                numb.style.opacity = "0"
            }

        }
        mainc.lastElementChild.addEventListener("click",deleteme)
        valueofprd = parseFloat(valuecart.innerText)
        console.log(this.parentElement.parentElement.parentElement.firstElementChild.src)
        console.log(this.parentElement.parentElement.firstElementChild.innerText)
        console.log(parseFloat(this.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerText))


        //increment prod
        mainc.children[1].lastElementChild.addEventListener("click",function(e){
            var totalamnt = document.querySelector(".totalcart")
            var cartprod = document.querySelectorAll(".cartprod")
            totalamnt.firstElementChild.firstElementChild.innerText = 0
            
            totalm = 0;
            var numberincr = document.querySelectorAll(".numberincr")
            for (b = 0 ; b<numberincr.length; b++){
                totalm += parseInt(numberincr[b].value)*parseFloat(cartprod[b].children[1].firstElementChild.nextElementSibling.firstElementChild.innerText).toFixed(2)
            }
            console.log(totalm)
            totalamnt.firstElementChild.firstElementChild.innerText = totalm.toFixed(2)
        })

        //cart numbering
        var numb =  document.querySelector(".cartinc")
        numb.style.opacity = "1"
        numb.innerText = parseInt(numb.innerText)+1

    })
}


var popup = document.querySelector(".toppop")
var buydirct = document.querySelectorAll(".buybut")
var mainhide = document.querySelector(".mainex")
var navhide = document.querySelector(".navex")

function pop(e){
    popup.style.top = "60px"
    mainhide.style.pointerEvents = "none"
    navhide.style.pointerEvents = "none"
}
for(j = 0; j<buydirct.length; j++){
    buydirct[j].addEventListener("click",pop)
}

popup.firstElementChild.nextElementSibling.addEventListener("click",function(r){
    var popup = document.querySelector(".toppop")
    var mainhide = document.querySelector(".mainex")
    var navhide = document.querySelector(".navex")
    popup.style.top = "-130px"
    mainhide.style.pointerEvents = "all"
    navhide.style.pointerEvents = "all"
})
popup.lastElementChild.addEventListener("click",function(r){
    var popup = document.querySelector(".toppop")
    var mainhide = document.querySelector(".mainex")
    var navhide = document.querySelector(".navex")
    popup.style.top = "-130px"
    mainhide.style.pointerEvents = "all"
    navhide.style.pointerEvents = "all"
})

var buybutcart = document.querySelector(".buybutcart")

buybutcart.addEventListener("click",function(p){
    var identprod = document.querySelectorAll(".cartprod")
    if(identprod.length == 0){
        null
    }
    else{
        var toppop2 = document.querySelector(".toppop2")
        var mainhide = document.querySelector(".mainex")
        var navhide = document.querySelector(".navex")
        toppop2.style.top = "60px"
        mainhide.style.pointerEvents = "none"
        navhide.style.pointerEvents = "none"
    
        toppop2.firstElementChild.nextElementSibling.addEventListener("click",function(n){
            var allbuy = document.querySelectorAll(".buybut")
            var alladd = document.querySelectorAll(".addbut")
            p.target.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.innerText = 0
            var cartprod = document.querySelectorAll(".cartprod");
            for (n = 0; n<cartprod.length; n++){
                cartprod[n].remove()
            }
            for(b = 0; b<allbuy.length; b++){
                allbuy[b].disabled = false
                alladd[b].disabled = false
            }
    
            var toppop2 = document.querySelector(".toppop2")
            var mainhide = document.querySelector(".mainex")
            var navhide = document.querySelector(".navex")
            toppop2.style.top = "-130px"
            mainhide.style.pointerEvents = "all"
            navhide.style.pointerEvents = "all"

            var cartnum = document.querySelector(".cartinc")
            cartnum.innerText = 0
            cartnum.style.opacity = "0"
        })
    
        toppop2.lastElementChild.addEventListener("click",function(p){
            var toppop2 = document.querySelector(".toppop2")
            var mainhide = document.querySelector(".mainex")
            var navhide = document.querySelector(".navex")
            toppop2.style.top = "-130px"
            mainhide.style.pointerEvents = "all"
            navhide.style.pointerEvents = "all"
        })
    }
})


