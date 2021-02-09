var HamburgerMenu = /** @class */ (function () {
    function HamburgerMenu() {
    }
    HamburgerMenu.toggle = function () {
        if (this.isVisible) {
            $("#hamburger-menu").css("display", "none");
        }
        else {
            $("#hamburger-menu").css("display", "flex");
        }
        this.isVisible = !this.isVisible;
    };
    HamburgerMenu.isVisible = false;
    return HamburgerMenu;
}());
//# sourceMappingURL=hamburger-menu.js.map