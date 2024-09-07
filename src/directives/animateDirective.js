import 'animate.css/animate.min.css';

export const animateDirective = {
  beforeMount(el, binding) {
    const animationClasses = binding.value || 'animate__animated animate__fadeInUp animate__fast';
    el.classList.add(...animationClasses.split(' '));
  },
  beforeUpdate(el, binding) {
    // Asegura que las clases de animación se apliquen también en las actualizaciones de componente
    const animationClasses = binding.value || 'animate__animated animate__fadeInUp animate__fast';
    el.classList.add(...animationClasses.split(' '));
  },
};