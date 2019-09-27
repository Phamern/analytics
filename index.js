document.querySelector('#dyrevern').addEventListener('click', (e) => {
  gtag('event', 'click', {
    'event_category': 'outbound',
    'event_label': 'dyrevern',
    'transport_type': 'beacon',
    'event_callback': function () {
      window.location = 'http://www.dyrevern.no/stott_oss';
    }
  });
});