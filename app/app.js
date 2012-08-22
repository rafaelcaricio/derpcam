Ext.application({
    name: 'DerpCam',
    views: ['Image', 'LatestPhotos'],

    launch: function() {
        var latestPhotos = Ext.create('DerpCam.view.LatestPhotos');
        Ext.Viewport.add(latestPhotos);
    }
});
