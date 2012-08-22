
var THUMBOR_SERVER_URL = 'http://thumbor.caricio.com',
    MemeGlue = function(imageUrl) {
        this.url = imageUrl;
        this.finalUrl = new ThumborURL(THUMBOR_SERVER_URL, this.url);
    }, 
    MEME_FACES = [
        "http://i0.kym-cdn.com/entries/icons/original/000/002/252/me-gusta.jpg",
        "http://reparaciondepc.cl/blog/wp-content/uploads/2011/01/Lol-face-meme.jpg",
        "http://factspy.net/wp-content/uploads/2012/02/sweet-jesus-have-mercy.jpg"
    ],
    loadJSONP = function(url, callback) {
        var script = document.createElement('script');
        photoMetaData = function(response) {
            callback(response);
        };
        script.type = 'text/javascript';
        script.src = url;
        document.body.appendChild(script);
    };


MemeGlue.prototype = {
    giveMemes: function() {
        var thumborUrl = new ThumborURL(THUMBOR_SERVER_URL, this.url);
        loadJSONP(thumborUrl.withSmartCropping().metaDataOnly().unsafeURL(), this.parseResponse.bind(this));
    },
    parseResponse: function(response) {
        var faces = [], point;
        for (var i=0; i < response.thumbor.focal_points.length;i++) {
            point = response.thumbor.focal_points[i];
            if (point.origin == 'Face Detection') {
                faces.push(point);
                this.putMemeFace(point);
            }
        }
    },
    putMemeFace: function(point) {
        var meme = new ThumborURL(THUMBOR_SERVER_URL, this.randomMemeFaceUrl());
        meme.resize(point.width, point.height);
        this.finalUrl.filter(this.plotImage(meme.unsafeURL(), parseInt(point.x - (point.width / 2), 10), parseInt(point.y - (point.height / 2), 10)));
    },
    randomMemeFaceUrl: function() {
        return MEME_FACES[parseInt(Math.random() * 100, 10) % MEME_FACES.length];
    },
    plotImage: function(url, x, y) {
        return ['watermark(', url ,',', x ,',', y ,',0)'].join('');
    }
};
