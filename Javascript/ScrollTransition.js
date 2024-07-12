function scrollTransition() {
    $(document).ready(function() {
        // Attach the event listener to a static parent, and delegate to 'li a'
        $('#navigation').on('click', 'li a', function(e) {
            e.preventDefault(); // Prevent the default anchor link behavior

            // Stop any currently running animations on html, body
            // and proceed with the new animation
            $('html, body').stop(true, true).animate({
                scrollTop: $(this.hash).offset().top
            }, 500); // Adjust the duration as needed

            // Remove 'clicked' class from all links and add to the current one
            $('#navigation li a').removeClass('clicked');
            $(this).addClass('clicked');

            // Optional: Remove 'clicked' class after some time
            setTimeout(() => {
                $(this).removeClass('clicked');
            }, 500); // Adjust time as needed
        });
    });
}

export { scrollTransition };