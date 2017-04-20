
class Calculator {

	constructor(layerName) {

        this.layer = document.getElementById(layerName);
        window[layerName+"_calculator"] = this;

        this.layer.innerHTML = 
            "Tollid: <input type='text' id='" + layerName + "_box' /> " +
            "<input type='button' value='Sentimeetriteks' " +
            "onClick='" + layerName + "_calculator.calcuate();' /> " +
            "<div id='" + layerName + "_response'></div>";

        this.box = document.getElementById(layerName + "_box");
        this.responseArea = document.getElementById(layerName + "_response");
  	}

	calcuate () {
		this.responseArea.innerHTML = parseFloat(this.box.value) * 2.54;
	}
}