(function() {
    var pagecache = {};
    var pageload = function() {
        var w = 1100, h = 700;
        // if ($('.process').length) {
        //     w = h = 00;
        // } else {
        //     w = h = 1100;
        // }
        // console.log(w);
        $('#slides').slidesjs({
            width: w,
            height: h
        });
    };

    $(window).bind('statechange', function() {
        var $content = $('.content'),
            State = History.getState(),
            href = State.url;

        $content.animate({'opacity': 0}, function() {
            // if (typeof pagecache[State.hash] != 'undefined') {
            //     $('.content').empty().append(pagecache[State.hash]);
            // } else {
                $content.load(href + " .content >*", function(responseText) {
                    pagecache[href] = responseText;
                    History.pushState(null, null, href);
                    $content.animate({'opacity': 1});
                    pageload();
                });
            // }
        });
    });

    $('.navbar a').click(function(event) {
        var $this = $(this),
            href = $this.attr('href');
        if (event.which == 2 || event.metaKey) { return true; }
        History.pushState(null, null, href);
        $('.navbar a').removeClass('active');
        $this.addClass('active');
        return false;
    });


   window.setTimeout(pageload, 5000);

})();
