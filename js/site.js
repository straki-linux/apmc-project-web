/* APMC Éducation Canine – scripts du site (sans dépendance) */
(function () {
    'use strict';

    document.documentElement.classList.add('js');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.addEventListener('DOMContentLoaded', function () {
        var header = document.querySelector('[data-header]');
        var toggle = document.querySelector('[data-nav-toggle]');
        var nav = document.querySelector('[data-nav]');

        // En-tête opaque après défilement
        function onScroll() {
            header.classList.toggle('is-scrolled', window.scrollY > 30);
        }
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        // Menu mobile
        function setMenu(open) {
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            nav.classList.toggle('is-open', open);
            header.classList.toggle('is-open', open);
        }
        toggle.addEventListener('click', function () {
            setMenu(toggle.getAttribute('aria-expanded') !== 'true');
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && nav.classList.contains('is-open')) {
                setMenu(false);
                toggle.focus();
            }
        });

        // Diaporama du héro (fondu entre les photos)
        var slides = document.querySelectorAll('.hero-img');
        if (slides.length > 1 && !reduceMotion) {
            var current = 0;
            setInterval(function () {
                slides[current].classList.remove('is-active');
                current = (current + 1) % slides.length;
                slides[current].classList.add('is-active');
            }, 6500);
        }

        // Compteurs animés + apparition au défilement
        function animateCount(el) {
            var target = parseInt(el.getAttribute('data-count'), 10);
            var start = null;
            var duration = 1600;
            function step(ts) {
                if (!start) start = ts;
                var p = Math.min((ts - start) / duration, 1);
                var eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(target * eased);
                if (p < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
        }

        var counters = document.querySelectorAll('[data-count]');
        var reveals = document.querySelectorAll('.reveal');

        if ('IntersectionObserver' in window) {
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    var el = entry.target;
                    if (el.hasAttribute('data-count')) {
                        if (!reduceMotion) animateCount(el);
                    } else {
                        el.classList.add('is-visible');
                    }
                    io.unobserve(el);
                });
            }, { threshold: 0.2 });
            counters.forEach(function (el) { io.observe(el); });
            reveals.forEach(function (el) { io.observe(el); });
        } else {
            reveals.forEach(function (el) { el.classList.add('is-visible'); });
        }

        // Bandeaux qui défilent (photos de chiens, partenaires) :
        // la liste est dupliquée pour une boucle continue
        document.querySelectorAll('[data-marquee]').forEach(function (track) {
            if (reduceMotion) return;
            var copy = track.firstElementChild.cloneNode(true);
            copy.setAttribute('aria-hidden', 'true');
            copy.querySelectorAll('img').forEach(function (img) { img.alt = ''; });
            copy.querySelectorAll('a').forEach(function (a) { a.setAttribute('tabindex', '-1'); });
            track.appendChild(copy);
            track.classList.add('is-animated');
        });

        // Visionneuse de la galerie
        var box = document.querySelector('[data-lightbox]');
        var allLinks = Array.prototype.slice.call(document.querySelectorAll('[data-gallery] a'));
        // Les copies du bandeau défilant ouvrent la même photo que l'original
        var links = allLinks.filter(function (a) { return !a.closest('[aria-hidden="true"]'); });
        if (box && typeof box.showModal === 'function' && links.length) {
            var img = box.querySelector('[data-lightbox-img]');
            var index = 0;
            function show(i) {
                index = (i + links.length) % links.length;
                img.src = links[index].getAttribute('href');
                img.alt = links[index].querySelector('img').alt;
            }
            var hrefs = links.map(function (a) { return a.getAttribute('href'); });
            allLinks.forEach(function (link) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    show(hrefs.indexOf(link.getAttribute('href')));
                    box.showModal();
                });
            });
            box.querySelector('[data-lightbox-close]').addEventListener('click', function () { box.close(); });
            box.querySelector('[data-lightbox-prev]').addEventListener('click', function () { show(index - 1); });
            box.querySelector('[data-lightbox-next]').addEventListener('click', function () { show(index + 1); });
            box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
            box.addEventListener('keydown', function (e) {
                if (e.key === 'ArrowLeft') show(index - 1);
                if (e.key === 'ArrowRight') show(index + 1);
            });
            box.addEventListener('close', function () { links[index].focus(); });
        }

        // Transitions de page de secours (navigateurs sans View Transitions entre
        // pages) : le contenu s'efface avant de suivre un lien interne
        var root = document.documentElement;
        if (root.classList.contains('no-vt') && !reduceMotion) {
            document.addEventListener('click', function (e) {
                var a = e.target.closest('a[href]');
                if (!a || e.defaultPrevented || e.button !== 0 ||
                    e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                if ((a.target && a.target !== '_self') || a.hasAttribute('download')) return;
                var url = new URL(a.href, location.href);
                if (url.origin !== location.origin || !/(\.html?|\/)$/.test(url.pathname)) return;
                if (url.pathname === location.pathname && url.hash) return;
                e.preventDefault();
                root.classList.add('is-leaving');
                setTimeout(function () { location.href = a.href; }, 220);
            });
            // Retour arrière depuis le cache du navigateur : réafficher la page
            window.addEventListener('pageshow', function (e) {
                if (e.persisted) root.classList.remove('is-leaving');
            });
        }

        // Année du copyright
        document.querySelectorAll('[data-year]').forEach(function (el) {
            el.textContent = new Date().getFullYear();
        });
    });
})();
