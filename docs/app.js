/* cn-personas 演示站：纯静态，无外部依赖。 */
(function () {
  'use strict';

  var lang = 'zh';

  var I18N = {
    zh: {
      title: '六个中国人设，粘进 AI 就能对练',
      sub: '甲方、老会计、县城亲戚、压力面试官、老摊主、毒舌。复制提示词，粘进任意 AI，当场开练：谈需求、面试、砍价、应付饭桌，或者被骂醒。',
      tryPoison: '先试毒舌',
      repoLink: '看仓库',
      promptTitle: '完整提示词（复制后粘进任意 AI 的系统提示词）',
      sampleTitle: '一段真实对练',
      copy: '复制提示词',
      copied: '已复制',
      copyFail: '复制失败，请手动全选复制',
      you: '你',
      it: '它'
    },
    en: {
      title: 'Six Chinese personas, ready to practice against in any AI',
      sub: 'The client, the old accountant, the small-town relative, the tough interviewer, the street vendor, the poison tongue. Copy a prompt, paste it into any AI, and start: negotiate, interview, haggle, survive the dinner table, or get some hard truth.',
      tryPoison: 'Try the Poison Tongue',
      repoLink: 'Repo',
      promptTitle: 'Full prompt (paste into any AI system prompt)',
      sampleTitle: 'A real practice run',
      copy: 'Copy prompt',
      copied: 'Copied',
      copyFail: 'Copy failed — please select and copy manually',
      you: 'You',
      it: 'It'
    }
  };

  var grid = document.getElementById('grid');
  var modal = document.getElementById('modal');
  var modalHead = document.getElementById('modalHead');
  var promptBox = document.getElementById('promptBox');
  var sampleBox = document.getElementById('sampleBox');
  var copyBtn = document.getElementById('copyBtn');
  var copyMsg = document.getElementById('copyMsg');
  var current = null;

  function t(key) { return I18N[lang][key]; }

  function applyStatic() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });
  }

  function renderCards() {
    grid.innerHTML = '';
    PERSONAS.forEach(function (p) {
      var card = document.createElement('div');
      card.className = 'card';

      var emoji = document.createElement('div');
      emoji.className = 'emoji';
      emoji.textContent = p.emoji;

      var h2 = document.createElement('h2');
      h2.textContent = lang === 'zh' ? p.nameZh : p.nameEn;

      var tag = document.createElement('p');
      tag.className = 'tagline';
      tag.textContent = lang === 'zh' ? p.taglineZh : p.taglineEn;

      var scene = document.createElement('span');
      scene.className = 'scene';
      scene.textContent = lang === 'zh' ? p.sceneZh : p.sceneEn;

      card.appendChild(emoji);
      card.appendChild(h2);
      card.appendChild(tag);
      card.appendChild(scene);
      card.addEventListener('click', function () { openPersona(p.id); });
      grid.appendChild(card);
    });
  }

  function renderSample(sample) {
    sampleBox.innerHTML = '';
    var box = document.createElement('div');
    box.className = 'sample';
    sample.forEach(function (turn) {
      var row = document.createElement('div');
      row.className = 'turn ' + (turn.role === 'you' ? 'you' : 'it');
      var bubble = document.createElement('div');
      bubble.className = 'bubble';
      var who = document.createElement('div');
      who.className = 'who';
      who.textContent = turn.role === 'you' ? t('you') : t('it');
      var text = document.createElement('div');
      text.textContent = turn.text;
      bubble.appendChild(who);
      bubble.appendChild(text);
      row.appendChild(bubble);
      box.appendChild(row);
    });
    sampleBox.appendChild(box);
  }

  function openPersona(id) {
    var p = PERSONAS.find(function (x) { return x.id === id; });
    if (!p) return;
    current = p;

    modalHead.innerHTML = '';
    var h2 = document.createElement('h2');
    h2.textContent = p.emoji + ' ' + (lang === 'zh' ? p.nameZh : p.nameEn);
    var tag = document.createElement('p');
    tag.className = 'tagline';
    tag.textContent = lang === 'zh' ? p.taglineZh : p.taglineEn;
    var scene = document.createElement('span');
    scene.className = 'scene';
    scene.textContent = lang === 'zh' ? p.sceneZh : p.sceneEn;
    modalHead.appendChild(h2);
    modalHead.appendChild(tag);
    modalHead.appendChild(scene);

    promptBox.textContent = p.prompt;
    renderSample(p.sample);
    copyMsg.textContent = '';
    copyBtn.textContent = t('copy');
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    current = null;
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (e) {
        /* 走降级方案 */
      }
    }
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  copyBtn.addEventListener('click', async function () {
    if (!current) return;
    var ok = await copyText(current.prompt);
    if (ok) {
      copyBtn.textContent = t('copied');
      copyMsg.textContent = '';
      setTimeout(function () { copyBtn.textContent = t('copy'); }, 1600);
    } else {
      copyMsg.textContent = t('copyFail');
    }
  });

  document.getElementById('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  document.getElementById('tryPoison').addEventListener('click', function () {
    openPersona('poison-tongue');
  });

  var langToggle = document.getElementById('langToggle');
  langToggle.addEventListener('click', function () {
    lang = lang === 'zh' ? 'en' : 'zh';
    langToggle.textContent = lang === 'zh' ? 'EN' : '中文';
    applyStatic();
    renderCards();
    if (current) openPersona(current.id);
    document.title = lang === 'zh' ? 'cn-personas · 六个中国人设，粘进 AI 就能对练' : 'Chinese Personas — cn-personas';
  });

  applyStatic();
  renderCards();
})();
