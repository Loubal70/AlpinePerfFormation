import '../css/style.css'
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
import Slider from './components/slider.js'
import SliderDisplay from './components/sliderDisplay.js'
import Lightbox from './components/lightbox.js'

window.Alpine = Alpine
Alpine.plugin(intersect)
Alpine.data('slider', Slider)
Alpine.data('sliderDisplay', SliderDisplay)
Alpine.data('lightbox', Lightbox)
Alpine.start()

