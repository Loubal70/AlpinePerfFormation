export default function Slider(sliderJson) {
    return {
        current: 0,
        slides: [],
        isLoading: true,

        async init() {
            await this.loadSlides();
            this.$dispatch('slider-ready', { current: this.current, total: this.slides.length });
        },

        async loadSlides() {
            try {
                const response = await fetch(sliderJson);
                this.slides = await response.json();
                this.isLoading = false;
            } catch (error) {
                console.error('Erreur chargement slides:', error);
                this.isLoading = false;
            }
        },

        next() {
            let nextSlideEq = this.current < this.slides.length - 1 ? this.current + 1 : 0;
            this.setCurrent(nextSlideEq);
            this.$dispatch('slider-changed', { current: nextSlideEq, total: this.slides.length });
        },

        prev() {
            let previousSlideEq = this.current > 0 ? this.current - 1 : this.slides.length - 1;
            this.setCurrent(previousSlideEq);
            this.$dispatch('slider-changed', { current: previousSlideEq, total: this.slides.length });
        },

        goTo(index) {
            this.current = index;
            this.$dispatch('slider-changed', { current: this.current, total: this.slides.length });
        },

        isActive(index) {
            return this.current === index;
        },

        setCurrent(slideEq) {
            this.current = slideEq;
        },

        getCurrent() {
            return this.current;
        },

        openLightbox(slideIndex = null) {
            const index = slideIndex !== null ? slideIndex : this.getCurrent();
            
            if (!this.slides[index]?.image) return;

            this.$dispatch('open-lightbox', {
                image: this.slides[index]
            });
        }
    };
} 