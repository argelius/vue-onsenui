export {
  OnsNavigator,
  OnsBackButton,
  OnsTabbar,
  OnsSwitch
} from './components';

const registerComponents = (Vue, components) => {
	Object.keys(components).forEach((key) => {
		const value = components[key];
		key = Vue.util.hyphenate(key);
		Vue.component(key, value);
	});
};

const install = (Vue, {components = {}}) => {
	/**
	 * Register components used in Tabbar,
	 * Navigator and Splitter.
	 */
	registerComponents(Vue, components);

	/**
	 * Push a page to parent Navigator.
	 */
	Vue.prototype.$push = function(options) {
		this.$emit('push', options);
	};

	/**
	 * Pop a page from the parent Navigator.
	 */
	Vue.prototype.$pop = function(options) {
		this.$emit('pop', options);
	}
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({install});
}

export default install;
