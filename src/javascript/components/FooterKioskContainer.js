// utils
import { $, objElement } from '../utils/ElementTool.js';

export default Object.create({
	// initialize method
	init() {
		this.hideFooterKioskContainer();
	},

	// setup method
	setup() {
		const footerKioskContainer = this.printFooterKioskContainer();
		const divEmail = this.printDivEmail();
		const divContactMe = this.printDivContactMe();

		footerKioskContainer.append(divEmail, divContactMe);

		return footerKioskContainer;
	},

	// print methods
	printFooterKioskContainer() {
		return objElement.createElement('footer').setClassName('footerKioskContainer').complete();
	},
	printDivEmail() {
		return objElement.createElement('DIV', 'Email: jiyejeung@gmail.com').setClassName('divEmail').complete();
	},
	printDivContactMe() {
		return objElement.createElement('DIV', "This website was created as part of my portfolio. If you have any questions, please don't hesitate to send me a message!").setClassName('divContactMe').complete();
	},

	// event callback methods
	onClickButtonTakeOut() {
		this.showFooterKioskContainer();
	},
	onClickButtonStore() {
		this.showFooterKioskContainer();
	},

  // action methods
	showFooterKioskContainer() {
		$('.footerKioskContainer').style.display = 'flex';
		setTimeout(() => ($('.footerKioskContainer').style.opacity = 1), 0);
	},
	hideFooterKioskContainer() {
		$('.footerKioskContainer').style.opacity = 0;
		setTimeout(() => ($('.footerKioskContainer').style.display = 'none'), 300);
	},
});
