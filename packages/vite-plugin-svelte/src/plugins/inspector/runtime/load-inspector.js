// eslint-disable-next-line n/no-missing-import
import Inspector from 'virtual:svelte-inspector-path:Inspector.svelte';
import { mount } from 'svelte';
function create_inspector_host() {
	const id = 'svelte-inspector-host';
	if (document.getElementById(id) != null) {
		throw new Error('svelte-inspector-host element already exists');
	}
	const el = document.createElement('div');
	el.setAttribute('id', id);
	el.popover = 'manual'
	Object.assign(el.style, {
  	background: 'transparent',
  	border: 'none',
  	padding: '0',
  	margin: '0',
  	pointerEvents: 'none'
  })
	document.documentElement.appendChild(el);
	el.showPopover()
	return el;
}
mount(Inspector, { target: create_inspector_host() });
