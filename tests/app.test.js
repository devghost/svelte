/**
* @jest-environment jsdom
*/

import { render } from '@testing-library/svelte'
import App from '../src/App.svelte'

describe('App', () => {
    test('must render greeting', () => {
        const { getByText } = render(App, { props: { name: 'world' } })

        expect(getByText('Hello world!'))
    });
    
    test('must snapshot', () => {
        const { container } = render(App, { props: { name: 'world' } })

        expect(container).toMatchSnapshot();
    });
});
