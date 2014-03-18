<!DOCTYPE html>
<html>
<head>

    <style>

.hidden {
    display: none;
}

</style>
    <title>Plugin Example</title>
</head>
<body>
    <div class="slideMe">
        <img src="http://nick.mtvnimages.com/nick-assets/promos/featured-home/spongebob/spongebob-big-advntr-shadowbox.jpg" class="active"/>
        <img src="http://nick.mtvnimages.com/nick-assets/promos/featured-home/monkey-quest/mq-shadowbox-7-1-2011.jpg" class="hidden" />
        <img src="http://nick.mtvnimages.com/nick-assets/promos/featured-home/sponsors/summer-sale-itunes-shadowbox.jpg" class="hidden" />
    </div>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
    <script>
    //<![CDATA[
    ;(function($, document, undefined){
        $.fn.slideshow = function() {
            this.each(function(index, element) {
                var element = $(element),
                    firstChild = element.children(':first');
                    
                (function swap() {
                    var active = element.find('.active'),
                        stepSpeed = 1000,
                        next = (function() { 
                            var tempNext = active.next();
                            return tempNext.length > 0 ? tempNext : firstChild;
                        })();
                    
                    active.animate({'opacity': '0.0'}, stepSpeed, function() {
                        active.removeClass('active').addClass('hidden');
                        next.removeClass('hidden').addClass('active').animate({'opacity': 1})
                        
                        setTimeout(swap, stepSpeed);
                        
                    });
                })();
                
            });
        }
    })(jQuery, document);
    
    $('.slideMe').slideshow();
    //]]>
    </script>
</body>

</html>
