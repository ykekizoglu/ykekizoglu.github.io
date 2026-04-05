/* =========================================
   YKE Studios — Shared Scripts
   ========================================= */

// Email obfuscation — assembles addresses at runtime to deter spam bots
document.querySelectorAll('.obf-email').forEach(function(el) {
  var email = el.dataset.u + '@' + el.dataset.d;
  var a = document.createElement('a');
  a.href = 'mailto:' + email;
  a.textContent = email;
  a.style.color = 'inherit';
  a.style.textDecoration = 'none';
  el.appendChild(a);
});

// Mailto card — sets href on card-level anchors at runtime
document.querySelectorAll('.obf-mailto').forEach(function(el) {
  el.href = 'mailto:' + el.dataset.u + '@' + el.dataset.d;
});
