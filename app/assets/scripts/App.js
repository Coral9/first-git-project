import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu(); //the mobileMenu object is a new instance of the MobileMenu class
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '100%');