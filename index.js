var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }

};

if (isMobile.Android()) {
    document.location.href = "https://play.google.com/store/apps/details?id=com.BeeLovers.HalfTap";
}
else if (isMobile.iOS())
{
    document.location.href="https://apps.apple.com/us/app/half-tap-aim-the-other-half/id1502793922?ls=1";
}