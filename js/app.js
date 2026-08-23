/* ============================================
   CALCULUS FOUNDATIONS — APP
   ============================================ */

(function() {
    'use strict';

    const CONFIG = {
        notesKey: 'calculus_notes',
        storagePrefix: 'calc_notes_'
    };

    const CHAPTERS = [{'id': 'introduction-to-limits', 'num': '01', 'title': 'Introduction to Limits', 'file': 'chapters/chapter-01.html', 'sections': ['2.1'], 'review': 'review-1'},
    {'id': 'definition-of-limits', 'num': '02', 'title': 'Definition of Limits', 'file': 'chapters/chapter-02.html', 'sections': ['2.2'], 'review': 'review-1'},
    {'id': 'techniques-for-computing-limits', 'num': '03', 'title': 'Techniques for Computing Limits', 'file': 'chapters/chapter-03.html', 'sections': ['2.3'], 'review': 'review-1'},
    {'id': 'one-sided-limits', 'num': '04', 'title': 'One-Sided Limits', 'file': 'chapters/chapter-04.html', 'sections': ['one-sided'], 'review': 'review-2'},
    {'id': 'infinite-limits', 'num': '05', 'title': 'Infinite Limits', 'file': 'chapters/chapter-05.html', 'sections': ['2.4'], 'review': 'review-2'},
    {'id': 'limits-at-infinity', 'num': '06', 'title': 'Limits at Infinity', 'file': 'chapters/chapter-06.html', 'sections': ['2.5'], 'review': 'review-2'},
    {'id': 'continuity-and-the-intermediate-value-theorem', 'num': '07', 'title': 'Continuity and the Intermediate Value Theorem', 'file': 'chapters/chapter-07.html', 'sections': ['2.6'], 'review': 'review-2'},
    {'id': 'introducing-the-derivative', 'num': '08', 'title': 'Introducing the Derivative', 'file': 'chapters/chapter-08.html', 'sections': ['3.1'], 'review': 'review-3'},
    {'id': 'working-with-derivatives', 'num': '09', 'title': 'Working with Derivatives', 'file': 'chapters/chapter-09.html', 'sections': ['3.2'], 'review': 'review-3'},
    {'id': 'rules-of-differentiation', 'num': '10', 'title': 'Rules of Differentiation', 'file': 'chapters/chapter-10.html', 'sections': ['3.3'], 'review': 'review-3'},
    {'id': 'product-and-quotient-rules', 'num': '11', 'title': 'Product and Quotient Rules', 'file': 'chapters/chapter-11.html', 'sections': ['3.4'], 'review': 'review-3'},
    {'id': 'derivatives-of-trigonometric-functions', 'num': '12', 'title': 'Derivatives of Trigonometric Functions', 'file': 'chapters/chapter-12.html', 'sections': ['3.5'], 'review': 'review-4'},
    {'id': 'derivatives-as-rates-of-change', 'num': '13', 'title': 'Derivatives as Rates of Change', 'file': 'chapters/chapter-13.html', 'sections': ['3.6'], 'review': 'review-4'},
    {'id': 'the-chain-rule', 'num': '14', 'title': 'The Chain Rule', 'file': 'chapters/chapter-14.html', 'sections': ['3.7'], 'review': 'review-4'},
    {'id': 'implicit-differentiation', 'num': '15', 'title': 'Implicit Differentiation', 'file': 'chapters/chapter-15.html', 'sections': ['3.8'], 'review': 'review-4'},
    {'id': 'derivatives-of-logarithmic-and-exponential-functions', 'num': '16', 'title': 'Derivatives of Logarithmic and Exponential Functions', 'file': 'chapters/chapter-16.html', 'sections': ['3.9'], 'review': 'review-5'},
    {'id': 'derivatives-of-inverse-trigonometric-functions', 'num': '17', 'title': 'Derivatives of Inverse Trigonometric Functions', 'file': 'chapters/chapter-17.html', 'sections': ['3.10'], 'review': 'review-5'},
    {'id': 'higher-order-derivatives', 'num': '18', 'title': 'Higher-Order Derivatives', 'file': 'chapters/chapter-18.html', 'sections': ['higher-order'], 'review': 'review-5'},
    {'id': 'related-rates', 'num': '19', 'title': 'Related Rates', 'file': 'chapters/chapter-19.html', 'sections': ['3.11'], 'review': 'review-6'},
    {'id': 'maxima-and-minima', 'num': '20', 'title': 'Maxima and Minima', 'file': 'chapters/chapter-20.html', 'sections': ['4.1'], 'review': 'review-6'},
    {'id': 'what-derivatives-tell-us', 'num': '21', 'title': 'What Derivatives Tell Us', 'file': 'chapters/chapter-21.html', 'sections': ['4.2'], 'review': 'review-6'},
    {'id': 'graphing-functions', 'num': '22', 'title': 'Graphing Functions', 'file': 'chapters/chapter-22.html', 'sections': ['4.3'], 'review': 'review-6'},
    {'id': 'optimization-problems', 'num': '23', 'title': 'Optimization Problems', 'file': 'chapters/chapter-23.html', 'sections': ['4.4'], 'review': 'review-7'},
    {'id': 'linear-approximation-and-differentials', 'num': '24', 'title': 'Linear Approximation and Differentials', 'file': 'chapters/chapter-24.html', 'sections': ['4.5'], 'review': 'review-7'},
    {'id': 'mean-value-theorem', 'num': '25', 'title': 'Mean Value Theorem', 'file': 'chapters/chapter-25.html', 'sections': ['4.6'], 'review': 'review-7'},
    {'id': 'lhopitals-rule', 'num': '26', 'title': 'L'Hopital's Rule', 'file': 'chapters/chapter-26.html', 'sections': ['4.7'], 'review': 'review-7'},
    {'id': 'antiderivatives', 'num': '27', 'title': 'Antiderivatives', 'file': 'chapters/chapter-27.html', 'sections': ['4.9'], 'review': 'review-8'},
    {'id': 'approximating-areas-under-curves', 'num': '28', 'title': 'Approximating Areas Under Curves', 'file': 'chapters/chapter-28.html', 'sections': ['5.1'], 'review': 'review-8'},
    {'id': 'definite-integrals', 'num': '29', 'title': 'Definite Integrals', 'file': 'chapters/chapter-29.html', 'sections': ['5.2'], 'review': 'review-8'},
    {'id': 'fundamental-theorem-of-calculus', 'num': '30', 'title': 'Fundamental Theorem of Calculus', 'file': 'chapters/chapter-30.html', 'sections': ['5.3'], 'review': 'review-8'},
    {'id': 'working-with-integrals', 'num': '31', 'title': 'Working with Integrals', 'file': 'chapters/chapter-31.html', 'sections': ['5.4'], 'review': 'review-9'},
    {'id': 'substitution-rule', 'num': '32', 'title': 'Substitution Rule', 'file': 'chapters/chapter-32.html', 'sections': ['5.5'], 'review': 'review-9'},
    {'id': 'area-between-curves', 'num': '33', 'title': 'Area Between Curves', 'file': 'chapters/chapter-33.html', 'sections': ['area-between'], 'review': 'review-9'},
    {'id': 'volumes-of-revolution-disks-and-washers', 'num': '34', 'title': 'Volumes of Revolution: Disks and Washers', 'file': 'chapters/chapter-34.html', 'sections': ['volumes-disks'], 'review': 'review-9'},
    {'id': 'volumes-using-cylindrical-shells', 'num': '35', 'title': 'Volumes Using Cylindrical Shells', 'file': 'chapters/chapter-35.html', 'sections': ['volumes-shells'], 'review': 'review-9'}];

    function initMathJax() {
        if (typeof window.MathJax === 'undefined') return;
        if (window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise().catch(err => console.warn('MathJax error:', err));
        }
    }

    function refreshMathJax() {
        if (typeof window.MathJax === 'undefined') return;
        if (window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise().catch(err => console.warn('MathJax refresh error:', err));
        }
    }

    const NoteEngine = {
        getAllNotes() {
            try {
                const data = localStorage.getItem(CONFIG.notesKey);
                return data ? JSON.parse(data) : {};
            } catch (e) {
                return {};
            }
        },
        saveAllNotes(notes) {
            try {
                localStorage.setItem(CONFIG.notesKey, JSON.stringify(notes));
                return true;
            } catch (e) {
                return false;
            }
        },
        getChapterNotes(chapterId) {
            const notes = this.getAllNotes();
            return notes[chapterId] || '';
        },
        saveChapterNotes(chapterId, content) {
            const notes = this.getAllNotes();
            notes[chapterId] = content;
            return this.saveAllNotes(notes);
        },
        deleteChapterNotes(chapterId) {
            const notes = this.getAllNotes();
            delete notes[chapterId];
            return this.saveAllNotes(notes);
        },
        exportNotes(chapterId, filename) {
            const content = this.getChapterNotes(chapterId);
            const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename || `notes_${chapterId}.md`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        },
        importNotes(chapterId, file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const content = e.target.result;
                    const success = this.saveChapterNotes(chapterId, content);
                    if (success) resolve(content);
                    else reject(new Error('Failed to save'));
                };
                reader.onerror = () => reject(new Error('Failed to read'));
                reader.readAsText(file);
            });
        }
    };

    function createNoteSidebar(chapterId) {
        const existing = document.getElementById('note-sidebar');
        if (existing) return existing;

        const sidebar = document.createElement('div');
        sidebar.id = 'note-sidebar';
        sidebar.className = 'note-sidebar';
        sidebar.setAttribute('data-chapter-id', chapterId);

        const overlay = document.createElement('div');
        overlay.id = 'note-sidebar-overlay';
        overlay.className = 'note-sidebar-overlay';

        const currentNotes = NoteEngine.getChapterNotes(chapterId);

        sidebar.innerHTML = `
            <div class="note-sidebar-header">
                <h3>Study Notes</h3>
                <button class="note-sidebar-close" aria-label="Close notes">&times;</button>
            </div>
            <textarea id="sidebar-notes-textarea" placeholder="Type your notes here... They will auto-save as you type.

You can use markdown formatting:
- **bold**
- *italic*
- \`code\`
- Headings with #

Notes are saved per chapter and persist across sessions.">${escapeHtml(currentNotes)}</textarea>
            <div class="note-sidebar-actions">
                <button id="btn-save-notes">Save</button>
                <button id="btn-export-notes">Export .md</button>
                <button id="btn-import-notes">Import</button>
                <button id="btn-clear-notes">Clear</button>
            </div>
            <input type="file" id="import-file-input" accept=".md,.txt" style="display:none" />
            <p class="note-status" id="note-status">Notes auto-save locally</p>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(sidebar);

        const textarea = sidebar.querySelector('#sidebar-notes-textarea');
        const status = sidebar.querySelector('#note-status');
        let saveTimeout;

        function updateStatus(msg) {
            status.textContent = msg;
            setTimeout(() => { status.textContent = 'Notes auto-save locally'; }, 2000);
        }

        function saveNotes() {
            NoteEngine.saveChapterNotes(chapterId, textarea.value);
            updateStatus('Saved at ' + new Date().toLocaleTimeString());
        }

        textarea.addEventListener('input', () => {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(saveNotes, 600);
            updateStatus('Typing...');
        });

        sidebar.querySelector('#btn-save-notes').addEventListener('click', saveNotes);

        sidebar.querySelector('#btn-export-notes').addEventListener('click', () => {
            const title = getCurrentChapterTitle();
            const filename = `${title || chapterId}_notes.md`;
            NoteEngine.exportNotes(chapterId, filename);
            updateStatus('Notes exported');
        });

        sidebar.querySelector('#btn-import-notes').addEventListener('click', () => {
            sidebar.querySelector('#import-file-input').click();
        });

        sidebar.querySelector('#import-file-input').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            NoteEngine.importNotes(chapterId, file).then(() => {
                textarea.value = NoteEngine.getChapterNotes(chapterId);
                updateStatus('Notes imported');
            }).catch(() => updateStatus('Import failed'));
            e.target.value = '';
        });

        sidebar.querySelector('#btn-clear-notes').addEventListener('click', () => {
            if (confirm('Clear all notes for this chapter? This cannot be undone.')) {
                textarea.value = '';
                NoteEngine.deleteChapterNotes(chapterId);
                updateStatus('Notes cleared');
            }
        });

        function closeSidebar() {
            saveNotes();
            sidebar.classList.remove('open');
            overlay.classList.remove('open');
        }

        sidebar.querySelector('.note-sidebar-close').addEventListener('click', closeSidebar);
        overlay.addEventListener('click', closeSidebar);

        return sidebar;
    }

    function openNoteSidebar(chapterId) {
        const sidebar = createNoteSidebar(chapterId);
        const overlay = document.getElementById('note-sidebar-overlay');
        sidebar.classList.add('open');
        overlay.classList.add('open');
        sidebar.querySelector('#sidebar-notes-textarea').focus();
    }

    function getCurrentChapterTitle() {
        const h2 = document.querySelector('.chapter h2');
        if (h2) return h2.textContent.trim().replace(/[^a-zA-Z0-9]/g, '_');
        return 'chapter';
    }

    function initNavigation() {
        const currentFile = window.location.pathname.split('/').pop() || '';
        const currentIndex = CHAPTERS.findIndex(ch => ch.file.endsWith(currentFile));

        const prevBtn = document.getElementById('prev-chapter');
        const nextBtn = document.getElementById('next-chapter');
        const indicator = document.getElementById('chapter-indicator');

        if (indicator) {
            const currentChapter = CHAPTERS[currentIndex];
            if (currentChapter) {
                indicator.textContent = `Chapter ${currentChapter.num} of ${CHAPTERS.length}`;
            }
        }

        if (prevBtn) {
            if (currentIndex > 0) {
                prevBtn.href = CHAPTERS[currentIndex - 1].file;
                prevBtn.classList.remove('disabled');
            } else {
                prevBtn.classList.add('disabled');
            }
        }

        if (nextBtn) {
            if (currentIndex < CHAPTERS.length - 1) {
                nextBtn.href = CHAPTERS[currentIndex + 1].file;
                nextBtn.classList.remove('disabled');
            } else {
                nextBtn.classList.add('disabled');
            }
        }
    }

    function initProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.id = 'progress-bar';
        document.body.prepend(progressBar);

        const updateProgress = debounce(function() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
            progressBar.style.width = progress + '%';
        }, 10);

        window.addEventListener('scroll', updateProgress, { passive: true });
    }

    function initSearch() {
        const searchInput = document.getElementById('search-input');
        if (!searchInput) return;

        const chapters = document.querySelectorAll('.chapter');
        const tocLinks = document.querySelectorAll('.toc a');

        searchInput.addEventListener('input', debounce(function(e) {
            const query = e.target.value.toLowerCase().trim();

            chapters.forEach(chapter => {
                const text = chapter.textContent.toLowerCase();
                chapter.style.display = text.includes(query) || query === '' ? 'block' : 'none';
            });

            tocLinks.forEach(link => {
                const text = link.textContent.toLowerCase();
                link.parentElement.style.display = text.includes(query) || query === '' ? 'list-item' : 'none';
            });
        }, 300));
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'n') {
                e.preventDefault();
                const nextBtn = document.getElementById('next-chapter');
                if (nextBtn && !nextBtn.classList.contains('disabled')) {
                    window.location.href = nextBtn.href;
                }
            }
            if (e.ctrlKey && e.key === 'p') {
                e.preventDefault();
                const prevBtn = document.getElementById('prev-chapter');
                if (prevBtn && !prevBtn.classList.contains('disabled')) {
                    window.location.href = prevBtn.href;
                }
            }
            if (e.key === 'Escape') {
                const sidebar = document.getElementById('note-sidebar');
                const overlay = document.getElementById('note-sidebar-overlay');
                if (sidebar && sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                    overlay.classList.remove('open');
                }
            }
            if (e.ctrlKey && e.shiftKey && e.key === 'N') {
                e.preventDefault();
                const currentFile = window.location.pathname.split('/').pop();
                const chapter = CHAPTERS.find(ch => ch.file.endsWith(currentFile));
                if (chapter) {
                    openNoteSidebar(chapter.id);
                }
            }
        });
    }

    function addNoteButtons() {
        const existing = document.querySelector('.note-sidebar-toggle');
        if (existing) {
            existing.addEventListener('click', () => {
                const currentFile = window.location.pathname.split('/').pop();
                const chapter = CHAPTERS.find(ch => ch.file.endsWith(currentFile));
                const chapterId = chapter ? chapter.id : 'general';
                openNoteSidebar(chapterId);
            });
            return;
        }

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'note-btn note-sidebar-toggle';
        toggleBtn.textContent = 'Notes';
        toggleBtn.type = 'button';

        toggleBtn.addEventListener('click', () => {
            const currentFile = window.location.pathname.split('/').pop();
            const chapter = CHAPTERS.find(ch => ch.file.endsWith(currentFile));
            const chapterId = chapter ? chapter.id : 'general';
            openNoteSidebar(chapterId);
        });

        document.body.appendChild(toggleBtn);
    }

    function initNoteToggleLinks() {
        document.querySelectorAll('.note-toggle-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const currentFile = window.location.pathname.split('/').pop();
                const chapter = CHAPTERS.find(ch => ch.file.endsWith(currentFile));
                const chapterId = chapter ? chapter.id : 'general';
                openNoteSidebar(chapterId);
            });
        });
    }

    function init() {
        initMathJax();
        initNavigation();
        initProgressBar();
        addNoteButtons();
        initNoteToggleLinks();
        initSearch();
        initSmoothScroll();
        initKeyboardShortcuts();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.Calculus = {
        CHAPTERS,
        NoteEngine,
        getChapter: (id) => CHAPTERS.find(ch => ch.id === id || ch.file.endsWith(id)),
        getCurrentChapter: () => {
            const currentFile = window.location.pathname.split('/').pop();
            let chapter = CHAPTERS.find(ch => ch.file.endsWith(currentFile));
            if (!chapter && window.CurrentChapterId) {
                chapter = CHAPTERS.find(ch => ch.id === window.CurrentChapterId);
            }
            return chapter;
        },
        refreshMath: refreshMathJax,
        openNotes: () => {
            let chapterId = 'general';
            if (window.CurrentChapterId) {
                chapterId = window.CurrentChapterId;
            } else {
                const currentFile = window.location.pathname.split('/').pop();
                const chapter = CHAPTERS.find(ch => ch.file.endsWith(currentFile));
                if (chapter) chapterId = chapter.id;
            }
            openNoteSidebar(chapterId);
        }
    };
})();
