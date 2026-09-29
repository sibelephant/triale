import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from '../App';

const renderAt = (path: string) =>
  renderToStaticMarkup(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );

describe('react-router wiring', () => {
  it('renders the shared chrome on every route', () => {
    for (const path of ['/', '/services', '/work', '/about', '/contact']) {
      const html = renderAt(path);
      expect(html, path).toContain('Triale');
      expect(html, path).toContain('site-footer');
    }
  });

  it('resolves each route to its own page', () => {
    const hero = (path: string) => renderAt(path).match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1] ?? '';
    const titles = {
      '/': 'Make useful things visible.',
      '/services': 'From first question to useful release.',
      '/work': 'Useful things, built with intent.',
      '/about': 'Close to the work, clear about the why.',
      '/contact': 'Tell us what you are trying to make.',
    };
    for (const [path, title] of Object.entries(titles)) {
      expect(hero(path), path).toBe(title);
    }
  });

  it('falls back to the home page on an unknown url', () => {
    expect(renderAt('/nope')).toContain('Make useful things visible.');
  });
});
