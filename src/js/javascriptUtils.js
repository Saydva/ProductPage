// Progressive step interaction
document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.start__step');
  let currentStep = 0;

  steps.forEach((step, index) => {
    step.addEventListener('click', () => {
      // Remove active from all steps
      steps.forEach((s) => s.classList.remove('active', 'clicked'));

      // Add clicked animation
      step.classList.add('clicked');

      // Set as active after animation
      setTimeout(() => {
        step.classList.remove('clicked');
        step.classList.add('active');
        currentStep = index;

        // Mark previous steps as completed
        steps.forEach((s, i) => {
          if (i < index) {
            s.classList.add('completed');
          } else {
            s.classList.remove('completed');
          }
        });
      }, 300);
    });
  });

  // Auto-progress demo (optional)
  const autoProgress = () => {
    if (currentStep < steps.length - 1) {
      setTimeout(() => {
        steps[currentStep + 1].click();
        autoProgress();
      }, 3000);
    }
  };

  // Uncomment for auto demo:
  // autoProgress();
});
