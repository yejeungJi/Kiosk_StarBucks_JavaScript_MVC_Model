import { $, objElement } from '../utils/ElementTool.js';

export default Object.create({
	init() {
		this.showSectionIntroContainer();
	},
	setup() {
		const sectionIntroContainer = this.printSectionIntroContainer();
		sectionIntroContainer.append(this.printH1Title(), this.printH2Greeting());

		return sectionIntroContainer;
	},
	printH1Title() {
		return objElement.createElement('H1', 'STARBUCKS').setClassName('h1IntroTitle').complete();
	},
	printH2Greeting() {
		return objElement.createElement('H2', "This website was solely created for the purposes of a student's portfolio.").setClassName('h2IntroGreeting').complete();
	},
	printSectionIntroContainer() {
		return objElement.createElement('SECTION').setClassName('sectionIntroContainer').complete();
	},
	showSectionIntroContainer() {
		$('.sectionIntroContainer').style.display = 'flex';
		setTimeout(() => ($('.sectionIntroContainer').style.opacity = 1), 0);
	},
	hideSectionIntroContainer() {
		$('.sectionIntroContainer').style.opacity = 0;
		setTimeout(() => ($('.sectionIntroContainer').style.display = 'none'), 300);
	},
	onClickSectionIntroContainer() {
		this.hideSectionIntroContainer();
	},
});
