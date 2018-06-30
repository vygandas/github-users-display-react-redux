/**
 * https://developers.google.com/analytics/devguides/collection/gtagjs/events
 * --
 * gtag('event', <action>, {
 *     'event_category': <category>,
 *     'event_label': <label>,
 *     'value': <value>
 * });
 */

interface Window {
    gtag?: (type: string, action: string, options: {}) => {};
}

export const event = (action: string, label: string = null, value: string | number = null) => {
    const w = (window as Window);
    if (typeof w === "object" && typeof w.gtag !== typeof undefined) {
        w.gtag("event", action, {
            event_action: action,
            event_label: label,
            value: value
        });
    }
};
