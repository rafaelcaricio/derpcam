Ext.define('DerpCam.view.LatestPhotos', {
    extend: 'Ext.Container',
    config: {
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: 'DerpPhotos',
            items: [{
                    xtype: 'spacer'
                },{
                    xtype: 'button',
                    text: 'New',
                    ui: 'action',
                    id: 'new-photo-btn'
                }
            ]
        },{
            xtype: 'tabpanel',
            tabBarPosition: 'bottom',
            items: [{
                title: 'Home',
                iconCls: 'home',
                html: 'Home Screen'
            }]
        }]
    }
});
