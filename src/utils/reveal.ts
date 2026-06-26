interface RevealGroup {
  selector: string;
  stagger?: number;  // ms delay multiplier per item
  columns?: number;  // grid columns — uses (index % columns) * stagger instead of index * stagger
}

export function setupScrollReveal(
  groups: RevealGroup[],
  options: { threshold?: number; rootMargin?: string } = {}
): void {
  const threshold = options.threshold ?? 0.15;
  const rootMargin = options.rootMargin ?? '0px 0px -10px 0px';

  const resolved = groups.map(g => ({
    ...g,
    elements: Array.from(document.querySelectorAll(g.selector)),
  }));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        const group = resolved.find(g => g.elements.includes(target));
        if (!group) return;

        if (group.stagger) {
          const index = group.elements.indexOf(target);
          const delay = group.columns
            ? (index % group.columns) * group.stagger
            : index * group.stagger;
          setTimeout(() => target.classList.add('reveal'), delay);
        } else {
          target.classList.add('reveal');
        }

        observer.unobserve(target);
      });
    },
    { threshold, rootMargin }
  );

  resolved.forEach(g => g.elements.forEach(el => observer.observe(el)));
}
