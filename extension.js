const WorkspaceSwitcherPopup = imports.ui.workspaceSwitcherPopup.WorkspaceSwitcherPopup;

let oldWorkspaceSwitcherPopup_show;

function init() {
    oldWorkspaceSwitcherPopup_show = WorkspaceSwitcherPopup.prototype['_show'];
}

function enable() {
    WorkspaceSwitcherPopup.prototype['_show'] = function() {}
}

function disable() {
    WorkspaceSwitcherPopup.prototype['_show'] = oldWorkspaceSwitcherPopup_show;
}

// Backwards compatability with 3.0.2
function main() {
    enable();
}
