class SearchUnderPanel {
    static toggle() {
        if (this.isVisible) {
            $("#search-under-panel").css("display", "none");
        } else {
            $("#search-under-panel").css("display", "flex");
        }

        this.isVisible = !this.isVisible;
    }

    static isVisible : Boolean = false;
}