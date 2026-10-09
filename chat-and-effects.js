(function () {
  var panel = document.getElementById('cbp');
  var messages = document.getElementById('ms');
  var input = document.getElementById('ci');
  var form = document.getElementById('chat-form');
  var toggle = document.getElementById('cbb');
  var suggestions = document.getElementById('sg');
  var close = document.getElementById('chat-close');
  var busy = false;

  function addMessage(type, text) {
    var message = document.createElement('p');
    message.className = 'chat-message chat-message-' + type;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
    return message;
  }

  function answer(question) {
    var q = question.toLowerCase();
    if (/\b(hire|freelanc|price|cost|budget|project|work with)\b/.test(q)) {
      return 'Jahid is open to freelance projects in website development, SEO/AEO/GEO, ads and lead generation, and AI automation. Email skjahid466@gmail.com or call +91 62963 76653 to discuss your project.';
    }
    if (/\b(site|website|web|portfolio|built|build)\b/.test(q)) {
      return 'Jahid has worked on nigrouprealty.com, beplkol.com, and rizqone.com. His portfolio focuses on responsive websites built with HTML, CSS, and JavaScript.';
    }
    if (/\b(seo|aeo|geo|ads|marketing|lead)\b/.test(q)) {
      return 'Jahid works across SEO, AEO, GEO, Meta Ads, Google Ads, and lead generation. He currently leads digital operations at NI Group.';
    }
    if (/\b(ai|automat|prompt|chatbot|crm)\b/.test(q)) {
      return 'Jahid works with AI prompt engineering, CRM tools, workflow automation, and chatbot projects. He also builds lead-generation workflows.';
    }
    if (/\b(education|educat|study|degree|university|engineer)\b/.test(q)) {
      return 'Jahid has a B.Tech in Electrical Engineering from Aliah University in Kolkata, and completed training at CESC and WBSETCL.';
    }
    if (/\b(speak|bengali|hindi|english)\b/.test(q)) {
      return 'Jahid speaks Bengali, English, and Hindi.';
    }
    if (/\b(service|offer|provide)\b/.test(q)) {
      return 'Jahid offers website development, SEO/AEO/GEO, paid advertising and lead generation, and AI automation. He is open to freelance projects.';
    }
    if (/\b(skill|technology|tech stack|tools|programming language)\b/.test(q)) {
      return 'His skills include HTML, CSS, JavaScript, MATLAB, SEO, AEO, GEO, generative AI, NeoDove CRM, HRMS, Meta Ads, and Google Ads.';
    }
    if (/\b(contact|email|phone|call|reach)\b/.test(q)) {
      return 'You can email skjahid466@gmail.com or call +91 62963 76653.';
    }
    if (/\b(who|about|role|job|work|experience)\b/.test(q)) {
      return 'Sk Jahid Ali is a digital operations professional in Kolkata and Head of Digital Operation at NI Group. He works on web development, search strategy, paid campaigns, and AI automation.';
    }
    return 'I can help with questions about Jahid’s projects, services, skills, or contact details. For anything else, email him at skjahid466@gmail.com.';
  }

  function send(question) {
    var q = question.trim();
    if (!q || busy) return;

    busy = true;
    input.value = '';
    suggestions.hidden = true;
    addMessage('visitor', q);
    var response = addMessage('assistant', 'One moment…');
    window.setTimeout(function () {
      response.textContent = answer(q);
      busy = false;
      if (!panel.hidden) input.focus();
    }, 250);
  }

  function openChat() {
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    if (!messages.children.length) {
      addMessage('assistant', 'Hi! I can answer questions about Jahid’s work, services, and experience.');
      ['What websites has he built?', 'Can I hire him?', 'How can I contact him?'].forEach(function (question) {
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'chat-suggestion';
        button.textContent = question;
        button.addEventListener('click', function () { send(question); });
        suggestions.appendChild(button);
      });
    }
    input.focus();
  }

  function closeChat() {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }

  toggle.addEventListener('click', function () {
    if (panel.hidden) openChat();
    else closeChat();
  });
  close.addEventListener('click', closeChat);
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    send(input.value);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !panel.hidden) closeChat();
  });

  document.querySelectorAll('.project-card, .service-card').forEach(function (element) {
    element.addEventListener('pointermove', function (event) {
      if (event.pointerType !== 'mouse') return;
      var rect = element.getBoundingClientRect();
      var rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 6;
      var rotateX = -((event.clientY - rect.top) / rect.height - 0.5) * 6;
      element.style.transform = 'perspective(800px) rotateY(' + rotateY + 'deg) rotateX(' + rotateX + 'deg)';
    });
    element.addEventListener('pointerleave', function () {
      element.style.transform = '';
    });
  });
})();
