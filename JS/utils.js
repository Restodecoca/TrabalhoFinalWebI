class Utils {
  static trackEvent(eventName, eventData = {}) {
    if (window.gtag) window.gtag('event', eventName, eventData);
    if (window.customTracker) window.customTracker.track(eventName, eventData);
    console.log('Event tracked:', eventName, eventData);
  }

  static trackPageView(pageName) {
    this.trackEvent('page_view', {
      page_title: pageName,
      page_location: window.location.href
    });
  }

  static handleError(error, context = 'Unknown') {
    console.error(`Error in ${context}:`, error);
    if (window.errorTracker) window.errorTracker.track(error, context);
    if (window.chatEducaMain) {
      window.chatEducaMain.showNotification(
        'Ops! Algo deu errado. Tente novamente.',
        'error'
      );
    }
  }
}

window.Utils = Utils;
if (typeof module !== 'undefined' && module.exports) module.exports = Utils;

document.addEventListener('DOMContentLoaded', () => {
  Utils.trackPageView('ChatEduca - Home');
  window.addEventListener('error', e => Utils.handleError(e.error, 'Global Error Handler'));
  window.addEventListener('unhandledrejection', e => Utils.handleError(e.reason, 'Unhandled Promise Rejection'));
  console.log('Utils initialized');
});
