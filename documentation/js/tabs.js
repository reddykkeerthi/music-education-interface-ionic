/**
 * This file is part of the Music Education Interface project.
 * Copyright (C) 2025 Alberto Acquilino
 *
 * Licensed under the GNU Affero General Public License v3.0.
 * See the LICENSE file for more details.
 */

document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.getElementsByClassName('nav-tabs'),
        updateAddress = function(e) {
            if(history.pushState && e.target.dataset.link) {
                history.pushState(null, null, '#' + e.target.dataset.link);
            }
        };
    if (tabs.length > 0) {
        tabs = tabs[0].querySelectorAll('li');
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', updateAddress);
            var linkTag = tabs[i].querySelector('a');
            if (location.hash !== '') {
                var currentHash = location.hash.substr(1);
                if (currentHash === linkTag.dataset.link) {
                    linkTag.click();
                }
            }
        }
    }
});
