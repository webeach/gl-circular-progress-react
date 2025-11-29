import { ElementType } from 'react';

// A set of HTML tags that are considered "phrasing content" or text containers.
// Placing a block-level element (like <div>) inside these tags results in invalid HTML
// and can cause React hydration errors.
const TEXT_LIKE_TAGS = new Set([
  'p',
  'span',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'button',
  'label',
  'strong',
  'em',
  'b',
  'i',
  'small',
  'figcaption',
  'legend',
  'summary',
]);

/**
 * Determines the appropriate tag for a child element based on the parent's tag
 * to maintain valid HTML nesting.
 *
 * @param parentTagName - The tag name or component type of the parent element.
 * @returns `'span'` if the parent is a text-like element (e.g., `<p>`, `<h1>`), otherwise `'div'`.
 */
export function getSafeChildTag(parentTagName: ElementType): 'div' | 'span' {
  // If a custom React component (function or class) is passed, we cannot check its internal tag.
  // We default to 'div' as it is the most common container.
  if (typeof parentTagName !== 'string') {
    return 'div';
  }

  // Normalize to lowercase to ensure case-insensitive comparison.
  const tagName = parentTagName.toLowerCase();

  // If the parent is a known text-only tag, return 'span' to prevent invalid nesting.
  return TEXT_LIKE_TAGS.has(tagName) ? 'span' : 'div';
}
