export default function SliderDisplay() {
    return {
        current: 0,
        total: 0,

        init() {
            window.addEventListener('slider-ready', this.handleSliderEvent.bind(this));
            window.addEventListener('slider-changed', this.handleSliderEvent.bind(this));
        },

        handleSliderEvent(event) {
            this.current = event.detail.current;
            this.total = event.detail.total;
        },

        getCurrentDisplay() {
            return this.current + 1;
        }
    };
} 