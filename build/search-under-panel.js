var SearchUnderPanel = /** @class */ (function () {
    function SearchUnderPanel() {
    }
    SearchUnderPanel.toggle = function () {
        if (this.isVisible) {
            $("#search-under-panel").css("display", "none");
        }
        else {
            $("#search-under-panel").css("display", "flex");
        }
        this.isVisible = !this.isVisible;
    };
    SearchUnderPanel.isVisible = false;
    return SearchUnderPanel;
}());
//# sourceMappingURL=search-under-panel.js.map