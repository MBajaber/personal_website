$(document).ready(function(){

    $("body").css("marginTop",$("nav").innerHeight())


//  Start Menu bar

    $(".fa-bars").on("click",function(){
    
        $(".nav-ul").toggleClass("show")
    });

//  End Menu bar



//  Start Setting

    $(".setting").each(function(){
        
        $(this).css("left","-" + $(this).css("width"));
        
        $(".setting-icon").on("click",function(){
        
            $(this).toggleClass("move");
            
            if($(this).hasClass("move")){
            
            $(this).parent().parent(".setting").animate({
            
            left:"0"
            
            },450)
            
            } else {
            
            $(this).parent().parent(".setting").animate({
            
            left: "-" + $(this).parent().parent(".setting").css("width")
            
            },450)
            }
        });
    });

    $(".choose-color-ul li").each(function(){
    
        $(this).on("click",function(){
        
            $("body").attr("data-color-default",$(this).data("color"));
        
        });
    });
    
    $(".setting, .setting-icon").on("click",function(e){
        
        e.stopPropagation()
    });
    
    
    $("body:not('.setting,.setting-icon')").on("click",function(){
            
            $(".setting").animate({
                left: "-275"
            });
    });

//  End Setting


//  Start Nav

    $("nav ul li a").on("click",function(e){
       e.preventDefault();
       $(this).addClass("active").parent().siblings().find("a").removeClass("active")
    
        $("html, body").animate({
           
            scrollTop: $("#" + $(this).data("scroll")).offset().top - $("nav").innerHeight()
           
           },500)
           

            console.log($(this).attr("id")) 

    
    });
    
    $(".btn").on("click",function(){
        
    });
    
    $(".btn").each(function(){
    
    $(this).hover(function(){
    
        $(this).find("span").eq(0).animate({
            width:"100%"
        },450)
    
    },function(){
        
        $(this).find("span").eq(0).animate({
            width:"0%"
        },450)
    })
    
})    

    $(".fa-angle-double-down").on("click",function(e){
        
        e.preventDefault();
        
        $("html, body").animate({
            
            scrollTop: $("#about").offset().top
        });
    });

//  End Nav

//  Start Add active on Scroll

    $(window).on("scroll",function(){
    
    $(".block").each(function(){
        
        var blockId = $(this).attr("id");
       
       if($(window).scrollTop() >= $(this).offset().top - $("nav").innerHeight())
       {   
            $(".nav-ul li a").removeClass("active");
            
            $(".nav-ul li a[data-scroll=" + blockId + "]")
            .addClass("active").siblings().removeClass("active")           
       }
    });
    
//    Start Show Scroll Top

        if($(window).scrollTop() >= 1500){
        
            $(".scroll-top").fadeIn();
            
        }else{
        
            $(".scroll-top").fadeOut();
        }

//    End Show Scroll Top

});


//    Start Click on Scroll Top

    $(".scroll-top").on("click",function(){
    
        $("body, html").animate({
        
            scrollTop: 0
        
        },800)
    
    });

//    End Click on Scroll Top


//  End Add active on Scroll


//  Start Typer

var typed = new Typed('.typer', {
      strings: ["Developer", "FrontEnd","Photographer","Freelancer"],
      loop: true,
      typeSpeed: 50,
      backSpeed:50,
});

//  End Typer

//  Start Services

    $(".quality-services-divs > div").hover(function(){
    
        $(this).find("span").animate({
        
            width:"100%"
        },400)
        
    },function(){
    
        $(this).find("span").animate({
        
            width:"0%"
        },400)
    });


    $(".quality-services-divs .inner p").each(function(){
    
        var servicesInnerText = $(this).text()
    
        if($(this).text().length >= 68){
            
            var servicesInnerTextSlice = $(this).text().slice(0,68)
            
            $(this).text(servicesInnerTextSlice + "...")
        }
    });
    

    
    
//  End Services


//  Start Portofolio


    $(".gellary-ul li a").each(function(){
    
        $(this).on("click",function(e){
            
            e.preventDefault();
        
        $(this).addClass("active").parent().siblings().find("a")
        .removeClass("active")

            $(".gellary-img > div").fadeOut(0);
            
            $("." + $(this).data("gellary")).fadeIn(1000)
            
        });
    });



    $(".gellary-items").each(function(){

        $(this).hover(function(){
        
            $(this).find(".bg-full").delay(300).fadeIn("fast");
            $(this).find(".text-gellary").delay(300).fadeIn();
            
            $(this).find(".text-gellary h2, h3")
            .delay(400).animate({top:"0%"},300);
            
        }, function(){
        
            $(this).find(".bg-full").delay(300).fadeOut("fast");
            $(this).find(".text-gellary").fadeOut(10);
            $(this).find(".text-gellary h2")
            .css("top","-15%");
            
            $(this).find(".text-gellary h3")
            .css("top","15%");

        });
        

    });

    
    $(".gellary-items").on("click",function(){
        
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".popup").css("height",$("body").css("height"))
    
    $(".popup").on("click",function(){
        $(this).fadeOut()
    });
    
    $(".popup .popup-card").on("click",function(e){
        e.stopPropagation()
    });
    
        $(".gellary-items").on("click",function(){
        
            $(".popup").fadeIn(600)
        
            $(".popup-card-img img")
            .attr("src",$(".gellary-items.active").find("img").attr("src"));
                        
            
            if($(".gellary-items:eq(1), .gellary-items:eq(3)").hasClass("active")){
            
                $(".icon-play").fadeIn("fast");
            }else{
                $(".icon-play").fadeOut("fast");
            }
            
    });
    
    
$(".fa-chevron-circle-right").on("click",function(){

    if(! $(".gellary-items.active").is(":last-child")){

    $(".gellary-items.active").next().click()
    .addClass("active").siblings().removeClass("active")
    
    } else {
    
    $(".gellary-items").eq(0).click()
    .addClass("active").siblings().removeClass("active")
    
    }

    });
    
    $(".fa-chevron-circle-left").on("click",function(){

    if(! $(".gellary-items.active").is(":first-child")){

    $(".gellary-items.active").prev().click()
    .addClass("active").siblings().removeClass("active")
    
    } else {
    
    $(".gellary-items:last").click()
    .addClass("active").siblings().removeClass("active")
    
    }

    });
    
    
    $(window).on("keydown",function(e){
    
    var escBtn = e.keyCode || e.which;
    
        if(escBtn === 27){
            
            $(".popup").fadeOut()
        };
    
    });

//  End Portofolio


//  Start EXPERIENCE

    $(".experience-card .info-experience-card").each(function(){
        
        var teamCardText = $(this).text()

            if($(this).text().length >= 74){

                var teamCardTextSlice = $(this).text().slice(0,74)
                                
                $(this).text(teamCardTextSlice + "...")
            }

        });
        
        $(".experience .experience-card, .news .news-card").hover(function(){
        
            $(this).find(".left-bar, .right-bar").animate({
            
                width: "50%"
                
            },300)
        
        },function(){
        
            $(this).find(".left-bar, .right-bar").animate({
            
                width: "0%"
                
            },300)
        
        });

//  End EXPERIENCE


//  Start Team

    $(".member").each(function(){

        $(this).hover(function(){
        
            $(this).find(".bg-full").delay(200).fadeIn("fast");
            $(this).find(".text-gellary").delay(200).fadeIn();
            
            $(this).find(".text-gellary h2, h3")
            .delay(400).animate({top:"0%"},300);
            
        }, function(){
        
            $(this).find(".bg-full").delay(100).fadeOut("fast");
            $(this).find(".text-gellary").fadeOut(10);
            $(this).find(".text-gellary h2")
            .css("top","-15%");
            
            $(this).find(".text-gellary h3")
            .css("top","15%");

        });

    });
    
    $(".client .definition p").each(function(){
        
        var clientCardText = $(this).text()

            if($(this).text().length >= 96){

                var clientCardTextSlice = $(this).text().slice(0,96)
                                
                $(this).text(clientCardTextSlice + "...")
            }
    
//            console.log($(this).text().length)

        });

//  End Team


//  Start Contact-Us

    $(".contact-us input, .contact-us textarea").on("click",function(){
    
        $(this).css("border-bottom","1px solid #000")
    
    });
    
    $(".contact-us input, .contact-us textarea").on("blur",function(){
    
        $(this).css("border-bottom","1px solid #777")
    
    });

//  End Contact-Us


});