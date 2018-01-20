function initPushpin() {
    $('.pushpin-docu-nav').pushpin('remove');
    $('.pushpin-docu-nav').each(function () {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
            top: $target.offset().top,
            bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
    });
}

Template.Documentation.onRendered(() => {
    initPushpin();
    $(window).resize(initPushpin);
    $('video').on('canplay', initPushpin);
});

Template.Documentation.onDestroyed(() => {
    $(window).off('resize');
    $('video').off('canplay');
});