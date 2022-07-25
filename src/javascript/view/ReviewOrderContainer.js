import Controller from '../controller/Controller.js';
import { $, $$, objElement } from '../utils/ElementTool.js';
import { addComma } from '../utils/NumberTool.js';
import { spacingString } from '../utils/StringTool.js';

export default Object.create({
	init() {},
	setup() {
		const sectionReviewOrderContainer = this.printSectionReviewOrderContainer();
		const buttonShowCoupon = this.printButtonShowCoupon();
		const buttonShowOrder = this.printButtonShowOrder();
		const divDetailedReviewOrderContainer = this.printDivDetailedReviewOrderContainer();
		const divSimpleReviewOrderContainer = this.appendDivSimpleReviewOrderContainer();
		const divSimpleReviewOrderCouponContainer = this.appendDivSimpleReviewOrderCouponContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(buttonShowCoupon, buttonShowOrder, divDetailedReviewOrderContainer, divSimpleReviewOrderContainer, divSimpleReviewOrderCouponContainer);

		sectionReviewOrderContainer.appendChild(fragment);

		return sectionReviewOrderContainer;
	},
	printSectionReviewOrderContainer() {
		return objElement.createElement('SECTION').setClassName('sectionReviewOrderContainer').complete();
	},
	printButtonShowCoupon() {
		return objElement.createElement('BUTTON', 'Searching Point').setClassName('buttonShowCoupon').complete();
	},
	printButtonShowOrder() {
		return objElement.createElement('BUTTON', 'Back').setClassName('buttonShowOrder').complete();
	},
	appendDivSimpleReviewOrderContainer() {
		const divSimpleReviewOrderContainer = this.printDivSimpleReviewOrderContainer();
		const divSimpleReviewOrderCountContainer = this.appendDivSimpleReviewOrderCountContainer();
		const divSimpleReviewOrderTotalPriceContainer = this.appendDivSimpleReviewOrderTotalPriceContainer();
		const divSimpleReviewOrderButtonContainer = this.appendDivSimpleReviewOrderButtonContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(divSimpleReviewOrderCountContainer, divSimpleReviewOrderTotalPriceContainer, divSimpleReviewOrderButtonContainer);

		divSimpleReviewOrderContainer.appendChild(fragment);

		return divSimpleReviewOrderContainer;
	},
	printDivDetailedReviewOrderContainer() {
		return objElement.createElement('DIV').setClassName('divDetailedReviewOrderContainer').complete();
	},
	printDivSimpleReviewOrderContainer() {
		return objElement.createElement('DIV').setClassName('divSimpleReviewOrderContainer').complete();
	},
	appendDivSimpleReviewOrderCountContainer() {
		const divSimpleReviewOrderContainer = this.printDivSimpleReviewOrderCountContainer();
		const spanSimpleReviewOrderText = this.printSpanSimpleReviewOrderText();
		const spanSimpleReviewOrderCount = this.printSpanSimpleReviewOrderCount();
		const fragment = document.createDocumentFragment();

		fragment.append(spanSimpleReviewOrderText, spanSimpleReviewOrderCount);

		divSimpleReviewOrderContainer.appendChild(fragment);

		return divSimpleReviewOrderContainer;
	},
	printDivSimpleReviewOrderCountContainer() {
		return objElement.createElement('DIV').setClassName('divSimpleReviewOrderCountContainer').complete();
	},
	printSpanSimpleReviewOrderText() {
		return objElement.createElement('SPAN', 'Review Order ').setClassName('spanSimpleReviewOrderText').complete();
	},
	printSpanSimpleReviewOrderCount(orderCount = 0) {
		return objElement.createElement('SPAN', `(${orderCount})`).setClassName('spanSimpleReviewOrderCount').complete();
	},
	appendDivSimpleReviewOrderTotalPriceContainer() {
		const divSimpleReviewOrderTotalPriceContainer = this.printDivSimpleReviewOrderTotalPriceContainer();
		const spanSimpleReviewOrderTotalPriceText = this.printSpanSimpleReviewOrderTotalPriceText();
		const spanSimpleReviewOrderTotalPrice = this.printSpanSimpleReviewOrderTotalPrice();
		const fragment = document.createDocumentFragment();

		fragment.append(spanSimpleReviewOrderTotalPriceText, spanSimpleReviewOrderTotalPrice);

		divSimpleReviewOrderTotalPriceContainer.appendChild(fragment);

		return divSimpleReviewOrderTotalPriceContainer;
	},
	printDivSimpleReviewOrderTotalPriceContainer() {
		return objElement.createElement('DIV').setClassName('divSimpleReviewOrderTotalPriceContainer').complete();
	},
	printSpanSimpleReviewOrderTotalPriceText() {
		return objElement.createElement('SPAN', 'Total: ').setClassName('spanSimpleReviewOrderTotalPriceText').complete();
	},
	printSpanSimpleReviewOrderTotalPrice(totalPrice = 0) {
		return objElement.createElement('SPAN', addComma(totalPrice)).setClassName('spanSimpleReviewOrderTotalPrice').complete();
	},
	appendDivSimpleReviewOrderButtonContainer() {
		const divSimpleReviewOrderButtonContainer = this.printDivSimpleReviewOrderButtonContainer();
		const buttonSimpleReviewOrderPay = this.printButtonSimpleReviewOrderPay();
		const buttonSimpleReviewOrderBack = this.printButtonSimpleReviewOrderBack();
		const fragment = document.createDocumentFragment();

		fragment.append(buttonSimpleReviewOrderPay, buttonSimpleReviewOrderBack);

		divSimpleReviewOrderButtonContainer.appendChild(fragment);

		return divSimpleReviewOrderButtonContainer;
	},
	printDivSimpleReviewOrderButtonContainer() {
		return objElement.createElement('DIV').setClassName('divSimpleReviewOrderButtonContainer').complete();
	},
	printButtonSimpleReviewOrderPay() {
		return objElement.createElement('BUTTON', 'PAY').setClassName('buttonSimpleReviewOrderPay').complete();
	},
	printButtonSimpleReviewOrderBack() {
		return objElement.createElement('BUTTON', 'BACK').setClassName('buttonSimpleReviewOrderBack').complete();
	},

	appendDivSimpleReviewOrderCouponContainer() {
		const divSimpleReviewOrderCouponContainer = this.printDivSimpleReviewOrderCouponContainer();
		const divOrderCouponWrapperContainer = this.appendDivOrderCouponWrapperContainer();

		divSimpleReviewOrderCouponContainer.appendChild(divOrderCouponWrapperContainer);

		return divSimpleReviewOrderCouponContainer;
	},
	printDivSimpleReviewOrderCouponContainer() {
		return objElement.createElement('DIV').setClassName('divSimpleReviewOrderCouponContainer').complete();
	},
	appendDivOrderCouponWrapperContainer() {
		const divOrderCouponWrapperContainer = this.printDivOrderCouponWrapperContainer();
		const divSearchingCouponContainer = this.appendDivSearchingCouponContainer();
		const divResultCouponContainer = this.appendDivResultCouponContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(divSearchingCouponContainer, divResultCouponContainer);

		divOrderCouponWrapperContainer.appendChild(fragment);

		return divOrderCouponWrapperContainer;
	},
	printDivOrderCouponWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divOrderCouponWrapperContainer').complete();
	},
	appendDivSearchingCouponContainer() {
		const divSearchingCouponContainer = this.printDivSearchingCouponContainer();
		const divSimpleReviewOrderCouponSearchingWrapperContainer = this.appendDivSimpleReviewOrderCouponSearchingWrapperContainer();

		divSearchingCouponContainer.appendChild(divSimpleReviewOrderCouponSearchingWrapperContainer);

		return divSearchingCouponContainer;
	},
	printDivSearchingCouponContainer() {
		return objElement.createElement('DIV').setClassName('divSearchingCouponContainer').complete();
	},
	appendDivSimpleReviewOrderCouponSearchingWrapperContainer() {
		const divSimpleReviewOrderCouponSearchingWrapperContainer = this.printDivSimpleReviewOrderCouponSearchingWrapperContainer();
		const divSimpleReviewOrderCouponSearchingContainer = this.appendDivSimpleReviewOrderCouponSearchingContainer();
		// const divSimpleReviewOrderCouponSearchingCompleteContainer = this.appendDivSimpleReviewOrderCouponSearchingCompleteContainer();
		const spanCouponSearchingFailed = this.printSpanCouponSearchingFailed();
		const fragment = document.createDocumentFragment();

		fragment.append(divSimpleReviewOrderCouponSearchingContainer, spanCouponSearchingFailed);

		divSimpleReviewOrderCouponSearchingWrapperContainer.appendChild(fragment);

		return divSimpleReviewOrderCouponSearchingWrapperContainer;
	},
	printDivSimpleReviewOrderCouponSearchingWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divSimpleReviewOrderCouponSearchingWrapperContainer').complete();
	},
	appendDivSimpleReviewOrderCouponSearchingContainer() {
		const divSimpleReviewOrderCouponSearchingContainer = this.printDivSimpleReviewOrderCouponSearchingContainer();
		const h4CouponSearchingText = this.printH4CouponSearchingText();
		const inputPhoneNumber = this.printInputPhoneNumber();
		const divCouponSearchingButtonContainer = this.appendDivCouponSearchingButtonContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(h4CouponSearchingText, inputPhoneNumber, divCouponSearchingButtonContainer);

		divSimpleReviewOrderCouponSearchingContainer.appendChild(fragment);

		return divSimpleReviewOrderCouponSearchingContainer;
	},
	printDivSimpleReviewOrderCouponSearchingContainer() {
		return objElement.createElement('DIV').setClassName('divSimpleReviewOrderCouponSearchingContainer').complete();
	},
	printH4CouponSearchingText() {
		return objElement.createElement('H4', 'Searching Point').setClassName('h4CouponSearchingText').complete();
	},
	printInputPhoneNumber() {
		return objElement.createElement('INPUT').setClassName('inputPhoneNumber').setAttribute('value', '010-').complete();
	},
	appendDivCouponSearchingButtonContainer() {
		const divCouponSearchingButtonContainer = this.printDivCouponSearchingButtonContainer();
		const fragment = document.createDocumentFragment();
		let index = 0;

		while (index < 10) {
			fragment.appendChild(this.printButtonCouponSearching(index));
			index++;
		}
		fragment.append(this.printButtonCouponBack(), this.printButtonCouponComplete());

		divCouponSearchingButtonContainer.appendChild(fragment);

		return divCouponSearchingButtonContainer;
	},
	printDivCouponSearchingButtonContainer() {
		return objElement.createElement('DIV').setClassName('divCouponSearchingButtonContainer').complete();
	},
	printButtonCouponSearching(index) {
		return objElement.createElement('BUTTON', index).setClassName('buttonCouponSearching').complete();
	},
	printButtonCouponBack() {
		return objElement.createElement('BUTTON', 'BACK').setClassName('buttonCouponBack').complete();
	},
	printButtonCouponComplete() {
		return objElement.createElement('BUTTON', 'OK').setClassName('buttonCouponComplete').complete();
	},
	printSpanCouponSearchingFailed() {
		return objElement.createElement('SPAN', '').setClassName('spanCouponSearchingFailed').complete();
	},
	// now
	appendDivResultCouponContainer() {
		const divResultCouponContainer = this.printDivResultCouponContainer();
		const h4UsingPoint = this.printH4UsingPoint();
		const divUsingPointTotalPriceContainer = this.appendDivUsingPointTotalPriceContainer();
		const divUsingPointTotalPointContainer = this.appendDivUsingPointTotalPointContainer();
		const divUsingPointUsingPointContainer = this.appendDivUsingPointUsingPointContainer();
		const divUsingPointButtonUsingPointContainer = this.appendDivUsingPointButtonUsingPointContainer();
		const divUsingPointPayContainer = this.appendDivUsingPointPayContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(h4UsingPoint, divUsingPointTotalPriceContainer, divUsingPointTotalPointContainer, divUsingPointUsingPointContainer, divUsingPointButtonUsingPointContainer, divUsingPointPayContainer);

		divResultCouponContainer.appendChild(fragment);

		return divResultCouponContainer;
	},
	printDivResultCouponContainer() {
		return objElement.createElement('DIV').setClassName('divResultCouponContainer').complete();
	},
	printH4UsingPoint() {
		return objElement.createElement('H4', 'Using Point').setClassName('h4UsingPoint').complete();
	},
	appendDivUsingPointTotalPriceContainer() {
		const divUsingPointTotalPriceContainer = this.printDivUsingPointTotalPriceContainer();
		const printSpanUsingPointTotalPriceText = this.printSpanUsingPointTotalPriceText();
		const printSpanUsingPointTotalPrice = this.printSpanUsingPointTotalPrice();
		const fragment = document.createDocumentFragment();

		fragment.append(printSpanUsingPointTotalPriceText, printSpanUsingPointTotalPrice);

		divUsingPointTotalPriceContainer.appendChild(fragment);

		return divUsingPointTotalPriceContainer;
	},
	printDivUsingPointTotalPriceContainer() {
		return objElement.createElement('DIV').setClassName('divUsingPointTotalPriceContainer').complete();
	},
	printSpanUsingPointTotalPriceText() {
		return objElement.createElement('SPAN', 'Total: ').setClassName('spanUsingPointTotalPriceText').complete();
	},
	printSpanUsingPointTotalPrice() {
		return objElement.createElement('SPAN').setClassName('spanUsingPointTotalPrice').complete();
	},
	appendDivUsingPointTotalPointContainer() {
		const divUsingPointTotalPointContainer = this.printDivUsingPointTotalPointContainer();
		const spanUsingPointTotalPointText = this.printSpanUsingPointTotalPointText();
		const spanUsingPointTotalPoint = this.printSpanUsingPointTotalPoint();
		const fragment = document.createDocumentFragment();

		fragment.append(spanUsingPointTotalPointText, spanUsingPointTotalPoint);

		divUsingPointTotalPointContainer.appendChild(fragment);

		return divUsingPointTotalPointContainer;
	},
	printDivUsingPointTotalPointContainer() {
		return objElement.createElement('DIV').setClassName('divUsingPointTotalPointContainer').complete();
	},
	printSpanUsingPointTotalPointText() {
		return objElement.createElement('SPAN', 'Total Point: ').setClassName('spanUsingPointTotalPointText').complete();
	},
	printSpanUsingPointTotalPoint() {
		return objElement.createElement('SPAN').setClassName('spanUsingPointTotalPoint').complete();
	},
	appendDivUsingPointUsingPointContainer() {
		const divUsingPointUsingPointContainer = this.printDivUsingPointUsingPointContainer();
		const spanUsingPointUsingPointText = this.printSpanUsingPointUsingPointText();
		const spanUsingPointUsingPoint = this.printSpanUsingPointUsingPoint();
		const fragment = document.createDocumentFragment();

		fragment.append(spanUsingPointUsingPointText, spanUsingPointUsingPoint);

		divUsingPointUsingPointContainer.appendChild(fragment);

		return divUsingPointUsingPointContainer;
	},
	printDivUsingPointUsingPointContainer() {
		return objElement.createElement('DIV').setClassName('divUsingPointUsingPointContainer').complete();
	},
	printSpanUsingPointUsingPointText() {
		return objElement.createElement('SPAN', 'Using Point: ').setClassName('spanUsingPointUsingPointText').complete();
	},
	printSpanUsingPointUsingPoint() {
		return objElement.createElement('SPAN', '0').setClassName('spanUsingPointUsingPoint').complete();
	},
	appendDivUsingPointButtonUsingPointContainer() {
		const divUsingPointButtonUsingPointContainer = this.printDivUsingPointButtonUsingPointContainer();
		const buttonUsingPointFiveThousand = this.printButtonUsingPointFiveThousand();
		const buttonUsingPointFull = this.printButtonUsingPointFull();
		const fragment = document.createDocumentFragment();

		fragment.append(buttonUsingPointFiveThousand, buttonUsingPointFull);

		divUsingPointButtonUsingPointContainer.appendChild(fragment);

		return divUsingPointButtonUsingPointContainer;
	},
	printDivUsingPointButtonUsingPointContainer() {
		return objElement.createElement('DIV').setClassName('divUsingPointButtonUsingPointContainer').complete();
	},
	printButtonUsingPointFiveThousand() {
		return objElement.createElement('BUTTON', 'Use 5,000 points').setClassName('buttonUsingPointFiveThousand').complete();
	},
	printButtonUsingPointFull() {
		return objElement.createElement('BUTTON', 'Use full points').setClassName('buttonUsingPointFull').complete();
	},
	appendDivUsingPointPayContainer() {
		const divUsingPointPayContainer = this.printDivUsingPointPayContainer();
		const buttonUsingPointAndPay = this.printButtonUsingPointAndPay();
		const buttonUsingPointCancel = this.printButtonUsingPointCancel();
		const fragment = document.createDocumentFragment();

		fragment.append(buttonUsingPointAndPay, buttonUsingPointCancel);

		divUsingPointPayContainer.appendChild(fragment);

		return divUsingPointPayContainer;
	},
	printDivUsingPointPayContainer() {
		return objElement.createElement('DIV').setClassName('divUsingPointPayContainer').complete();
	},
	printButtonUsingPointAndPay() {
		return objElement.createElement('BUTTON', 'PAY').setClassName('buttonUsingPointAndPay').complete();
	},
	printButtonUsingPointCancel() {
		return objElement.createElement('BUTTON', 'CANCEL').setClassName('buttonUsingPointCancel').complete();
	},
	//=============

	// ==== createDivDetailedReview
	initDivDetailedReviewOrderContainer() {
		$$('.divDetailedReviewOrderContainer .divDetailedReviewOrderSelectedProductInfoContainer').forEach(div => void div.remove());
	},
	createDivDetailedReviewOrderSelectedProductInfoContainer() {
		const fragment = document.createDocumentFragment();

		Controller.selectedProductsInfo().forEach(selectedProduct => fragment.append(this.appendDivDetailedReviewOrderSelectedProductInfoContainer(selectedProduct)));

		$('.divDetailedReviewOrderContainer').append(fragment);
	},
	appendDivDetailedReviewOrderSelectedProductInfoContainer(selectedProduct) {
		const divDetailedReviewOrderSelectedProductInfoContainer = this.printDivDetailedReviewOrderSelectedProductInfoContainer();
		const divDetailedReviewOrderSelectedProductImageWrapperContainer = this.appendDivDetailedReviewOrderSelectedProductImageWrapperContainer(selectedProduct);
		const divDetailedReviewOrderSelectedProductOptionWrapperContainer = this.appendDivDetailedReviewOrderSelectedProductOptionWrapperContainer(selectedProduct);
		const fragment = document.createDocumentFragment();

		fragment.append(divDetailedReviewOrderSelectedProductImageWrapperContainer, divDetailedReviewOrderSelectedProductOptionWrapperContainer);

		divDetailedReviewOrderSelectedProductInfoContainer.appendChild(fragment);

		return divDetailedReviewOrderSelectedProductInfoContainer;
	},
	printDivDetailedReviewOrderSelectedProductInfoContainer() {
		return objElement.createElement('DIV').setClassName('divDetailedReviewOrderSelectedProductInfoContainer').complete();
	},
	// ===
	appendDivDetailedReviewOrderSelectedProductImageWrapperContainer({ productImage }) {
		const divDetailedReviewOrderSelectedProductImageWrapperContainer = this.printDivDetailedReviewOrderSelectedProductImageWrapperContainer();
		const divDetailedReviewOrderSelectedProductImageContainer = this.printDivDetailedReviewOrderSelectedProductImageContainer(productImage);

		divDetailedReviewOrderSelectedProductImageWrapperContainer.appendChild(divDetailedReviewOrderSelectedProductImageContainer);

		return divDetailedReviewOrderSelectedProductImageWrapperContainer;
	},
	printDivDetailedReviewOrderSelectedProductImageWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divDetailedReviewOrderSelectedProductImageWrapperContainer').complete();
	},
	printDivDetailedReviewOrderSelectedProductImageContainer(productImage) {
		return objElement.createElement('DIV').setClassName('divDetailedReviewOrderSelectedProductImageContainer').setAttribute('style', `background-image: url(${productImage})`).complete();
	},
	// start2
	appendDivDetailedReviewOrderSelectedProductOptionWrapperContainer({ productName, productSize, productIce, productPrice, productAdditionalFee, productCount }) {
		const fragment = document.createDocumentFragment();
		const divDetailedReviewOrderSelectedProductOptionWrapperContainer = this.printDivDetailedReviewOrderSelectedProductOptionWrapperContainer();

		fragment.append(
			this.printSpanDetailedReviewOrderSelectedProductName(productName),
			this.printSpanDetailedReviewOrderSelectedProductOption(productSize, productIce),
			this.printSpanDetailedReviewOrderSelectedProductPrice(productPrice, productAdditionalFee),
			this.printSpanDetailedReviewOrderSelectedProductCount(productCount),
			this.printSpanDetailedReviewOrderSelectedProductTotalPrice(productPrice, productAdditionalFee, productCount)
		);

		divDetailedReviewOrderSelectedProductOptionWrapperContainer.appendChild(fragment);

		return divDetailedReviewOrderSelectedProductOptionWrapperContainer;
	},
	printDivDetailedReviewOrderSelectedProductOptionWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divDetailedReviewOrderSelectedProductOptionWrapperContainer').complete();
	},
	printSpanDetailedReviewOrderSelectedProductName(productName = 'Product Name') {
		return objElement.createElement('SPAN', spacingString(productName)).setClassName('spanDetailedReviewOrderSelectedProductName').complete();
	},
	printSpanDetailedReviewOrderSelectedProductOption(productSize = 'Short', productIce = 'No Ice') {
		return objElement
			.createElement('SPAN', `${spacingString(productSize)}, ${spacingString(productIce)}`)
			.setClassName('spanDetailedReviewOrderSelectedProductOptions')
			.complete();
	},
	printSpanDetailedReviewOrderSelectedProductPrice(productPrice = 1000, productAdditionalFee = 300) {
		return objElement
			.createElement('SPAN', `Product Price: ${addComma(productPrice + productAdditionalFee)}`)
			.setClassName('spanDetailedReviewOrderSelectedProductPrice')
			.complete();
	},
	printSpanDetailedReviewOrderSelectedProductCount(productCount = 1) {
		return objElement.createElement('SPAN', `Count: ${productCount}`).setClassName('spanDetailedReviewOrderSelectedProductCount').complete();
	},
	printSpanDetailedReviewOrderSelectedProductTotalPrice(productPrice = 1000, productAdditionalFee = 300, productCount = 1) {
		return objElement
			.createElement('SPAN', `Total: ${addComma((productPrice + productAdditionalFee) * productCount)}`)
			.setClassName('spanDetailedReviewOrderSelectedProductTotalPrice')
			.complete();
	},
	showSectionReviewOrderContainer() {
		$('.sectionReviewOrderContainer').style.display = 'flex';
		setTimeout(() => ($('.sectionReviewOrderContainer').style.opacity = 1), 0);
	},
	hideSectionReviewOrderContainer() {
		$('.sectionReviewOrderContainer').style.opacity = 0;
		setTimeout(() => ($('.sectionReviewOrderContainer').style.display = 'none'), 300);
	},
	showButtonShowCoupon() {
		$('.buttonShowCoupon').style.left = '60vw';
	},
	showButtonShowOrder() {
		$('.buttonShowOrder').style.left = '60vw';
	},
	hideButtonShowCoupon() {
		$('.buttonShowCoupon').style.left = '100vw';
	},
	hideButtonShowOrder() {
		$('.buttonShowOrder').style.left = '100vw';
	},
	showDivSimpleReviewOrderContainer() {
		$('.divSimpleReviewOrderContainer').style.right = '0vw';
	},
	showDivSimpleReviewOrderCouponContainer() {
		$('.divSimpleReviewOrderCouponContainer').style.right = '0vw';
	},
	hideDivSimpleReviewOrderContainer() {
		$('.divSimpleReviewOrderContainer').style.right = '-40vw';
	},
	hideDivSimpleReviewOrderCouponContainer() {
		$('.divSimpleReviewOrderCouponContainer').style.right = '-40vw';
	},
	setSpanSimpleReviewOrderCount() {
		$('.spanSimpleReviewOrderCount').textContent = addComma(Controller.selectedProductsInfo().reduce((pre, cur) => pre + cur.productCount, 0));
	},
	setSpanSimpleReviewOrderTotalPrice() {
		$('.spanSimpleReviewOrderTotalPrice').textContent = addComma(Controller.selectedProductsInfo().reduce((pre, cur) => pre + (cur.productPrice + cur.productAdditionalFee) * cur.productCount, 0));
	},
	initInputPhoneNumber() {
		$('.inputPhoneNumber').value = '010-';
	},
	showDivSearchingCouponContainer() {
		$('.divSearchingCouponContainer').style.left = '0';
		$('.divResultCouponContainer').style.left = '40vw';
	},
	showDivResultCouponContainer() {
		$('.divSearchingCouponContainer').style.left = '-40vw';
		$('.divResultCouponContainer').style.left = '0';
	},
	setSpanUsingPointTotalPrice() {
		$('.spanUsingPointTotalPrice').textContent = addComma(Controller.selectedProductsInfo().reduce((pre, cur) => pre + (cur.productPrice + cur.productAdditionalFee) * cur.productCount, 0));
	},
	setSpanUsingPointTotalPoint(totalPoint) {
		$('.spanUsingPointTotalPoint').textContent = totalPoint;
	},
	setSpanUsingPointUsingPoint(usingPoint) {
		$('.spanUsingPointUsingPoint').textContent = usingPoint;
	},
	onClickButtonPay() {
		this.initInputPhoneNumber();
		this.showSectionReviewOrderContainer();
		this.initDivDetailedReviewOrderContainer();
		this.createDivDetailedReviewOrderSelectedProductInfoContainer();
		this.setSpanSimpleReviewOrderCount();
		this.setSpanSimpleReviewOrderTotalPrice();
		this.hideButtonShowOrder();
		this.hideDivSimpleReviewOrderCouponContainer();
		this.showButtonShowCoupon();
		this.showDivSimpleReviewOrderContainer();
	},
	onClickButtonSimpleReviewOrderPay() {
		this.hideSectionReviewOrderContainer();
	},
	onClickButtonSimpleReviewOrderBack() {
		this.hideSectionReviewOrderContainer();
	},
	onClickButtonShowCoupon() {
		this.hideButtonShowCoupon();
		this.hideDivSimpleReviewOrderContainer();
		this.initInputPhoneNumber();
		setTimeout(() => {
			this.showButtonShowOrder();
			this.showDivSimpleReviewOrderCouponContainer();
		}, 300);
	},
	onClickButtonShowOrder() {
		this.hideButtonShowOrder();
		this.hideDivSimpleReviewOrderCouponContainer();
		setTimeout(() => {
			this.showButtonShowCoupon();
			this.showDivSimpleReviewOrderContainer();
		}, 300);
	},
	onClickButtonCouponSearching(currentTarget) {
		const maxLength = 13;
		const middleLength = 8;
		$('.inputPhoneNumber').value.length < maxLength && ($('.inputPhoneNumber').value += currentTarget.textContent);
		$('.inputPhoneNumber').value.length === middleLength && ($('.inputPhoneNumber').value += '-');
	},
	onClickButtonCouponBack() {
		const minLength = 4;
		const arrInputPhoneNumberValue = $('.inputPhoneNumber').value.split('');
		arrInputPhoneNumberValue.length > minLength && arrInputPhoneNumberValue.pop() === '-' && arrInputPhoneNumberValue.pop();
		$('.inputPhoneNumber').value = arrInputPhoneNumberValue.join('');
	},
	onClickButtonCouponComplete(userInfo) {
		switch (typeof userInfo) {
			case 'object':
				this.showDivResultCouponContainer();
				this.setSpanUsingPointTotalPrice();
				this.setSpanUsingPointTotalPoint(addComma(userInfo.point));
				break;
			case 'undefined':
				$('.spanCouponSearchingFailed').textContent = 'There is no information about the registered number!';
				break;
			case 'boolean':
				$('.spanCouponSearchingFailed').textContent = 'Please enter the 13th digit of your cell phone!';
				break;
		}
	},
});
