/*! y-validate - v1.0 - 05/02/2026
* By Yuval Ashkenazi
* https://github.com/yuvalAshkenaz/y-select */

document.addEventListener('DOMContentLoaded', () => {
    const selects = document.querySelectorAll('select.y-select');

    selects.forEach(select => {
        const wrapper = select.parentElement;
        const display = document.createElement('div');
        const list = document.createElement('div');
        let highlightedIndex = select.selectedIndex;

        display.className = 'y-select-display';
        display.tabIndex = 0;
        display.setAttribute('role', 'combobox');
        display.setAttribute('aria-expanded', 'false');
        display.setAttribute('aria-haspopup', 'listbox');
        display.textContent = select.options[select.selectedIndex].text;
        
        list.className = 'y-select-list';
        list.setAttribute('role', 'listbox');

        Array.from(select.options).forEach((option, index) => {
            const item = document.createElement('div');
            item.className = 'y-select-item';
            item.setAttribute('role', 'option');
            item.setAttribute('aria-selected', index === select.selectedIndex ? 'true' : 'false');
            item.textContent = option.text;

            item.addEventListener('click', () => {
                confirmSelection(index);
            });
            list.appendChild(item);
        });

        function confirmSelection(index) {
            select.selectedIndex = index;
            display.textContent = select.options[index].text;
            const items = list.querySelectorAll('.y-select-item');
            items.forEach((it, i) => {
                it.setAttribute('aria-selected', i === index);
                it.classList.remove('is-highlighted');
            });
            closeDropdown();
            select.dispatchEvent(new Event('change', { bubbles: true }));
            display.focus();
        }

        function highlightItem(index) {
            const items = list.querySelectorAll('.y-select-item');
            items.forEach((it, i) => {
                it.classList.toggle('is-highlighted', i === index);
            });
            highlightedIndex = index;
            // גלילה אוטומטית אם הרשימה ארוכה
            items[index].scrollIntoView({ block: 'nearest' });
        }

        function toggleDropdown() {
            wrapper.classList.contains('is-open') ? closeDropdown() : openDropdown();
        }

        function openDropdown() {
            closeAllSelects();
            wrapper.classList.add('is-open');
            display.setAttribute('aria-expanded', 'true');
            highlightItem(select.selectedIndex);
        }

        function closeDropdown() {
            wrapper.classList.remove('is-open');
            display.setAttribute('aria-expanded', 'false');
        }

        display.addEventListener('keydown', (e) => {
            const items = list.querySelectorAll('.y-select-item');
            
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (wrapper.classList.contains('is-open')) {
                    confirmSelection(highlightedIndex);
                } else {
                    openDropdown();
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (!wrapper.classList.contains('is-open')) {
                    openDropdown();
                } else {
                    const next = Math.min(highlightedIndex + 1, items.length - 1);
                    highlightItem(next);
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (wrapper.classList.contains('is-open')) {
                    const prev = Math.max(highlightedIndex - 1, 0);
                    highlightItem(prev);
                }
            } else if (e.key === 'Escape') {
                closeDropdown();
            } else if (e.key === 'Tab' && wrapper.classList.contains('is-open')) {
                closeDropdown();
            }
        });

        select.style.display = 'none';
        display.addEventListener('click', toggleDropdown);
        wrapper.appendChild(display);
        wrapper.appendChild(list);
    });

    function closeAllSelects() {
        document.querySelectorAll('.y-select-wrap.is-open').forEach(el => {
            el.classList.remove('is-open');
            el.querySelector('.y-select-display').setAttribute('aria-expanded', 'false');
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.y-select-wrap')) closeAllSelects();
    });
});