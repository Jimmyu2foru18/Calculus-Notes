/* ============================================
   CALCULUS FOUNDATIONS — APP
   ============================================ */

(function() {
    'use strict';

    const CONFIG = {
        notesKey: 'calculus_notes',
        storagePrefix: 'calc_notes_'
    };

    const CHAPTERS = [{\'id\': \'limits\', \'num\': \'01\', \'title\': \'Limits\', \'file\': \'chapters/limits.html\', \'sections\': [\'2.1\', \'2.2\', \'2.3\', \'one-sided\', \'2.4\', \'2.5\', \'2.6\'], \'review\': \'review-2\'}, {\'id\': \'derivatives\', \'num\': \'02\', \'title\': \'Derivatives\', \'file\': \'chapters/derivatives.html\', \'sections\': [\'3.1\', \'3.2\', \'3.3\', \'3.4\', \'3.5\', \'3.6\', \'3.7\', \'3.8\', \'3.9\', \'3.10\', \'higher-order\'], \'review\': \'review-5\'}, {\'id\': \'applications-derivative\', \'num\': \'03\', \'title\': \'Applications of the Derivative\', \'file\': \'chapters/applications-derivative.html\', \'sections\': [\'3.11\', \'4.1\', \'4.2\', \'4.3\', \'4.4\', \'4.5\', \'4.6\', \'4.7\'], \'review\': \'review-7\'}, {\'id\': \'integration\', \'num\': \'04\', \'title\': \'Integration\', \'file\': \'chapters/integration.html\', \'sections\': [\'4.9\', \'5.1\', \'5.2\', \'5.3\', \'5.4\', \'5.5\'], \'review\': \'review-9\'}, {\'id\': \'applications-integration\', \'num\': \'05\', \'title\': \'Applications of Integration\', \'file\': \'chapters/applications-integration.html\', \'sections\': [\'area-between\', \'volumes-disks\', \'volumes-shells\'], \'review\': \'review-9\'}];

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
        const currentIndex = CHAPTERS.findIndex(ch => ch.file === currentFile);

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
                const chapter = CHAPTERS.find(ch => ch.file === currentFile);
                if (chapter) {
                    openNoteSidebar(chapter.id);
                }
            }
        });
    }

    function addNoteButtons() {
        const existing = document.querySelector('.note-sidebar-toggle');
        if (existing) return;

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'note-btn note-sidebar-toggle';
        toggleBtn.textContent = 'Notes';
        toggleBtn.type = 'button';

        toggleBtn.addEventListener('click', () => {
            const currentFile = window.location.pathname.split('/').pop();
            const chapter = CHAPTERS.find(ch => ch.file === currentFile);
            const chapterId = chapter ? chapter.id : 'general';
            openNoteSidebar(chapterId);
        });

        document.body.appendChild(toggleBtn);
    }

    function init() {
        initMathJax();
        initNavigation();
        initProgressBar();
        addNoteButtons();
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
        getChapter: (id) => CHAPTERS.find(ch => ch.id === id || ch.file === id),
        getCurrentChapter: () => {
            const currentFile = window.location.pathname.split('/').pop();
            return CHAPTERS.find(ch => ch.file === currentFile);
        },
        refreshMath: refreshMathJax,
        openNotes: () => {
            const currentFile = window.location.pathname.split('/').pop();
            const chapter = CHAPTERS.find(ch => ch.file === currentFile);
            if (chapter) openNoteSidebar(chapter.id);
        }
    };
})();
