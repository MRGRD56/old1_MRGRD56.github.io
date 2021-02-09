class HamburgerMenu {
    static toggle() {
        if (this.isVisible) {
            $("#hamburger-menu").css("display", "none");
        } else {
            $("#hamburger-menu").css("display", "flex");
        }

        this.isVisible = !this.isVisible;
    }

    static isVisible = false;
}