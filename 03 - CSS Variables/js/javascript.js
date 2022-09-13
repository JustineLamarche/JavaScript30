window.addEventListener("load", () => {

    const inputs = document.querySelectorAll(".controls input");

    function handleUpdate() {
        const suffix = this.dataset.sizing || ''; // or nothing is important because #base doesn't have a data-sizing

        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // important otherwise when we drag along the range, the value isnt taken
})