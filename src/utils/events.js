export function register(node, events) {
    Object.keys(events).forEach((key) => node.addEventListener(key, events[key]));
    return () => Object.keys(events).forEach((key) => node.removeEventListener(key, events[key]));
}
