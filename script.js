// Eco Badger interactions
const navToggle = document.querySelector('.nav-toggle')
const nav = document.getElementById('primary-nav')
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open')
    navToggle.setAttribute('aria-expanded', String(open))
  })
}

// Intersection Observer for reveal-on-scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      io.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.reveal').forEach(el => io.observe(el))

// Count-up stats
const counters = document.querySelectorAll('[data-count]')
counters.forEach(el => {
  const target = Number(el.getAttribute('data-count') || '0')
  let current = 0
  const duration = 1200
  const step = Math.max(1, Math.floor(target / (duration / 16)))
  const timer = setInterval(() => {
    current += step
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    el.textContent = String(current)
  }, 16)
})

// Year in footer
const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = new Date().getFullYear()
