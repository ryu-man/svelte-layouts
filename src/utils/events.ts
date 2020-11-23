export type EventMap<T extends keyof HTMLElementEventMap, R> = {
  [key in T]?: R
}

export function register<T extends keyof HTMLElementEventMap>(
  node: HTMLElement,
  events: EventMap<T, (this: HTMLElement, ev: HTMLElementEventMap[T]) => any>
): () => void {
  Object.keys(events).forEach((key) => node.addEventListener(key, events[key]))
  return () =>
    Object.keys(events).forEach((key) =>
      node.removeEventListener(key, events[key])
    )
}
