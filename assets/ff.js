/* Freedom Formula: shared site script.
   - draws the "Elements of freedom" glyphs into [data-glyph] placeholders
   - translates [data-i18n] / [data-i18n-html] elements (page strings first, then the shared ones below)
   - runs the "build your formula" widget and its share button
   Each page's own script calls window.ffApplyLang(pageStrings, lang) at the end of switchLanguage(). */
(function () {
  var GLYPHS = {"flame": "<g class=\"b\"><path class=\"back\" d=\"M8 42 L32 30 L56 42\"/></g><g><path class=\"ef\" d=\"M32 47 C19 38 22 23 29 7 C31 17 37 19 37 27 C40 23 41 19 40 15 C48 25 46 39 32 47 Z\"/><path class=\"ef3\" d=\"M32 46 C26 41 27 34 31 27 C33 33 37 35 35 41 C34 44 33 45 32 46 Z\"/></g><g class=\"b\"><path d=\"M8 42 L32 54 L56 42 M8 42 V64 L32 76 L56 64 V42 M32 54 V76\"/></g>", "layers": "<g class=\"b\"><path class=\"back\" d=\"M8 42 L32 30 L56 42\"/></g><g><path class=\"es\" d=\"M20 36 L32 30 L44 36 L32 42 Z\"/><path class=\"es\" d=\"M20 27 L32 21 L44 27 L32 33 Z\"/><path class=\"ef\" d=\"M20 18 L32 12 L44 18 L32 24 Z\"/></g><g class=\"b\"><path d=\"M8 42 L32 54 L56 42 M8 42 V64 L32 76 L56 64 V42 M32 54 V76\"/></g>", "cube": "<g class=\"b\"><path class=\"back\" d=\"M8 42 L32 30 L56 42\"/></g><g><path class=\"ef2\" d=\"M22 14 V25 L32 30 V19 Z\"/><path class=\"ef3\" d=\"M42 14 V25 L32 30 V19 Z\"/><path class=\"ef\" d=\"M32 9 L42 14 L32 19 L22 14 Z\"/></g><g class=\"b\"><path d=\"M8 42 L32 54 L56 42 M8 42 V64 L32 76 L56 64 V42 M32 54 V76\"/></g>", "steps": "<g class=\"b\"><path class=\"back\" d=\"M8 42 L32 30 L56 42\"/></g><g><path class=\"es\" d=\"M16 38 V32 L24 28 V22 L32 18 V12 L40 8\"/><circle class=\"spark\" cx=\"46\" cy=\"6\" r=\"3.5\"/></g><g class=\"b\"><path d=\"M8 42 L32 54 L56 42 M8 42 V64 L32 76 L56 64 V42 M32 54 V76\"/></g>", "network": "<g class=\"b\"><path class=\"back\" d=\"M8 42 L32 30 L56 42\"/></g><g><path class=\"es thin\" d=\"M21 26 L43 26 L32 11 Z\"/><circle class=\"ef\" cx=\"21\" cy=\"26\" r=\"5\"/><circle class=\"ef\" cx=\"43\" cy=\"26\" r=\"5\"/><circle class=\"ef2\" cx=\"32\" cy=\"11\" r=\"5\"/></g><g class=\"b\"><path d=\"M8 42 L32 54 L56 42 M8 42 V64 L32 76 L56 64 V42 M32 54 V76\"/></g>", "coins": "<g class=\"b\"><path class=\"back\" d=\"M8 42 L32 30 L56 42\"/></g><g><path class=\"es\" d=\"M21 18 V32 A11 5.5 0 0 0 43 32 V18 M21 25 A11 5.5 0 0 0 43 25\"/><ellipse class=\"ef\" cx=\"32\" cy=\"18\" rx=\"11\" ry=\"5.5\"/></g><g class=\"b\"><path d=\"M8 42 L32 54 L56 42 M8 42 V64 L32 76 L56 64 V42 M32 54 V76\"/></g>", "arrow": "<g class=\"b\"><path class=\"back\" d=\"M8 42 L32 30 L56 42\"/></g><g><path class=\"es\" d=\"M32 40 V7 M21 18 L32 7 L43 18\"/></g><g class=\"b\"><path d=\"M8 42 L32 54 L56 42 M8 42 V64 L32 76 L56 64 V42 M32 54 V76\"/></g>", "sprout": "<g class=\"b\"><path class=\"back\" d=\"M8 42 L32 30 L56 42\"/></g><g><path class=\"es\" d=\"M32 44 V20\"/><path class=\"ef\" d=\"M32 30 C24 30 19 25 19 16 C27 16 32 21 32 30 Z\"/><path class=\"ef2\" d=\"M32 24 C40 24 45 19 45 10 C37 10 32 15 32 24 Z\"/></g><g class=\"b\"><path d=\"M8 42 L32 54 L56 42 M8 42 V64 L32 76 L56 64 V42 M32 54 V76\"/></g>", "fork": "<g class=\"b\"><path class=\"back\" d=\"M8 42 L32 30 L56 42\"/></g><g><path class=\"es\" d=\"M32 42 V28 L20 13 M32 28 L44 13\"/><circle class=\"ef\" cx=\"20\" cy=\"10\" r=\"4.5\"/><circle class=\"spark\" cx=\"44\" cy=\"10\" r=\"4.5\"/></g><g class=\"b\"><path d=\"M8 42 L32 54 L56 42 M8 42 V64 L32 76 L56 64 V42 M32 54 V76\"/></g>", "stage-closed": "<g class=\"b\"><path class=\"lid\" d=\"M8 42 L32 30 L56 42 L32 54 Z\"/></g><g></g><g class=\"b\"><path d=\"M8 42 L32 54 L56 42 M8 42 V64 L32 76 L56 64 V42 M32 54 V76\"/></g>", "stage-lifting": "<g class=\"b\"><path class=\"back\" d=\"M8 42 L32 30 L56 42\"/><path class=\"lid\" d=\"M10 26 L34 15 L56 28 L32 39 Z\"/></g><g><circle class=\"spark glow\" cx=\"32\" cy=\"44\" r=\"8\"/><circle class=\"spark\" cx=\"32\" cy=\"44\" r=\"3\"/></g><g class=\"b\"><path d=\"M8 42 L32 54 L56 42 M8 42 V64 L32 76 L56 64 V42 M32 54 V76\"/></g>", "stage-spark": "<g class=\"b\"><path class=\"back\" d=\"M8 42 L32 30 L56 42\"/></g><g><circle class=\"spark glow\" cx=\"32\" cy=\"36\" r=\"10\"/><circle class=\"spark\" cx=\"32\" cy=\"36\" r=\"4.5\"/></g><g class=\"b\"><path d=\"M8 42 L32 54 L56 42 M8 42 V64 L32 76 L56 64 V42 M32 54 V76\"/></g>", "stage-flame": "<g class=\"b\"><path class=\"back\" d=\"M8 42 L32 30 L56 42\"/></g><g><path class=\"ef\" d=\"M32 47 C19 38 22 23 29 7 C31 17 37 19 37 27 C40 23 41 19 40 15 C48 25 46 39 32 47 Z\"/><path class=\"ef3\" d=\"M32 46 C26 41 27 34 31 27 C33 33 37 35 35 41 C34 44 33 45 32 46 Z\"/></g><g class=\"b\"><path d=\"M8 42 L32 54 L56 42 M8 42 V64 L32 76 L56 64 V42 M32 54 V76\"/></g>"};

  var STRINGS = {
    uk: {
      el_flame: 'Свобода', el_layers: 'Знання', el_cube: 'Практика', el_steps: 'Наставництво', el_network: 'Спільнота',
      el_coins: 'Дохід', el_arrow: 'Воля', el_sprout: 'Старт', el_fork: 'Вибір',
      ffHeroChip: 'Громадська організація для жінок',
      ffHeroTitleHtml: 'Формула <span class="ff-flame-text">свободи</span>',
      ffHeroFormulaBtn: 'Скласти свою формулу',
      ffChipWhat: 'Напрями', ffChipWho: 'Для кого', ffChipWhy: 'Чому ми', ffChipFormula: 'Формула', ffChipBeliefs: 'Цінності', ffChipJoin: 'Долучитися',
      ffBuilderTitle: 'Склади свою формулу',
      ffBuilderLabel: 'Моя формула свободи',
      ffBuilderHint: 'Оберіть елементи, з яких для вас складається свобода. Універсальної формули немає — є ваша.',
      ffBuilderShare: 'Поділитися формулою',
      ffShareCopied: 'Формулу скопійовано', ffShareCopiedDesc: 'Вставте її в повідомлення чи допис.',
      ffShareText: 'Моя формула свободи: ',
      ffRoleMentor: 'Менторка чи ментор', ffRoleExpert: 'Експерт', ffRolePartner: 'Партнер або компанія', ffRoleDonor: 'Донор',
      ffChipNumbers: 'У цифрах', ffChipAbout: 'Про проєкт', ffChipProgram: 'Програма', ffChipResults: 'Результати', ffAbout: 'Про організацію',
      ffSkip: 'Перейти до змісту', ffMenu: 'Меню', ffLangLabel: 'Мова', ffWordmark: 'Формула<br>свободи'
    },
    en: {
      el_flame: 'Freedom', el_layers: 'Knowledge', el_cube: 'Practice', el_steps: 'Mentorship', el_network: 'Community',
      el_coins: 'Income', el_arrow: 'Will', el_sprout: 'Fresh start', el_fork: 'Choice',
      ffHeroChip: 'A non-profit for women',
      ffHeroTitleHtml: 'Freedom <span class="ff-flame-text">Formula</span>',
      ffHeroFormulaBtn: 'Build your formula',
      ffChipWhat: 'Focus areas', ffChipWho: 'Who it’s for', ffChipWhy: 'Why us', ffChipFormula: 'Formula', ffChipBeliefs: 'Values', ffChipJoin: 'Join us',
      ffBuilderTitle: 'Build your own formula',
      ffBuilderLabel: 'My freedom formula',
      ffBuilderHint: 'Pick the elements your freedom is made of. There is no universal formula — there is yours.',
      ffBuilderShare: 'Share my formula',
      ffShareCopied: 'Formula copied', ffShareCopiedDesc: 'Paste it into a message or a post.',
      ffShareText: 'My freedom formula: ',
      ffRoleMentor: 'Mentor', ffRoleExpert: 'Expert', ffRolePartner: 'Partner or company', ffRoleDonor: 'Donor',
      ffChipNumbers: 'In numbers', ffChipAbout: 'About the project', ffChipProgram: 'Programme', ffChipResults: 'Results', ffAbout: 'About us',
      ffSkip: 'Skip to content', ffMenu: 'Menu', ffLangLabel: 'Language', ffWordmark: 'Freedom<br>Formula'
    }
  };

  var lang = 'uk';

  function svg(kind) {
    return '<svg class="ff-glyph" viewBox="0 0 64 80" aria-hidden="true" focusable="false">' + (GLYPHS[kind] || '') + '</svg>';
  }

  function drawGlyphs(root) {
    (root || document).querySelectorAll('[data-glyph]').forEach(function (el) {
      if (el.firstElementChild && el.firstElementChild.classList.contains('ff-glyph')) return;
      el.insertAdjacentHTML('afterbegin', svg(el.getAttribute('data-glyph')));
    });
  }

  function t(key) { return (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.uk[key] || ''; }

  /* ---- formula builder ---- */
  function term(kind, key) {
    return '<span class="ff-term' + (key ? ' ff-term--key' : '') + '">' + svg(kind) + t('el_' + kind) + '</span>';
  }
  function op(c) { return '<span class="ff-op">' + c + '</span>'; }

  function selected(b) {
    return Array.prototype.map.call(b.querySelectorAll('.ff-el[aria-pressed="true"]'), function (x) { return x.getAttribute('data-el'); });
  }

  function renderBuilder(b) {
    var out = b.querySelector('[data-ff-formula]');
    if (!out) return;
    var on = selected(b);
    var html = term('flame', true) + op('=');
    if (!on.length) html += op('?');
    on.forEach(function (k, i) { html += (i ? op('+') : '') + term(k); });
    out.innerHTML = html;
  }

  function formulaText(b) {
    var on = selected(b);
    return t('el_flame') + ' = ' + (on.length ? on.map(function (k) { return t('el_' + k); }).join(' + ') : '?');
  }

  function initBuilders() {
    document.querySelectorAll('.ff-builder').forEach(function (b) {
      b.querySelectorAll('.ff-el[data-el]').forEach(function (x) {
        x.addEventListener('click', function () {
          x.setAttribute('aria-pressed', x.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
          renderBuilder(b);
        });
      });
      var share = b.querySelector('[data-ff-share]');
      if (share) share.addEventListener('click', function () {
        var text = t('ffShareText') + formulaText(b) + ' — https://freedomformula.co.ua';
        if (navigator.share) {
          navigator.share({ title: t('ffBuilderLabel'), text: text }).catch(function () {});
        } else if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(function () {
            if (typeof window.showToast === 'function') window.showToast(t('ffShareCopied'), t('ffShareCopiedDesc'));
          }).catch(function () {});
        }
      });
      renderBuilder(b);
    });
  }

  /* ---- language ---- */
  window.ffApplyLang = function (pageStrings, newLang) {
    lang = newLang === 'en' ? 'en' : 'uk';
    var page = pageStrings || {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      var v = page[k] !== undefined ? page[k] : t(k);
      if (v) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      var v = page[k] !== undefined ? page[k] : t(k);
      if (v) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-aria'));
      if (v) el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('.ff-builder').forEach(renderBuilder);
  };

  function init() {
    drawGlyphs();
    initBuilders();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
