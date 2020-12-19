jQuery(function($){

      $(document).ready(function() {

        $('pre code').each(function(i, block) {
          hljs.highlightBlock(block);
        });

        $("a[href^='#']").on('click', function (event) {
          if (this.hash !== "" && this.getAttribute("data-toggle") !== "collapse") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top - 100
            }, 600);
            return false;
          }
        });

      });

}); 