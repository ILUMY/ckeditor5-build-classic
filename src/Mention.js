import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ClickObserver from '@ckeditor/ckeditor5-engine/src/view/observer/clickobserver';
import { createDropdown, addListToDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';

export default class Mention extends Plugin {
    /**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Mention';
	}
    init() {
        const editor = this.editor; 

        editor.editing.view.addObserver( ClickObserver );

		editor.config.define( 'mention', [
            { id: '123dasd', text: 'Perentaart' },
			{ id: 'alsj798', text: 'Marit Clarisse' }
		] );
    }
}