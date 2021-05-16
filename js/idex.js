console.log("blah!")

;


        $('.hoverimage').hover(function () { // mouse-in 
            console.log($(this)[0].clientWidth)
            console.log($(this))
            $(this).css("width", `${$(this)[0].clientWidth+10}px`);
        }
            // $(this).html('Hovered!');} 
            ,
            function () { // mouse-out
                $(this).css("width", `${$(this)[0].clientWidth-10}px`);   
            }
        )
   