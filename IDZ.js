(() => {

    const hide = selector =>
        document.querySelectorAll(selector)
            .forEach(el =>
                el.style.setProperty('display', 'none', 'important')
            );

    hide('#left-sidebar, #sidebar, header, .topbar, .js-consent-banner, .bottom-notice, #footer, .site-footer');

    hide('.js-zone-container, .everyonelovesstackoverflow, .ad-container, .s-ads');

    const main =
        document.querySelector('#mainbar') ||
        document.querySelector('main');

    if (main) {
        main.style.setProperty('max-width', '1100px', 'important');
        main.style.setProperty('width', '100%', 'important');
        main.style.margin = '0 auto';
    }

    const acceptedAnswer =
        document.querySelector('.answer.accepted-answer, .accepted-answer');

    if (acceptedAnswer) {
        acceptedAnswer.style.setProperty('border', '4px solid green', 'important');
        acceptedAnswer.style.setProperty('background', 'rgba(0,255,0,0.08)', 'important');

        acceptedAnswer.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        alert('Прийнята відповідь підсвічена');
    } else {
        alert('ℹПрийнятої відповіді немає');
    }

})();
