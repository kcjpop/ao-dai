var slide01 = {
    el: $('#slide01'),
    hide: function() {
        this.el.addClass('hide');
    },

    run: function() {
        var map = new GMaps({
            div: '#slide01',
            lat: 65.0126143,
            lng: 25.4714526,
            zoom: 5,
            disableDefaultUI: true
        });

        var marker = map.addMarker({
            lat: 65.0126143,
            lng: 25.4714526,
            title: 'Oulu',
            animation: google.maps.Animation.BOUNCE
        });

        var ouluOverlay = map.drawOverlay({
            lat: 65.0126143,
            lng: 25.4714526,
            content: '<div class="oulu-overlay animated slideInDown">We are here, in Oulu, Finland</div>',
            horizontalAlign: 'center',
            verticalAlign: 'bottom'
        });

        setTimeout(function() {
            $('div.oulu-overlay').removeClass('slideInDown swing').addClass('swing');
        }, 2000);

        setTimeout(function() {
            var hcmc = new google.maps.LatLng(15.206343, 107.672707);
            
            // Remove it
            ouluOverlay.setMap(null);

            marker.setPosition(hcmc);
            marker.setAnimation(google.maps.Animation.DROP);

            setTimeout(function() {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }, 500);

            var vietnamOverlay = map.drawOverlay({
                lat: 15.206343,
                lng: 108.672707,
                content: '<div class="hcmc-overlay animated tada">and this is Vietnam.</div>',
                horizontalAlign: 'center',
                verticalAlign: 'bottom'
            });

            map.panTo(hcmc);
        }, 5000);
    }
};


var slide02 = {
    el: $('#slide02'),
    hide: function() {
        this.el.addClass('hide');
    },
    run: function() {
        var _this = this;
        this.el.removeClass('hide').addClass('animated slideInRight');

        setTimeout(function() {
            _this.el.children('h1').fadeOut(function() {
                $('#col-food').removeClass('hide').addClass('animated bounceIn');
            });

            setTimeout(function() {
                var _col = $('#col-landscape');
                _col.removeClass('hide').addClass('animated bounceIn');
                _col.find('img').addClass('animated swing');
            }, 2000);

            setTimeout(function() {
                var _col = $('#col-people');
                _col.removeClass('hide').addClass('animated tada');
            }, 3000);
        }, 2000);
    }
};

var slide03 = {
    el: $('#slide03'),
    hide: function() {
        this.el.addClass('hide');
    },
    run: function() {
        var _this = this;
        this.el.removeClass('hide').addClass('animated pulse');

        setTimeout(function() {
            _this.el.find('h1:eq(1)').removeClass('hide').addClass('animated fadeInRight');
        }, 2000);

        setTimeout(function() {
            _this.el.find('h1:eq(2)').removeClass('hide').addClass('animated fadeInRight');
        }, 4000);
    }
};

var slide04 = {
    el: $('#slide04'),
    hide: function() {
        this.el.addClass('hide');
    },
    run: function() {
        var _this = this;
        this.el.removeClass('hide').addClass('animated pulse');
        setTimeout(function() {
            _this.el.find('img:eq(0)').addClass('animated slideInDown').removeClass('hide');
        }, 1000);
        setTimeout(function() {
            _this.el.find('img:eq(1)').addClass('animated slideInDown').removeClass('hide');
        }, 2000);
        setTimeout(function() {
            _this.el.find('img:eq(2)').addClass('animated slideInDown').removeClass('hide');
        }, 3000);
    }
};


$(function() {
    slide01.run();

    setTimeout(function() {
        slide01.hide();
        slide02.run();
    }, 8000);

    setTimeout(function() {
        slide02.hide();
        slide03.run();
    }, 15000);
    
    setTimeout(function() {
        slide03.hide();
        slide04.run();
    }, 20000);
});