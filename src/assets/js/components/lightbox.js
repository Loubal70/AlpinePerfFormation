export default function lightbox() {
    return {
        isOpen: false,
        currentImage: null,

        init() {
            document.addEventListener('keydown', (e) => {
                if (e.code === 'Space' && this.isOpen) {
                    this.close();
                }
            });

            this.$watch('isOpen', (value) => {
                document.body.style.overflow = value ? 'hidden' : '';
            });
        },

        open(imageData) {
            this.currentImage = imageData;
            this.isOpen = true;
        },

        close() {
            this.isOpen = false;
            this.currentImage = null;
        },

        getImageSrc() {
            return this.currentImage?.image || '';
        },

        getImageAlt() {
            return this.currentImage?.title || '';
        },

        getImageTitle() {
            return this.currentImage?.title || '';
        },

        getImageDescription() {
            return this.currentImage?.description || '';
        }
    };
} 