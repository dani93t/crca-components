import { html, fixture, expect } from '@open-wc/testing';

import '../crca-redux-url-parser.js';

describe('CrcaReduxUrlParser', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`
      <crca-redux-url-parser></crca-redux-url-parser>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`
      <crca-redux-url-parser></crca-redux-url-parser>
    `);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`
      <crca-redux-url-parser title="attribute title"></crca-redux-url-parser>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <crca-redux-url-parser></crca-redux-url-parser>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
