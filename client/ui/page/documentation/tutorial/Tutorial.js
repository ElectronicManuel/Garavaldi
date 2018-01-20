Template.Tutorial.onRendered(() => {
    $('.media-player').each(function () {
        var $this = $(this);
        var $video = $this.find('.media-video').get(0);
        //$video.controls = false;
    });
});