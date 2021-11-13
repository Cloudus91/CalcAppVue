const app = new Vue({
    el: "#app",
    data: {
        value: "",
        operator: null,
        clickedOperator: false
    },
    methods: {
        insert(number) {
            if (this.clickedOperator) {
                this.value = "";
                this.clickedOperator = false;
            }
            this.value = `${this.value}${number}`
        },
        clear() {
            this.value = "";
        },
        del() {
            this.value = this.value.slice(0, -1)
        },
        changeSign() {
            this.value = this.value.charAt(0) === "-" ?
                this.value.slice(1) : `-${this.value}`
        },
        convertDecimal() {
            if (!this.value) {
                this.value = '0.'
            }
            if (this.value.indexOf('.') === -1) {
                this.value += '.'
            }
        },
        convertPercent() {
            this.value = `${parseFloat(this.value) / 100}`
        },
        setPrevious() {
            this.previous = this.value;
            this.clickedOperator = true;
        },
        calc(operator) {
            switch (operator) {
                case '+':
                    this.operator = (a, b) => a + b;
                    this.setPrevious();
                    break
                case '-':
                    this.operator = (a, b) => a - b;
                    this.setPrevious();
                    break
                case '*':
                    this.operator = (a, b) => a * b
                    this.setPrevious();
                    break
                case '/':
                    this.operator = (a, b) => a / b
                    this.setPrevious();
                    break
                case '%':
                    this.value = `${parseFloat(this.value) / 100}`
            }
        },
        result() {
            this.value = `${this.operator(
                parseFloat(this.previous),
                parseFloat(this.value)
            )}`
            this.previous = null;
        }
    }
})