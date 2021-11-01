import TicketsWidget from './TicketsWidget';

const widget = new TicketsWidget();

widget.bindToDOM(document.querySelector('.container'));
widget.init();
