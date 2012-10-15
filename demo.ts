/// <reference path="backbone-v2.ts" />

class Application {

	constructor () {

		var button = document.createElement("button");
		var button2 = document.createElement("button");

		$("#content").append(button, button2);

		var fooBtn = new Foo(button);
		fooBtn.render();
		var fooBtn2 = new Foo(button2);
		fooBtn2.render();

	}

}

class Foo extends Backbone.View {

	public clickedCount: number = 0;

	constructor (el: HTMLElement) {
		super(
			el,
			[
				// ugh @ not being able to reference 'this'
				new Backbone.Event(Foo.prototype.onClick, "click"), 
				new Backbone.Event(Foo.prototype.mouseOver, "mouseover"), 
				new Backbone.Event(Foo.prototype.mouseOut, "mouseout")
			]);
	}
	;
	public render(): Foo {
		this.$el.html("Foo Button");

		return this;
	}

	public onClick(jq: JQueryEventObject): JQuery {
		console.log("clicked count = " + this.clickedCount++);

		//return $(jq.srcElement);	// huh?
		return undefined;
	}

	public mouseOver(jq: JQueryEventObject): JQuery {
		//console.log("mouseOver");
		return undefined;
	}

	public mouseOut(jq: JQueryEventObject): JQuery {
		//console.log("mouseOut");
		return undefined;
	}
}